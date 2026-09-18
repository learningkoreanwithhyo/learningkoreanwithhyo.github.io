-- Learning Korean with Hyo: 관리자/회원/커뮤니티용 데이터베이스
-- Supabase SQL Editor에서 한 번 실행합니다.
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default '',
  role text not null default 'student' check (role in ('student','admin')),
  created_at timestamptz not null default now()
);

create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path=public
as $$ select exists(select 1 from public.profiles where id=auth.uid() and role='admin') $$;

create table if not exists public.community_posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references public.profiles(id) on delete cascade,
  category text not null,
  body text not null,
  link text,
  media_path text,
  media_type text,
  status text not null default 'published' check(status in ('published','hidden')),
  created_at timestamptz not null default now()
);

create table if not exists public.meetups (
  id uuid primary key default gen_random_uuid(),
  title_ko text not null, title_en text not null default '',
  starts_at timestamptz not null, place text not null default '', map_query text not null default '',
  description_ko text not null default '', description_en text not null default '',
  capacity integer not null default 10, cost text not null default '무료',
  status text not null default 'published' check(status in ('draft','published','cancelled')),
  created_at timestamptz not null default now()
);

create table if not exists public.meetup_media (
  id uuid primary key default gen_random_uuid(),
  meetup_id uuid not null references public.meetups(id) on delete cascade,
  storage_path text not null, media_type text not null, caption text not null default '',
  created_at timestamptz not null default now()
);

create table if not exists public.festivals (
  id uuid primary key default gen_random_uuid(),
  name_ko text not null, name_en text not null default '',
  starts_on date not null, ends_on date not null,
  place text not null default '', official_url text, map_query text,
  status text not null default 'published' check(status in ('draft','published')),
  created_at timestamptz not null default now()
);

create table if not exists public.daily_korean (
  publish_date date primary key,
  content jsonb not null,
  status text not null default 'published' check(status in ('draft','published')),
  updated_at timestamptz not null default now()
);

create table if not exists public.coupons (
  code text primary key, discount_percent numeric not null check(discount_percent>0 and discount_percent<=100),
  starts_at timestamptz, ends_at timestamptz, active boolean not null default true
);

alter table public.profiles enable row level security;
alter table public.community_posts enable row level security;
alter table public.meetups enable row level security;
alter table public.meetup_media enable row level security;
alter table public.festivals enable row level security;
alter table public.daily_korean enable row level security;
alter table public.coupons enable row level security;

create policy "profile own read" on public.profiles for select using(id=auth.uid() or public.is_admin());
create policy "profile own update" on public.profiles for update using(id=auth.uid() or public.is_admin());
create policy "posts public read" on public.community_posts for select using(status='published' or public.is_admin());
create policy "posts member insert" on public.community_posts for insert with check(author_id=auth.uid());
create policy "posts owner or admin update" on public.community_posts for update using(author_id=auth.uid() or public.is_admin());
create policy "posts owner or admin delete" on public.community_posts for delete using(author_id=auth.uid() or public.is_admin());
create policy "meetups public read" on public.meetups for select using(status='published' or public.is_admin());
create policy "meetups admin write" on public.meetups for all using(public.is_admin()) with check(public.is_admin());
create policy "meetup media public read" on public.meetup_media for select using(true);
create policy "meetup media admin write" on public.meetup_media for all using(public.is_admin()) with check(public.is_admin());
create policy "festivals live read" on public.festivals for select using((status='published' and ends_on>=current_date) or public.is_admin());
create policy "festivals admin write" on public.festivals for all using(public.is_admin()) with check(public.is_admin());
create policy "daily public read" on public.daily_korean for select using(status='published' or public.is_admin());
create policy "daily admin write" on public.daily_korean for all using(public.is_admin()) with check(public.is_admin());
create policy "coupons admin only" on public.coupons for all using(public.is_admin()) with check(public.is_admin());

insert into storage.buckets(id,name,public) values('community-media','community-media',true) on conflict do nothing;
insert into storage.buckets(id,name,public) values('meetup-media','meetup-media',true) on conflict do nothing;
create policy "media public read" on storage.objects for select using(bucket_id in ('community-media','meetup-media'));
create policy "community member upload" on storage.objects for insert to authenticated with check(bucket_id='community-media');
create policy "media owner or admin delete" on storage.objects for delete to authenticated using(owner_id=auth.uid() or public.is_admin());
create policy "meetup admin upload" on storage.objects for insert to authenticated with check(bucket_id='meetup-media' and public.is_admin());
