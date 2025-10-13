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

/* ===== 이미지 모달 (경로는 classroom_introduce 하위 폴더) =====
   폴더명에 공백이 있어 반드시 URI 인코딩 필요
   1. future      -> "1.%20future"
   2. happiness   -> "2.%20happiness"
   3. foundation  -> "3.%20foundation"
   4. focus       -> "4.%20focus"
   5. on_class    -> "5.%20on_class"
   6. play        -> "6.%20play" 
*/
const FOLDER = {
  future:     "classroom_introduce/1.%20future",
  happiness:  "classroom_introduce/2.%20happiness",
  foundation: "classroom_introduce/3.%20foundation",
  focus:      "classroom_introduce/4.%20focus",
  on_class:   "classroom_introduce/5.%20on_class",
  // ⭐️ 놀이터 (자유 체험 수업) 추가
  play:       "classroom_introduce/6.%20play" 
};
// 테마별 파일 이름 규칙 (ex. future1.PNG …)
const FILE_PREFIX = {
  future: "future",
  happiness: "happiness",
  foundation: "foundation",
  focus: "focus",
  on_class: "on_class",
  // ⭐️ 놀이터 (자유 체험 수업) 추가
  play: "play" 
};

const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const closeBtn = document.getElementById('closeModal');

let current = { theme:null, index:0, count:0, start:1 };

function buildPath(theme, idx){
  // 실제 파일 번호 = start 기준으로 회전시키기
  const number = idx;
  const folder = FOLDER[theme];
  const prefix = FILE_PREFIX[theme];
  // ⭐️ 확장자를 .PNG로 통일하여 수정
  return `${folder}/${prefix}${number}.PNG`;
}
function openModal(theme, count, start){
  current.theme = theme;
  current.count = Number(count);
  current.index = Number(start);   // 시작 슬라이드
  current.start = Number(start);
  renderModal();
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
}
function renderModal(){
  const path = buildPath(current.theme, current.index);
  modalImg.src = path;
  modalImg.alt = '교실 설명 이미지';
}
function closeModal(){
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
  modalImg.src = '';
}
// prev/next는 실제 존재하는 파일 번호(폴더 내 존재)로 회전
function toPrev(){
  current.index--;
  if(current.index < 1) current.index = current.count;
  renderModal();
}
function toNext(){
  current.index++;
  if(current.index > current.count) current.index = 1;
  renderModal();
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
  if(e.key === 'ArrowLeft') toPrev();
  if(e.key === 'ArrowRight') toNext();
});

/* ===== 보기 버튼 바인딩 ===== */
document.querySelectorAll('.view-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const theme = btn.dataset.theme;
    const count = btn.dataset.count;
    const start = btn.dataset.start || 1;
    openModal(theme, count, start);
  });
});

/* ===== 초기 스크롤 보정 (새로고침 시 anchor 있을 때 튀는 문제 방지) ===== */
window.addEventListener('load', ()=>{
  if(location.hash){
    const id = location.hash.replace('#','');
    setTimeout(()=> smoothScrollTo(id), 30);
  }
});