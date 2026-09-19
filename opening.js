/* Original vector animation: no external services or paid assets. */
(() => {
  'use strict';
  const periods = [
    [0,5,'midnight','AFTER HOURS','쉿, 조금만 기다려요.','Even the quiet hours have a little 안녕.','#292747','#403a59','#53506d',['쿨쿨…','어, 누가 왔네?','불 켜드릴게요.','어서 와요!']],
    [5,8,'sunrise','RISE & SHINE','좋은 아침, 반가워요.','A new day. A new word. A new you.','#f4be9d','#ede0df','#d5c5da',['기지개 한 번!','커튼을 활짝.','아침 햇살 가득.','함께 시작해요!']],
    [8,12,'morning','COFFEE & KOREAN','커피 한 잔, 한국어 한마디.','Make yourself at home. The coffee is ready.','#a6cfdf','#e4e3ea','#cdc7de',['커피 한 모금.','화면을 확인하고…','앗, 오셨네요!','어서 와요!']],
    [12,14,'lunch','A LITTLE LUNCH BREAK','맛있는 하루 보내고 있나요?','Good food. Good words. Good company.','#a9d7df','#efdfd2','#dcc8cc',['잘 먹겠습니다!','벌써 이 시간이네.','노트북을 열고…','같이 이야기해요!']],
    [14,18,'afternoon','STRETCH & RESET','잠깐 쉬고, 우리 만나요.','A little stretch. A fresh perspective.','#b6c9e2','#e5dfe9','#c8c4db',['열심히 작업 중.','쭉— 기지개!','화면을 켜고…','한국어 할 시간!']],
    [18,21,'evening','HOME, SWEET HOME','다녀왔어요. 어서 와요!','Leave the busy day at the door.','#ba829d','#77627d','#705b76',['다녀왔습니다!','가방은 여기에.','따뜻하게 불 켜고.','지금 열어드릴게요!']],
    [21,24,'night','ONE LAST CHAPTER','하루 끝, 편안하게 이야기해요.','A cozy little ending to your day.','#262c50','#494360','#59516e',['한 페이지만 더…','누가 왔나 봐요.','조명을 켜고.','반가워요, 들어와요!']]
  ];
  const sp=document.getElementById('splash'); if(!sp)return;
  const query=new URLSearchParams(location.search), route=location.hash.replace(/^#\/?/,'');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  if((route && route!=='home') || reduced.matches){sp.remove();return;}
  const override=query.get('introHour'),now=new Date();
  const hour=override!==null && /^\d{1,2}$/.test(override) && +override<24?+override:now.getHours();
  const p=periods.find(s=>hour>=s[0]&&hour<s[1]),id=p[2];
  const time=`${String(hour).padStart(2,'0')}:${override===null?String(now.getMinutes()).padStart(2,'0'):'00'}`;
  sp.className='opening';sp.dataset.period=id;sp.removeAttribute('aria-hidden');
  sp.setAttribute('role','dialog');sp.setAttribute('aria-modal','true');sp.setAttribute('aria-label','Hyo의 환영 오프닝');
  sp.innerHTML=`<div class="op-top"><span class="op-logo">hyo<span class="op-star">✳</span><small>KOREAN, WITH YOU.</small></span><span class="op-time"><i></i>${time}<small>YOUR LOCAL TIME</small></span></div>
  <div class="op-heading"><p><span>THE EVERYDAY SERIES</span> / ${String(periods.indexOf(p)+1).padStart(2,'0')}</p><h1>${p[4]}</h1><div>${p[5]}</div></div>
  <div class="op-art" aria-hidden="true"><svg class="op-room" viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg"><defs>
  <linearGradient id="opSky" x2="0" y2="1"><stop stop-color="${p[6]}"/><stop offset="1" stop-color="#efbcae"/></linearGradient>
  <linearGradient id="opHair" x2="1" y2="1"><stop stop-color="#24243c"/><stop offset="1" stop-color="#55506f"/></linearGradient>
  <linearGradient id="opScreen" x2="1" y2="1"><stop stop-color="#aabef8"/><stop offset="1" stop-color="#ebbad7"/></linearGradient>
  <radialGradient id="opGlow"><stop stop-color="#fff0b5" stop-opacity=".8"/><stop offset="1" stop-color="#fff0b5" stop-opacity="0"/></radialGradient>
  <pattern id="opGrain" width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".5" fill="#302d48" opacity=".09"/></pattern></defs>
  <g class="op-camera"><rect x="35" y="25" width="930" height="548" rx="30" fill="${p[7]}"/>
  <path d="M35 422H965V546Q965 573 935 573H65Q35 573 35 543Z" fill="${p[8]}"/>
  <path d="M35 422H965M100 470H895M55 526H945M210 422L130 573M445 422L425 573M680 422L720 573M865 422L952 573" fill="none" stroke="#40374e" stroke-opacity=".15" stroke-width="2"/>
  <ellipse cx="513" cy="508" rx="272" ry="48" fill="#b8a4c5" opacity=".5"/><ellipse cx="513" cy="508" rx="251" ry="37" fill="none" stroke="#e6d4df" stroke-width="2"/>
  <rect x="103" y="82" width="262" height="266" rx="112" fill="#444057"/><rect x="113" y="91" width="242" height="246" rx="105" fill="url(#opSky)"/><circle cx="284" cy="161" r="31" fill="#fff2c6"/>
  <path d="M116 293V256H146V229H183V263H205V209H239V271H260V241H289V263H322V228H351V337H116Z" fill="#79779f" opacity=".45"/><path d="M234 90V339M110 224H358" stroke="#f7e9df" stroke-width="7"/>
  <g class="op-curtain-left"><path d="M98 77H231V350Q205 338 182 349Q161 336 136 348Q116 341 98 350Z" fill="#a79cc5"/><path d="M122 81V337M151 82V339M180 81V337M208 81V338" stroke="#82769e" stroke-width="3" opacity=".5"/></g>
  <g class="op-curtain-right"><path d="M235 77H372V350Q348 339 323 350Q300 339 274 350Q253 339 235 350Z" fill="#a79cc5"/><path d="M256 81V337M285 81V339M314 81V337M344 81V338" stroke="#82769e" stroke-width="3" opacity=".5"/></g>
  <path d="M91 76H378" stroke="#494155" stroke-width="8" stroke-linecap="round"/><path class="op-sunbeam" d="M117 245L716 495L344 535L114 335Z" fill="#fff5c9" opacity="0"/>
  <rect x="416" y="87" width="106" height="125" rx="3" fill="#faf1df" stroke="#8d7e99" stroke-width="5"/><circle cx="469" cy="128" r="23" fill="#eaae9e"/><path d="M433 184L453 146L472 172L494 148L508 184" fill="#9cabc0"/><text x="468" y="200" text-anchor="middle" font-size="9" fill="#675c75" letter-spacing="3">SLOW DAYS</text>
  <path d="M554 158H717" stroke="#686077" stroke-width="9" stroke-linecap="round"/><path d="M566 152V112H580V152M584 152V105H598V152M604 152L596 116L610 113L619 151" stroke="#d7b7af" stroke-width="7"/>
  <path d="M657 151L651 127H691L685 151Z" fill="#f0d0ab"/><path d="M673 129V88M673 116Q637 106 654 89Q675 92 673 116M673 108Q703 96 692 78Q673 85 673 108" fill="#88aa9a" stroke="#688779" stroke-width="2"/>
  <circle cx="651" cy="237" r="26" fill="#f9e9d8" stroke="#80728e" stroke-width="4"/><path d="M651 220V237L665 241" stroke="#695673" stroke-width="3" stroke-linecap="round"/>
  <path d="M801 140H935V435H801Z" fill="#36334e" stroke="#a18da3" stroke-width="8"/><g class="op-door"><path d="M807 145L916 165V430L807 431Z" fill="#cbb4bd" stroke="#64566d" stroke-width="3"/><path d="M825 169L895 182V399L825 407Z" fill="none" stroke="#aa8da3" stroke-width="2"/><circle cx="892" cy="301" r="5" fill="#f9df9e"/></g>
  <rect x="765" y="269" width="20" height="30" rx="4" fill="#eee0d8"/><path d="M775 276V291" stroke="#a395a7" stroke-width="3"/>
  <g class="op-bed"><path d="M68 383Q67 361 89 361H310Q333 361 333 384V484H68Z" fill="#89769b" stroke="#5a4d6c" stroke-width="3"/><rect x="79" y="371" width="240" height="40" rx="17" fill="#f5e8dc"/><rect x="88" y="367" width="70" height="35" rx="14" fill="#fff4e8"/><path d="M163 373Q209 360 263 375L319 389V462H158Z" fill="#bdb3d8"/><path d="M179 385V450M206 386V450M232 386V450M260 386V450M286 393V450" stroke="#ded4ea" stroke-width="3"/><path d="M80 483V505M320 483V505" stroke="#5a4d6c" stroke-width="9" stroke-linecap="round"/></g>
  <ellipse class="op-lamp-glow" cx="738" cy="323" rx="202" ry="209" fill="url(#opGlow)" opacity="0"/><g fill="none" stroke="#62576e" stroke-width="7" stroke-linecap="round"><path d="M737 440V286L712 255"/><path d="M714 443H759"/></g><path class="op-lampshade" d="M681 248L706 226L741 264L702 291Z" fill="#cbb4db" stroke="#62576e" stroke-width="3"/><path d="M704 289L740 267" stroke="#fff0b9" stroke-width="5"/>
  <g class="op-person"><ellipse cx="0" cy="-1" rx="58" ry="12" fill="#514361" opacity=".18"/><g class="op-body">
  <path d="M-28-104L-33-24L-12-19L3-89L19-22L40-29L28-109Z" fill="#46415e" stroke="#302c43" stroke-width="3"/><path d="M-33-27Q-49-16-45-9L-8-9L-12-24M19-25L18-9H60Q62-19 39-30" fill="#f6edde" stroke="#48405b" stroke-width="3"/>
  <path d="M-36-198Q0-216 36-195L41-105Q1-91-42-107Z" fill="#a8a0d4" stroke="#49415f" stroke-width="3"/><path d="M-17-204L0-184L17-204M0-184V-132" fill="none" stroke="#e1d6ef" stroke-width="4"/><path d="M-20-135H23V-111H-20Z" fill="#9288c2"/><path d="M-37-115Q0-106 38-115" stroke="#d1c7e7" stroke-width="3" fill="none"/>
  <g class="op-arm-left"><path d="M-32-188L-51-141L-55-103" fill="none" stroke="#48405e" stroke-width="27" stroke-linecap="round"/><path d="M-32-188L-51-141L-55-103" fill="none" stroke="#aaa1d7" stroke-width="21" stroke-linecap="round"/><ellipse cx="-55" cy="-96" rx="11" ry="14" fill="#f0bea9" stroke="#675069" stroke-width="2"/></g>
  <g class="op-arm-right"><path d="M32-188L52-148L58-107" fill="none" stroke="#48405e" stroke-width="27" stroke-linecap="round"/><path d="M32-188L52-148L58-107" fill="none" stroke="#aaa1d7" stroke-width="21" stroke-linecap="round"/><ellipse cx="58" cy="-99" rx="11" ry="14" fill="#f0bea9" stroke="#675069" stroke-width="2"/></g>
  <path d="M-11-227V-207Q0-193 12-207V-229" fill="#eeb8a4" stroke="#675069" stroke-width="2"/><g class="op-head"><path d="M-41-228Q-60-294-19-307Q37-326 48-270L47-204L26-214L-32-211Z" fill="url(#opHair)" stroke="#363149" stroke-width="3"/><ellipse cx="-36" cy="-250" rx="8" ry="12" fill="#f1bfa9"/><ellipse cx="37" cy="-250" rx="8" ry="12" fill="#f1bfa9"/>
  <path d="M-36-274Q0-302 36-274L33-241Q25-217 0-216Q-27-220-34-243Z" fill="#f2c4ad" stroke="#655067" stroke-width="2"/><path d="M-42-270Q-46-307 0-307Q45-308 44-263Q14-267-3-288Q-16-269-42-260Z" fill="url(#opHair)"/><path d="M-28-294Q-6-308 21-291" fill="none" stroke="#78708e" stroke-width="3" opacity=".6"/><path d="M-29-269L-14-271M13-271L28-268" stroke="#59435a" stroke-width="2.5" stroke-linecap="round"/>
  <g class="op-eyes"><ellipse cx="-20" cy="-258" rx="4" ry="6" fill="#3c334b"/><ellipse cx="21" cy="-258" rx="4" ry="6" fill="#3c334b"/><circle cx="-19" cy="-260" r="1.5" fill="#fff"/><circle cx="22" cy="-260" r="1.5" fill="#fff"/></g><g class="op-sleep-eyes" opacity="0"><path d="M-27-257Q-20-251-13-257M14-257Q21-251 28-257" fill="none" stroke="#59435a" stroke-width="2.5" stroke-linecap="round"/></g>
  <ellipse cx="-26" cy="-245" rx="8" ry="4" fill="#eaa095" opacity=".6"/><ellipse cx="27" cy="-245" rx="8" ry="4" fill="#eaa095" opacity=".6"/><path d="M0-255L-3-246H2" fill="none" stroke="#c58982" stroke-width="1.6"/><path d="M-8-237Q0-229 9-237" fill="none" stroke="#995d6a" stroke-width="2.4" stroke-linecap="round"/><path d="M32-280L41-277" stroke="#e9ba89" stroke-width="5" stroke-linecap="round"/><circle cx="-37" cy="-239" r="3" fill="#eac986"/></g></g></g>
  <g class="op-desk"><path d="M423 417H718L746 447H401Z" fill="#ead5c1" stroke="#6c5871" stroke-width="3"/><path d="M410 448H738V466H410Z" fill="#bfa2ab" stroke="#6c5871" stroke-width="3"/><path d="M427 466L416 543M715 466L728 543" stroke="#66566f" stroke-width="11" stroke-linecap="round"/><path d="M429 478H712" stroke="#b99eac" stroke-width="6"/></g>
  <g class="op-laptop"><path d="M541 437H670L686 447H529Z" fill="#a7a2b7" stroke="#554b68" stroke-width="2"/><g class="op-lid"><rect x="543" y="348" width="127" height="90" rx="7" fill="#554b68"/><rect x="550" y="356" width="113" height="73" rx="3" fill="url(#opScreen)"/><g class="op-screen-content"><rect x="558" y="363" width="97" height="7" rx="3" fill="#fff" opacity=".55"/><circle cx="582" cy="396" r="16" fill="#fcf0e1"/><path d="M608 385H647M608 394H637M608 405H642" stroke="#fff" stroke-width="5" stroke-linecap="round"/><text x="580" y="401" text-anchor="middle" font-size="13" font-weight="bold" fill="#8b7ca6">hyo</text></g></g></g>
  <g class="op-cup"><path d="M-14-22H14V-3Q0 9-14-3Z" fill="#f9e6d1" stroke="#7c6578" stroke-width="2.5"/><path d="M14-19Q31-21 26-8Q24-3 14-6" fill="none" stroke="#7c6578" stroke-width="3"/><path d="M-7-30Q-12-37-5-43M5-30Q1-38 8-43" fill="none" stroke="#fff2df" stroke-width="2" stroke-linecap="round"/></g>
  <g class="op-food"><ellipse cx="481" cy="430" rx="29" ry="8" fill="#efe5d9"/><path d="M451 415H510Q506 439 481 436Q457 436 451 415" fill="#d3aab2" stroke="#766079" stroke-width="2"/><path d="M456 414Q465 400 475 413Q486 398 496 413Q504 403 508 414" fill="#f3d18d"/><path d="M490 408L515 378M496 410L522 382" stroke="#79617b" stroke-width="3"/></g>
  <g class="op-book"><path d="M-42-24Q-20-31 0-17Q22-30 42-24V23Q22 17 0 30Q-20 17-42 23Z" fill="#f5dfb7" stroke="#735b74" stroke-width="3"/><path d="M0-16V29M-33-12L-10-6M-33-2L-10 4M11-5L33-12M11 5L33-2" stroke="#bca488" stroke-width="2"/></g>
  <g class="op-bag"><path d="M-17-18Q-17-44 3-44Q23-44 23-18" fill="none" stroke="#745a75" stroke-width="5"/><path d="M-27-23H30L36 29H-33Z" fill="#dea892" stroke="#745a75" stroke-width="3"/><path d="M-18 1H20" stroke="#f4d1b4" stroke-width="3"/></g>
  <rect x="291" y="350" width="30" height="17" rx="4" fill="#534961"/><text x="306" y="362" text-anchor="middle" font-size="9" fill="#e6cee9">${time}</text><path class="op-ring" d="M284 344L276 335M306 339V328M328 344L337 335" stroke="#efd894" stroke-width="3" stroke-linecap="round"/>
  <g class="op-reaction"><path d="M-25-19Q0-45 30-20L25 12H-11L-20 22L-18 10Q-35 1-25-19" fill="#fff2db" stroke="#8d779c" stroke-width="2"/><text class="op-reaction-text" text-anchor="middle" x="2" y="3" font-size="25" font-weight="700" fill="#79628c">!</text></g>
  <g class="op-sparkles" fill="#fff1c5"><path d="M391 278L395 290L407 294L395 298L391 310L387 298L375 294L387 290Z"/><path d="M706 337L710 349L722 353L710 357L706 369L702 357L690 353L702 349Z"/></g><rect x="35" y="25" width="930" height="548" rx="30" fill="url(#opGrain)"/></g></svg></div>
  <div class="op-caption"><i></i><span id="op-caption-text">${p[9][0]}</span></div><div class="op-bottom"><span>${p[3]}<small>A LITTLE MOMENT WITH HYO</small></span><div class="op-progress"><i></i></div><button type="button" id="splashSkip">건너뛰기 <span>↗</span></button></div><div class="op-portal" aria-hidden="true"><span>안녕<span class="op-star">✳</span><small>MAKE YOURSELF AT HOME.</small></span></div>`;
  const $=s=>sp.querySelector(s);
  const rig=Object.fromEntries(['person','body','head','arm-left','arm-right','eyes','sleep-eyes','cup','book','bag','food','reaction','reaction-text','curtain-left','curtain-right','sunbeam','lamp-glow','lampshade','lid','door','camera','ring','sparkles'].map(n=>[n,$('.op-'+n)]));
  const poses={
    midnight:[{x:140,y:580,r:-82,eye:0},{x:260,y:468,eye:.35},{x:640,y:495,right:-95},{x:502,y:505,right:-55}],
    sunrise:[{x:239,y:467,eye:.4},{x:302,y:465,left:95,right:-100},{x:421,y:483,left:0,right:0},{x:502,y:505,right:-55}],
    morning:[{x:501,y:509,right:-120,head:-8},{x:501,y:509,right:-45,head:8},{x:501,y:509,right:-145,head:-5},{x:502,y:505,right:-55}],
    lunch:[{x:501,y:509,left:100,head:8},{x:501,y:509,left:70,head:18},{x:501,y:509,right:-75},{x:502,y:505,right:-55}],
    afternoon:[{x:501,y:509,left:40,right:-45,head:8},{x:501,y:498,left:155,right:-155,head:-10},{x:501,y:509,right:-80},{x:502,y:505,right:-55}],
    evening:[{x:855,y:471,right:10},{x:796,y:488,right:-25,head:8},{x:715,y:489,right:-110},{x:502,y:505,right:-55}],
    night:[{x:501,y:509,left:55,right:-55,head:9},{x:501,y:509,left:20,right:-20,head:-12},{x:636,y:495,right:-100},{x:502,y:505,right:-55}]
  };
  const frames=poses[id].map(v=>({x:501,y:509,r:0,left:0,right:0,head:0,eye:1,...v}));
  const night=['midnight','night','evening'].includes(id),resting=['midnight','sunrise'].includes(id);
  const previousFocus=document.activeElement,previousOverflow=document.body.style.overflow;
  const inert=[...document.body.children].filter(e=>e!==sp&&!['SCRIPT','STYLE','LINK'].includes(e.tagName)).map(e=>[e,e.inert]);
  inert.forEach(([e])=>e.inert=true);document.body.style.overflow='hidden';const skip=$('#splashSkip');skip.focus({preventScroll:true});
  let ended=false,raf=0,started=performance.now(),lastStep=-1;
  const clamp=v=>Math.max(0,Math.min(1,v)),ease=v=>{v=clamp(v);return v*v*(3-2*v);},mix=(a,b,t)=>a+(b-a)*t,attr=(el,k,v)=>el.setAttribute(k,String(v));
  function draw(ms){
    const t=Math.max(0,ms)/1000,step=Math.min(3,Math.floor(t/.92)),next=Math.min(step+1,3),progress=ease((t-step*.92-.25)/.62),a=frames[step],b=frames[next],v={};
    Object.keys(a).forEach(k=>v[k]=mix(a[k],b[k],progress));
    const arrival=ease((t-1.8)/.5),open=ease((t-2.3)/.6);
    attr(rig.person,'transform',`translate(${v.x} ${v.y+Math.sin(t*7)*1.6})`);attr(rig.body,'transform',`rotate(${v.r} 0 -220)`);attr(rig.head,'transform',`rotate(${v.head} 0 -223)`);attr(rig['arm-left'],'transform',`rotate(${v.left} -32 -188)`);attr(rig['arm-right'],'transform',`rotate(${v.right} 32 -188)`);attr(rig.eyes,'opacity',v.eye);attr(rig['sleep-eyes'],'opacity',1-v.eye);
    const curtain=resting?ease((t-.7)/.8):1;attr(rig['curtain-left'],'transform',`translate(98 0) scale(${1-curtain*.79} 1) translate(-98 0)`);attr(rig['curtain-right'],'transform',`translate(372 0) scale(${1-curtain*.79} 1) translate(-372 0)`);attr(rig.sunbeam,'opacity',night?0:curtain*.32);attr(rig['lamp-glow'],'opacity',night?arrival:.35);attr(rig.lampshade,'fill',night&&arrival<.5?'#a298bf':'#f5d9a1');
    const lid=['morning','afternoon'].includes(id)?1:open;attr(rig.lid,'transform',`translate(0 438) scale(1 ${.06+.94*lid}) translate(0 -438)`);attr(rig.door,'transform',id==='evening'?`translate(807 0) scale(${.35+.65*ease((t-.5)/1.5)} 1) translate(-807 0)`:'');
    attr(rig.cup,'opacity',id==='morning'?1:0);const sip=1-ease((t-.5)/.8);attr(rig.cup,'transform',`translate(${mix(696,544,sip)} ${mix(427,274,sip)}) rotate(${-sip*12})`);attr(rig.book,'opacity',id==='night'?1-ease((t-.8)/.6):0);attr(rig.book,'transform',`translate(502 ${345+ease((t-.8)/.6)*75}) scale(${1-ease((t-.8)/.6)*.35})`);attr(rig.food,'opacity',id==='lunch'?1:0);attr(rig.bag,'opacity',id==='evening'?1:0);attr(rig.bag,'transform',`translate(${mix(906,814,ease(t/1.2))} ${mix(398,506,ease((t-.5)/.7))}) rotate(${mix(-8,6,ease(t/1.2))})`);
    attr(rig.ring,'opacity',id==='midnight'&&t<1?.5+Math.sin(t*17)*.5:0);attr(rig.reaction,'transform',`translate(${v.x+72} ${v.y-303}) scale(${t<.8&&id==='midnight'?1:Math.sin(clamp((t-.9)/1.5)*Math.PI)})`);rig['reaction-text'].textContent=t<.8&&id==='midnight'?'z':'!';attr(rig.sparkles,'opacity',arrival);
    // Keep the active character in frame on portrait screens.
    const narrow=sp.clientWidth<601;
    $('.op-room').setAttribute('viewBox',narrow?`${Math.max(35,Math.min(445,v.x-245))} 20 520 570`:'0 0 1000 620');
    const zoom=ease((t-3.1)/.8);attr(rig.camera,'transform',`translate(${500-(500+zoom*100)*(1+zoom*.85)} ${310-(310+zoom*70)*(1+zoom*.85)}) scale(${1+zoom*.85})`);$('.op-progress i').style.transform=`scaleX(${clamp(t/4.3)})`;sp.classList.toggle('op-enter',t>=3.75);if(lastStep!==step){$('#op-caption-text').textContent=p[9][step];lastStep=step;}
  }
  function tick(stamp){if(ended)return;const elapsed=stamp-started;draw(Math.min(elapsed,4300));if(elapsed>=4300){end();return;}raf=requestAnimationFrame(tick);}
  function end(){if(ended)return;ended=true;cancelAnimationFrame(raf);clearTimeout(deadline);sp.classList.add('out');document.removeEventListener('keydown',key);window.removeEventListener('hashchange',end);reduced.removeEventListener('change',motion);setTimeout(()=>{sp.remove();document.body.style.overflow=previousOverflow;inert.forEach(([e,v])=>e.inert=v);const target=previousFocus!==document.body&&previousFocus?.isConnected?previousFocus:document.querySelector('.page.on h1,main h1');if(target){if(!target.hasAttribute('tabindex'))target.setAttribute('tabindex','-1');target.focus({preventScroll:true});}},250);}
  function key(e){if(e.key==='Escape')end();if(e.key==='Tab'){e.preventDefault();skip.focus();}}
  function motion(e){if(e.matches)end();}
  const deadline=setTimeout(end,4600);skip.onclick=end;document.addEventListener('keydown',key);window.addEventListener('hashchange',end);reduced.addEventListener('change',motion);draw(0);raf=requestAnimationFrame(tick);
})();
