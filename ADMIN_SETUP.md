# 관리자 기능 연결 안내

현재 `index.html`에는 달력, 지난 모임 갤러리, 사진·영상·오디오 선택 화면, 4회 이상 결제와 12회 할인, 날짜별 MD 콘텐츠 읽기가 준비되어 있습니다.

실제 회원 로그인, 관리자 권한, 모든 학생에게 보이는 게시글과 미디어 저장은 GitHub Pages만으로 안전하게 만들 수 없습니다. 다음 구조로 연결합니다.

- 공개 홈페이지: GitHub Pages
- 회원 로그인·데이터베이스·미디어 저장: Supabase
- 결제: PayPal Payment Link와 Wise Payment Link
- 관리자 화면: Supabase 관리자 계정만 접근

## 연결 순서

1. Supabase 프로젝트를 만듭니다.
2. SQL Editor에서 `supabase/schema.sql`을 실행합니다.
3. 가입한 본인 계정의 `profiles.role`을 `admin`으로 바꿉니다.
4. 프로젝트 URL과 공개용 anon key를 홈페이지 설정에 연결합니다. `service_role` 키는 절대로 HTML이나 GitHub에 올리지 않습니다.
5. PayPal/Wise 앱에서 만든 결제 링크만 `SETTINGS.paypalMe`, `SETTINGS.wisePayLink`에 넣습니다. 계좌번호나 IBAN 이미지는 공개하지 않습니다.

축제는 데이터베이스 정책에서 종료일이 오늘보다 지난 항목을 자동으로 숨깁니다. 홈페이지에 들어 있는 기본 축제 목록도 같은 방식으로 이미 종료 항목을 숨깁니다.

`content/daily/TEMPLATE.md`를 날짜 이름으로 복사해 올리면 해당 날짜의 오늘의 한국어가 자동 표시됩니다.
