/*
 * (유) / (초1-2) / (초3-6) / (중) 4개 버튼 클릭 시 모달에 보여줄 교실 목록 데이터
 * - theme: 관 이름 (디자인 반영용), name: 교실 이름, room: n실, time: 소요시간
 */
const AGE_GROUPS_DATA = {
    "유치원": [
        { theme: "future", name: "스마트 체육실: 뛰Go! 즐기Go!", room: "7실", time: "30분" },
        { theme: "future", name: "생각이 움직이는 실험실", room: "3실", time: "30분" },
        { theme: "happiness", name: "쌀 한 톨의 상상력", room: "1실", time: "30분" },
        { theme: "happiness", name: "꿀벌과 나, 함께사는 지구", room: "3실", time: "30분" },
        { theme: "foundation", name: "반짝반짝 마음을 전하는 우리말", room: "3실", time: "30분" },
        { theme: "foundation", name: "똑똑하게 지키는 안전", room: "6실", time: "30분" },
        { theme: "on_class", name: "초등학교 교실 AI를 품다", room: "3실", time: "30분" },
        { theme: "on_class", name: "미래씨의 초록 놀이터", room: "2실", time: "30분" },
        { theme: "focus", name: "백제 품은 사비를 거닐다", room: "1실", time: "없음 (전시)" },
        { theme: "focus", name: "벽돌에 담겨 있는 백제의 멋", room: "2실", time: "30분" },
        { theme: "focus", name: "지구를 품은 놀이 숲", room: "3실", time: "30분" },
        { theme: "play", name: "로봇 기사를 이겨라 (AI 로봇과 오목 대결)", room: "2실", time: "없음" },
        { theme: "play", name: "사랑하는 친구와 솜사탕 만들기", room: "3실", time: "30분" },
        { theme: "play", name: "사랑하는 친구와 팝콘 만들기", room: "4실", time: "30분" },
        { theme: "play", name: "전자(닌텐도 스포츠 활용) 놀이방", room: "5실", time: "없음" },
        { theme: "play", name: "전자(마인크래프트 활용) 놀이방", room: "6실", time: "없음" },
        { theme: "play", name: "환경사랑 다짐 배지 만들기", room: "7실", time: "없음" },
        { theme: "play", name: "나만의 에코백 만들기", room: "8실", time: "없음" },
        // 매점 추가 (시간: 30분)
        { theme: "store", name: "빨간맛 국물떡 대장", room: "1호점", time: "30분" },
        { theme: "store", name: "쫄깃쫄깃 어묵 꼬치랑 국물", room: "2호점", time: "30분" },
        { theme: "store", name: "바삭폭발! 만두 탐험대", room: "3호점", time: "30분" },
        { theme: "store", name: "얼려버린 내 갈증 ~~ 슬러시!", room: "4호점", time: "30분" },
        { theme: "store", name: "소세지의 반란! 핫또~그", room: "5호점", time: "30분" }
    ],
    "초1-2": [
        { theme: "future", name: "스마트 체육실: 뛰Go! 즐기Go!", room: "7실", time: "30분" },
        { theme: "future", name: "생각이 움직이는 실험실", room: "3실", time: "30분" },
        { theme: "happiness", name: "쌀 한 톨의 상상력", room: "1실", time: "30분" },
        { theme: "happiness", name: "꿀벌과 나, 함께사는 지구", room: "3실", time: "30분" },
        { theme: "foundation", name: "나만의 AI 선생님", room: "2실", time: "30분" },
        { theme: "foundation", name: "반짝반짝 마음을 전하는 우리말", room: "3실", time: "30분" },
        { theme: "foundation", name: "똑똑하게 지키는 안전", room: "6실", time: "30분" },
        { theme: "on_class", name: "초등학교 교실 AI를 품다", room: "3실", time: "30분" },
        { theme: "on_class", name: "미래씨의 초록 놀이터", room: "2실", time: "30분" },
        { theme: "focus", name: "백제 품은 사비를 거닐다", room: "1실", time: "없음 (전시)" },
        { theme: "focus", name: "벽돌에 담겨 있는 백제의 멋", room: "2실", time: "30분" },
        { theme: "focus", name: "지구를 품은 놀이 숲", room: "3실", time: "30분" },
        { theme: "play", name: "로봇 기사를 이겨라 (AI 로봇과 오목 대결)", room: "2실", time: "없음" },
        { theme: "play", name: "사랑하는 친구와 솜사탕 만들기", room: "3실", time: "30분" },
        { theme: "play", name: "사랑하는 친구와 팝콘 만들기", room: "4실", time: "30분" },
        { theme: "play", name: "전자(닌텐도 스포츠 활용) 놀이방", room: "5실", time: "없음" },
        { theme: "play", name: "전자(마인크래프트 활용) 놀이방", room: "6실", time: "없음" },
        { theme: "play", name: "환경사랑 다짐 배지 만들기", room: "7실", time: "없음" },
        { theme: "play", name: "나만의 에코백 만들기", room: "8실", time: "없음" },
        // 매점 추가 (시간: 30분)
        { theme: "store", name: "빨간맛 국물떡 대장", room: "1호점", time: "30분" },
        { theme: "store", name: "쫄깃쫄깃 어묵 꼬치랑 국물", room: "2호점", time: "30분" },
        { theme: "store", name: "바삭폭발! 만두 탐험대", room: "3호점", time: "30분" },
        { theme: "store", name: "얼려버린 내 갈증 ~~ 슬러시!", room: "4호점", time: "30분" },
        { theme: "store", name: "소세지의 반란! 핫또~그", room: "5호점", time: "30분" }
    ],
    "초3-6": [
        { theme: "future", name: "머그 위의 명화, AI가 쓴다", room: "1실", time: "30분" },
        { theme: "future", name: "생각 똑딱! 코딩 없는 로봇 마스터", room: "2실", time: "30분" },
        { theme: "future", name: "생각이 움직이는 실험실", room: "3실", time: "30분" },
        { theme: "future", name: "Marty 로봇 댄스 교실", room: "4실", time: "30분" },
        { theme: "future", name: "AI 자율주행: 미래 모빌리티 시티 투어", room: "5실", time: "30분" },
        { theme: "future", name: "AI 마음 코칭 스튜디오", room: "6실", time: "30분" },
        { theme: "future", name: "스마트 체육실: 뛰Go! 즐기Go!", room: "7실", time: "30분" },
        { theme: "happiness", name: "쌀 한 톨의 상상력", room: "1실", time: "30분" },
        { theme: "happiness", name: "자연의 색을 천에 담다", room: "2실", time: "40분" },
        { theme: "happiness", name: "꿀벌과 나, 함께사는 지구", room: "3실", time: "30분" },
        { theme: "happiness", name: "보는 손길, 듣는 눈길", room: "4실", time: "30분" },
        { theme: "happiness", name: "유니버설 디자이너 되기", room: "5실", time: "30분" },
        { theme: "happiness", name: "따뜻한 말이 피어나는 교실", room: "6실", time: "30분" },
        { theme: "foundation", name: "VR로 떠나는 독도 여행", room: "1실", time: "30분" },
        { theme: "foundation", name: "나만의 AI 선생님", room: "2실", time: "30분" },
        { theme: "foundation", name: "반짝반짝 마음을 전하는 우리말", room: "3실", time: "30분" },
        { theme: "foundation", name: "알쏭달쏭 재미있는 한글", room: "4실", time: "30분" },
        { theme: "foundation", name: "뒹굴뒹굴 온독여행", room: "5실", time: "30분" },
        { theme: "foundation", name: "똑똑하게 지키는 안전", room: "6실", time: "30분" },
        { theme: "focus", name: "백제 품은 사비를 거닐다", room: "1실", time: "없음 (전시)" },
        { theme: "focus", name: "벽돌에 담겨 있는 백제의 멋", room: "2실", time: "30분" },
        { theme: "focus", name: "지구를 품은 놀이 숲", room: "3실", time: "30분" },
        { theme: "focus", name: "백제야, 부여에서 놀자!", room: "4실", time: "30분" },
        { theme: "on_class", name: "생성형 AI 활용 창작 수업", room: "1실", time: "30분" },
        { theme: "on_class", name: "초등학교 교실 AI를 품다", room: "3실", time: "30분" },
        { theme: "on_class", name: "마음을 나누는 예절 한 모금", room: "5실", time: "30분" },
        { theme: "on_class", name: "하늘을 나는 배움터!", room: "6실", time: "40분" },
        { theme: "play", name: "그래비트랙스로 나만의 구조물 설계하기", room: "1실", time: "30분" },
        { theme: "play", name: "로봇 기사를 이겨라 (AI 로봇과 오목 대결)", room: "2실", time: "없음" },
        { theme: "play", name: "사랑하는 친구와 솜사탕 만들기", room: "3실", time: "30분" },
        { theme: "play", name: "사랑하는 친구와 팝콘 만들기", room: "4실", time: "30분" },
        { theme: "play", name: "전자(닌텐도 스포츠 활용) 놀이방", room: "5실", time: "없음" },
        { theme: "play", name: "전자(마인크래프트 활용) 놀이방", room: "6실", time: "없음" },
        { theme: "play", name: "환경사랑 다짐 배지 만들기", room: "7실", time: "없음" },
        { theme: "play", name: "나만의 에코백 만들기", room: "8실", time: "없음" },
        // 매점 추가 (시간: 30분)
        { theme: "store", name: "빨간맛 국물떡 대장", room: "1호점", time: "30분" },
        { theme: "store", name: "쫄깃쫄깃 어묵 꼬치랑 국물", room: "2호점", time: "30분" },
        { theme: "store", name: "바삭폭발! 만두 탐험대", room: "3호점", time: "30분" },
        { theme: "store", name: "얼려버린 내 갈증 ~~ 슬러시!", room: "4호점", time: "30분" },
        { theme: "store", name: "소세지의 반란! 핫또~그", room: "5호점", time: "30분" }
    ],
    "중학교": [
        { theme: "future", name: "머그 위의 명화, AI가 쓴다", room: "1실", time: "30분" },
        { theme: "future", name: "생각 똑딱! 코딩 없는 로봇 마스터", room: "2실", time: "30분" },
        { theme: "future", name: "생각이 움직이는 실험실", room: "3실", time: "30분" },
        { theme: "future", name: "Marty 로봇 댄스 교실", room: "4실", time: "30분" },
        { theme: "future", name: "AI 자율주행: 미래 모빌리티 시티 투어", room: "5실", time: "30분" },
        { theme: "future", name: "AI 마음 코칭 스튜디오", room: "6실", time: "30분" },
        { theme: "future", name: "스마트 체육실: 뛰Go! 즐기Go!", room: "7실", time: "30분" },
        { theme: "happiness", name: "쌀 한 톨의 상상력", room: "1실", time: "30분" },
        { theme: "happiness", name: "자연의 색을 천에 담다", room: "2실", time: "40분" },
        { theme: "happiness", name: "꿀벌과 나, 함께사는 지구", room: "3실", time: "30분" },
        { theme: "happiness", name: "보는 손길, 듣는 눈길", room: "4실", time: "30분" },
        { theme: "happiness", name: "유니버설 디자이너 되기", room: "5실", time: "30분" },
        { theme: "happiness", name: "따뜻한 말이 피어나는 교실", room: "6실", time: "30분" },
        { theme: "foundation", name: "VR로 떠나는 독도 여행", room: "1실", time: "30분" },
        { theme: "foundation", name: "뒹굴뒹굴 온독여행", room: "5실", time: "30분" },
        { theme: "focus", name: "백제 품은 사비를 거닐다", room: "1실", time: "없음 (전시)" },
        { theme: "focus", name: "벽돌에 담겨 있는 백제의 멋", room: "2실", time: "30분" },
        { theme: "focus", name: "지구를 품은 놀이 숲", room: "3실", time: "30분" },
        { theme: "focus", name: "백제야, 부여에서 놀자!", room: "4실", time: "30분" },
        { theme: "on_class", name: "생성형 AI 활용 창작 수업", room: "1실", time: "30분" },
        { theme: "on_class", name: "초등학교 교실 AI를 품다", room: "3실", time: "30분" },
        { theme: "on_class", name: "수학과 환경이 만나는 수업 / 과학과 AI가 만나는 수업", room: "4실", time: "30분" },
        { theme: "on_class", name: "마음을 나누는 예절 한 모금", room: "5실", time: "30분" },
        { theme: "on_class", name: "하늘을 나는 배움터!", room: "6실", time: "40분" },
        { theme: "play", name: "그래비트랙스로 나만의 구조물 설계하기", room: "1실", time: "30분" },
        { theme: "play", name: "로봇 기사를 이겨라 (AI 로봇과 오목 대결)", room: "2실", time: "없음" },
        { theme: "play", name: "사랑하는 친구와 솜사탕 만들기", room: "3실", time: "30분" },
        { theme: "play", name: "사랑하는 친구와 팝콘 만들기", room: "4실", time: "30분" },
        { theme: "play", name: "전자(닌텐도 스포츠 활용) 놀이방", room: "5실", time: "없음" },
        { theme: "play", name: "전자(마인크래프트 활용) 놀이방", room: "6실", time: "없음" },
        { theme: "play", name: "환경사랑 다짐 배지 만들기", room: "7실", time: "없음" },
        { theme: "play", name: "나만의 에코백 만들기", room: "8실", time: "없음" },
        // 매점 추가 (시간: 30분)
        { theme: "store", name: "빨간맛 국물떡 대장", room: "1호점", time: "30분" },
        { theme: "store", name: "쫄깃쫄깃 어묵 꼬치랑 국물", room: "2호점", time: "30분" },
        { theme: "store", name: "바삭폭발! 만두 탐험대", room: "3호점", time: "30분" },
        { theme: "store", name: "얼려버린 내 갈증 ~~ 슬러시!", room: "4호점", time: "30분" },
        { theme: "store", name: "소세지의 반란! 핫또~그", room: "5호점", time: "30분" }
    ]
};

/* ===== helper: sticky height 보정 후 부드러운 스크롤 ===== */
function getOffsets(){
  const hero = document.querySelector('.hero');
  const gnb  = document.querySelector('#gnb');
  return (hero?.offsetHeight || 0) + (gnb?.offsetHeight || 0);
}
function smoothScrollTo(id){
  const el = document.getElementById(id);
  if(!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - (document.querySelector('#gnb').offsetHeight + 8);
  window.scrollTo({top: y, behavior: 'smooth'});
}

/* ===== GNB 클릭 ===== */
document.querySelectorAll('.gnb-link').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const target = a.getAttribute('data-target');
    smoothScrollTo(target);
  });
});

/* ===== Top 버튼 ===== */
const btnTop = document.getElementById('btnTop');
window.addEventListener('scroll', ()=>{
  if(window.scrollY > 500) btnTop.classList.add('show');
  else btnTop.classList.remove('show');
});
btnTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));


const FOLDER = {
  future:     "classroom_introduce/1.%20future",
  happiness:  "classroom_introduce/2.%20happiness",
  foundation: "classroom_introduce/3.%20foundation",
  focus:      "classroom_introduce/4.%20focus",
  on_class:   "classroom_introduce/5.%20on_class",
  play:       "classroom_introduce/6.%20play" 
};
const FILE_PREFIX = {
  future: "future",
  happiness: "happiness",
  foundation: "foundation",
  focus: "focus",
  on_class: "on_class",
  play: "play" 
};

const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
const modalContent = document.getElementById('modalContent');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const closeBtn = document.getElementById('closeModal');

let current = { theme:null, index:0, count:0, start:1 };

function buildPath(theme, idx){
  const number = idx;
  const folder = FOLDER[theme];
  const prefix = FILE_PREFIX[theme];
  let extension = '.JPG'; // 기본 확장자는 JPG로 설정

  // PNG 확장자를 사용하는 특정 파일들 지정
  if(
    (theme === 'future' && number === 6) ||    // 미래관 6실
    (theme === 'on_class' && number === 6) ||  // 온수업관 6실
    (theme === 'play' && number === 2)         // 놀이터 2실
  ) {
      extension = '.PNG';
  }

  return `${folder}/${prefix}${number}${extension}`; 
}

function closeModal(){
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
  modalImg.src = '';
  modalImg.style.display = 'none';
  modalContent.style.display = 'none';
  modalContent.innerHTML = '';
  prevBtn.style.display = 'block';
  nextBtn.style.display = 'block';
}

// 이미지 모달 열기
function openImageModal(theme, count, start){
  current.theme = theme;
  current.count = Number(count);
  current.index = Number(start);
  current.start = Number(start);
  
  modalImg.style.display = 'block';
  modalContent.style.display = 'none';
  prevBtn.style.display = 'block';
  nextBtn.style.display = 'block';

  renderImageModal();
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
}

// 이미지 렌더링
function renderImageModal(){
  const path = buildPath(current.theme, current.index);
  modalImg.src = path;
  modalImg.alt = '교실 설명 이미지';
}

// 새로운 목록 모달 열기
function openListModal(ageGroup) {
    const data = AGE_GROUPS_DATA[ageGroup];
    const themeOrder = ["future", "happiness", "foundation", "focus", "on_class", "play", "store"];
    const themeNames = {
        future: "미래관", happiness: "행복관", foundation: "기초관", 
        focus: "중점관", on_class: "온수업관", play: "놀이터", store: "매점 (엄마사랑 분식 천국)"
    };

    // ageGroup 값에 따라 제목을 정의
    let titleText = ageGroup;
    if (ageGroup === '초1-2') titleText = '초등 1-2학년';
    else if (ageGroup === '초3-6') titleText = '초등 3-6학년';
    else if (ageGroup === '중학교') titleText = '중학생';

    let html = `<h3 class="modal-list-title">
                    ${titleText} 참여 가능 교실 (${data ? data.length : 0}개)
                </h3>`;
    
    if (!data || data.length === 0) {
        html += `<p style="padding: 20px; text-align: center;">해당 대상의 교실 정보가 없습니다.</p>`;
    } else {
        html += `<ul class="modal-list">`;
        
        // 관별로 그룹화
        const grouped = data.reduce((acc, item) => {
            const key = item.theme;
            if (!acc[key]) acc[key] = [];
            acc[key].push(item);
            return acc;
        }, {});

        // 정렬된 순서대로 HTML 생성
        themeOrder.forEach(themeKey => {
            const group = grouped[themeKey];
            if (group) {
                // 매점 항목의 경우, 첫 번째 항목에만 신청/정원 정보를 표시
                if (themeKey === 'store') {
                    html += `<li class="modal-list-theme tree-${themeKey}">
                                <span class="theme-name">${themeNames[themeKey]}</span>
                                <ul class="theme-items">
                                    <li>
                                        <span class="room-info">매점</span>
                                        <span class="time-info">총 정원 100명</span>
                                    </li>`;
                    // 이후 개별 부스는 목록에만 표시
                    group.sort((a, b) => parseInt(a.room) - parseInt(b.room));
                    group.forEach(item => {
                        // 매점의 경우 시간과 제한 인원을 표시
                        html += `<li style="font-size:0.85em; opacity:0.8; padding:5px 0;">
                                    <span class="room-info" style="color:var(--ink-2);">${item.room}</span>
                                    <span class="class-name" style="padding-left:10px;">${item.name}</span>
                                    <span class="time-info">${item.time} / 제한 20명</span>
                                </li>`;
                    });
                    html += `</ul></li>`;
                } else {
                    // 일반 교실 목록 표시
                    group.sort((a, b) => parseInt(a.room) - parseInt(b.room));

                    html += `<li class="modal-list-theme tree-${themeKey}">
                                <span class="theme-name">${themeNames[themeKey]}</span>
                                <ul class="theme-items">`;
                    group.forEach(item => {
                        const displayTime = item.time;
                        html += `<li>
                                    <span class="room-info">${item.room}</span>
                                    <span class="class-name">${item.name}</span>
                                    <span class="time-info">${displayTime}</span>
                                </li>`;
                    });
                    html += `</ul></li>`;
                }
            }
        });

        html += `</ul>`;
    }
    
    modalContent.innerHTML = html;
    modalImg.style.display = 'none';
    modalContent.style.display = 'block';
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';

    modal.classList.add('show');
    modal.setAttribute('aria-hidden','false');
}

// prev/next는 실제 존재하는 파일 번호(폴더 내 존재)로 회전
function toPrev(){
  if(modalImg.style.display !== 'block') return;
  current.index--;
  if(current.index < 1) current.index = current.count;
  renderImageModal();
}
function toNext(){
  if(modalImg.style.display !== 'block') return;
  current.index++;
  if(current.index > current.count) current.index = 1;
  renderImageModal();
}

prevBtn.addEventListener('click', toPrev);
nextBtn.addEventListener('click', toNext);
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', e=>{
  if(e.target === modal) closeModal();
});
document.addEventListener('keydown', e=>{
  if(!modal.classList.contains('show')) return;
  if(e.key === 'Escape') closeModal();
  if(modalImg.style.display === 'block'){
    if(e.key === 'ArrowLeft') toPrev();
    if(e.key === 'ArrowRight') toNext();
  }
});

/* ===== 보기 버튼 바인딩 (이미지 모달) ===== */
document.querySelectorAll('.view-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const theme = btn.dataset.theme;
    const count = btn.dataset.count;
    const start = btn.dataset.start || 1;
    openImageModal(theme, count, start);
  });
});

/* ===== 교육 대상별 필터 버튼 바인딩 (목록 모달) ===== */
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const ageGroup = btn.dataset.targetAge;
        openListModal(ageGroup);
    });
});

/* ===== 초기 스크롤 보정 (새로고침 시 anchor 있을 때 튀는 문제 방지) ===== */
window.addEventListener('load', ()=>{
  if(location.hash){
    const id = location.hash.replace('#','');
    setTimeout(()=> smoothScrollTo(id), 30);
  }
});