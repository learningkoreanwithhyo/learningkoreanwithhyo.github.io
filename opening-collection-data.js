/* Still keyframes and proposed video direction. No videos have been generated yet. */
(() => {
  'use strict';
  const scenes = [
  {
    "id": "dawn",
    "title": "새벽",
    "hours": "05:00–08:00",
    "wardrobe": "라벤더 잠옷",
    "setting": "커튼이 닫힌 침실 · 침대 구도",
    "story": "커튼 사이로 새벽빛이 번짐 → 눈을 뜸 → 침대에서 상체를 일으키고 방문자를 바라봄",
    "motion": "A thin beam of dawn light glows through the closed curtains. The woman gently opens her eyes, lifts her head and slowly sits up against her pillows, then looks toward the camera with a sleepy soft smile. Her hands move naturally over the duvet. The camera makes a very slow push in. The cat plush stays still on the nightstand. One continuous shot, smooth restrained 3D character animation.",
    "image": "assets/openings/collection/dawn.jpg",
    "original": "assets/openings/collection/dawn.png",
    "number": "01",
    "kind": "daily",
    "label": "DAWN / A SOFT BEGINNING",
    "greeting": "좋은 아침, 조금만 기다려요.",
    "english": "A slow start, a warm hello.",
    "duration": 10
  },
  {
    "id": "morning",
    "title": "오전",
    "hours": "08:00–12:00",
    "wardrobe": "살구색 아침 홈웨어",
    "setting": "활짝 젖힌 커튼 · 커피와 토스트",
    "story": "커피를 내려놓음 → 토스트 옆에서 방문자를 발견 → 미소로 맞이함",
    "motion": "Morning sunlight moves softly across the breakfast table. The woman lowers her coffee mug onto the table, glances up from her toast and notices the camera. She smiles warmly and gives a small welcoming nod. Her hair settles naturally over her shoulder. The camera slowly glides closer. The cat plush on the cabinet remains still. One continuous shot.",
    "image": "assets/openings/collection/morning.jpg",
    "original": "assets/openings/collection/morning.png",
    "number": "02",
    "kind": "daily",
    "label": "COFFEE & KOREAN",
    "greeting": "커피 한 잔, 한국어 한마디.",
    "english": "Let’s start the day together.",
    "duration": 10
  },
  {
    "id": "lunch",
    "title": "점심",
    "hours": "12:00–14:00",
    "wardrobe": "아이보리 블라우스 · 네이비 재킷",
    "setting": "한국 식당 · 떡볶이 식탁",
    "story": "떡볶이를 먹던 손을 멈춤 → 방문자를 발견 → 한입 권하듯 웃음",
    "motion": "The woman pauses with her chopsticks above the tteokbokki bowl. She looks up toward the camera and smiles, then gestures gently toward the food with her free hand as if inviting the visitor to join her. Soft steam rises from the dish. The camera makes a subtle forward glide. The restaurant background stays calm. A single continuous shot.",
    "image": "assets/openings/collection/lunch.jpg",
    "original": "assets/openings/collection/lunch.png",
    "number": "03",
    "kind": "daily",
    "label": "A LITTLE LUNCH BREAK",
    "greeting": "떡볶이 먹으면서 이야기할까요?",
    "english": "There’s always room for you.",
    "duration": 10
  },
  {
    "id": "afternoon",
    "title": "오후",
    "hours": "14:00–18:00",
    "wardrobe": "외출복 · 비녀로 올린 머리",
    "setting": "회사 · 책상과 노트북",
    "story": "노트북에서 손을 뗌 → 어깨와 팔을 가볍게 스트레칭 → 화면 쪽으로 돌아봄",
    "motion": "The woman takes her hands off the laptop keyboard and gently stretches both arms upward while keeping her fingers relaxed. She rolls her shoulders once, lowers her arms and turns her face toward the camera with a refreshed smile. Her pinned-up bun and gold hairpin stay in place. A slow gentle camera arc reveals the laptop and her face. The desk plush stays still. One continuous shot.",
    "image": "assets/openings/collection/afternoon.jpg",
    "original": "assets/openings/collection/afternoon.png",
    "number": "04",
    "kind": "daily",
    "label": "TIME FOR A LITTLE RESET",
    "greeting": "잠깐 쉬고, 우리 만나요.",
    "english": "A fresh moment in a busy day.",
    "duration": 10
  },
  {
    "id": "evening",
    "title": "저녁",
    "hours": "18:00–21:00",
    "wardrobe": "외출복 · 버건디 가방",
    "setting": "집 현관 · 신발을 벗기 전",
    "story": "가방을 내려놓음 → 낮은 구두를 벗음 → 방문자를 돌아보며 집 안으로 안내",
    "motion": "The seated woman places her handbag on the floor beside the entry bench. She leans forward slightly and slips one foot out of its loafer, leaving the shoe neatly on the tile. She straightens up, looks toward the camera and smiles in welcome. The camera gently moves toward the open doorway. The plush on the shoe cabinet remains still. One continuous shot with calm, natural full-body motion.",
    "image": "assets/openings/collection/evening.jpg",
    "original": "assets/openings/collection/evening.png",
    "number": "05",
    "kind": "daily",
    "label": "HOME, SWEET HOME",
    "greeting": "다녀왔어요. 어서 와요!",
    "english": "Come in. Make yourself at home.",
    "duration": 10
  },
  {
    "id": "moonlight",
    "title": "달밤",
    "hours": "21:00–05:00",
    "wardrobe": "크림색 니트",
    "setting": "책 · 무드등 · 달빛이 드는 창",
    "story": "책을 읽음 → 방문자를 알아차림 → 책을 덮고 따뜻하게 맞이함",
    "motion": "The woman reads quietly under the warm lamp. She notices the camera, gently closes her book onto her lap, and looks up with a soft welcoming smile. A few strands of hair move as she lifts her head. Moonlight shines steadily through the window. The camera slowly pushes in, while the cat plush stays still. A calm single continuous shot.",
    "image": "assets/openings/collection/moonlight.jpg",
    "original": "assets/openings/collection/moonlight.png",
    "number": "06",
    "kind": "daily",
    "label": "UNDER THE MOONLIGHT",
    "greeting": "하루 끝, 편하게 들어와요.",
    "english": "A quiet hello under the moon.",
    "duration": 10
  },
  {
    "id": "chuseok",
    "title": "추석",
    "hours": "이벤트 · 2026.09.24–26",
    "wardrobe": "아이보리·연보라 한복",
    "setting": "보름달 · 한옥 · 송편",
    "story": "송편 접시를 두 손으로 내밂 → 작은 목례 → 보름달 아래 환영",
    "motion": "The woman gently raises the plate of songpyeon toward the viewer with both hands, gives a small gracious nod and smiles. Her hanbok ribbon moves softly. The warm lanterns glow as the camera makes a slow forward movement. The harvest moon remains bright beyond the courtyard and the cat plush stays still. One continuous welcoming shot.",
    "image": "assets/openings/collection/chuseok.jpg",
    "original": "assets/openings/collection/chuseok.png",
    "number": "07",
    "kind": "event",
    "label": "HAPPY CHUSEOK",
    "greeting": "풍성하고 따뜻한 한가위 보내세요.",
    "english": "A little warmth to share.",
    "duration": 10
  },
  {
    "id": "christmas",
    "title": "크리스마스",
    "hours": "이벤트 · 12월 24–25일",
    "wardrobe": "버건디 겨울 니트",
    "setting": "트리 · 선물 · 창밖 눈",
    "story": "선물을 들어 보여줌 → 환하게 미소 → 트리 불빛으로 전환",
    "motion": "The woman lifts the small wrapped gift toward the camera with both hands, smiles brightly and tilts her head in a warm greeting. The Christmas tree lights twinkle gently and snow falls beyond the window. The camera slowly moves closer as the warm lights bloom softly near the end. The plush cat remains still on the cabinet. One continuous shot.",
    "image": "assets/openings/collection/christmas.jpg",
    "original": "assets/openings/collection/christmas.png",
    "number": "08",
    "kind": "event",
    "label": "MERRY CHRISTMAS",
    "greeting": "따뜻한 크리스마스 보내세요.",
    "english": "A little gift, a warm hello.",
    "duration": 10
  },
  {
    "id": "newyear",
    "title": "새해",
    "hours": "이벤트 · 1월 1일",
    "wardrobe": "아이보리 터틀넥 · 하늘색 코트",
    "setting": "남산타워 전망대 · 서울 도시뷰와 첫 일출",
    "story": "서울 시내와 첫 일출을 바라봄 → 두 손으로 컵을 감싸고 미소 → 햇살이 퍼지며 홈페이지로 전환",
    "motion": "Inside the panoramic N Seoul Tower observation deck, the woman stands in a relaxed side profile facing the sunrise and the city far below. She gently cups her warm drink with both hands in front of her waist, breathes naturally and gives a soft contented smile while continuing to look at the view. Her shoulders and elbows remain relaxed and aligned. The camera slowly glides beside her toward the broad city panorama as golden dawn light gradually fills the scene. The cup and bag charm remain steady. One continuous cinematic shot.",
    "image": "assets/openings/collection/newyear-v2.jpg",
    "original": "assets/openings/collection/newyear-v2.png",
    "number": "09",
    "kind": "event",
    "label": "A BRAND NEW CHAPTER",
    "greeting": "새해 복 많이 받으세요.",
    "english": "A new year. A new story together.",
    "duration": 10
  }
];
  const byId = Object.fromEntries(scenes.map(scene => [scene.id, scene]));
  const chuseokWindows = [
    // Verified: Korea Tourism Organization 2026 holiday guide.
    { start: '2026-09-24', end: '2026-09-26' }
  ];
  const localDateKey = date => [date.getFullYear(), String(date.getMonth()+1).padStart(2,'0'), String(date.getDate()).padStart(2,'0')].join('-');
  function parseDate(value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return null;
    const [y,m,d] = value.split('-').map(Number);
    const date = new Date(y,m-1,d,12);
    return localDateKey(date) === value ? date : null;
  }
  function selectBase(options = {}) {
    if (Object.prototype.hasOwnProperty.call(byId, options.scene)) return byId[options.scene];
    const date = parseDate(options.date) || new Date();
    const dateKey = localDateKey(date), monthDay = dateKey.slice(5);
    if (chuseokWindows.some(w => dateKey >= w.start && dateKey <= w.end)) return byId.chuseok;
    if (monthDay === '12-24' || monthDay === '12-25') return byId.christmas;
    if (monthDay === '01-01') return byId.newyear;
    const hour = /^(?:[0-9]|1[0-9]|2[0-3])$/.test(String(options.hour ?? '')) ? Number(options.hour) : new Date().getHours();
    if (hour >= 5 && hour < 8) return byId.dawn;
    if (hour >= 8 && hour < 12) return byId.morning;
    if (hour >= 12 && hour < 14) return byId.lunch;
    if (hour >= 14 && hour < 18) return byId.afternoon;
    if (hour >= 18 && hour < 21) return byId.evening;
    return byId.moonlight;
  }
  function withStyle(scene, style) {
    scene = byId[scene.id] || scene;
    if (style !== 'photoreal') return { ...scene, style: 'animated' };
    return {
      ...scene, style: 'photoreal',
      image: `assets/openings/photoreal/${scene.id}.jpg`,
      original: `assets/openings/photoreal/${scene.id}.png`,
      motion: scene.motion.replace('smooth restrained 3D character animation', 'smooth restrained lifelike motion')
    };
  }
  function select(options = {}) { return withStyle(selectBase(options), options.style); }
  window.HyoCollection = Object.freeze({ scenes, byId, select, withStyle, localDateKey, parseDate });
})();
