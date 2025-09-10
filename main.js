// ===== 링크 설정 (고정) =====
const FORM_URL    = "https://docs.google.com/forms/d/e/1FAIpQLSfwTpjtMC54kYjYMaYvoJ28UezsAxDzm-OW4EZ3_XWT-l27_A/viewform?usp=header";
const SHEET_URL   = "https://docs.google.com/spreadsheets/d/1i2Fib71dI_Bb1L945GchXtm-IAsxHCxRKQ-2alvm5QM/edit?usp=sharing";
const CONTACT_URL = "#"; // 문의 폼 링크 생기면 교체

// 푸터 연도
document.getElementById("year")?.textContent = new Date().getFullYear();

// 현재 탭 표시
(function markActiveTab(){
  const page = document.documentElement.getAttribute("data-page") || document.body.getAttribute("data-page");
  document.querySelectorAll(".tabs a").forEach(a=>{
    a.removeAttribute("aria-current");
    if (a.dataset.tab === page) a.setAttribute("aria-current","page");
  });
})();

// 버튼 링크 대입 (혹시 HTML에 직접 href가 없을 경우 대비)
const applyBtn = document.getElementById("applyBtn");
const liveBtn  = document.getElementById("liveBtn");
const contactBtn = document.getElementById("contactFormBtn");
if (applyBtn) applyBtn.href = FORM_URL;
if (liveBtn)  liveBtn.href  = SHEET_URL;
if (contactBtn) contactBtn.href = CONTACT_URL;

// ===== 공지 목록 (notices.html 전용) =====
const noticeList   = document.getElementById("noticeList");
const searchInput  = document.getElementById("noticeSearch");
const filterSelect = document.getElementById("noticeFilter");
let NOTICES = [];

async function loadNotices() {
  if (!noticeList) return;
  try {
    const res = await fetch("data/notices.json", { cache: "no-cache" });
    if (!res.ok) throw new Error("공지 로드 실패");
    NOTICES = await res.json();
    renderNotices();
  } catch (err) {
    noticeList.innerHTML = `<p class="muted">⚠️ 공지를 불러오지 못했습니다. data/notices.json을 확인해주세요.</p>`;
    console.error(err);
  }
}
function renderNotices() {
  const q = (searchInput?.value || "").toLowerCase();
  const f = filterSelect?.value || "";
  const items = NOTICES
    .filter(n => (!f || n.target === f))
    .filter(n => (q ? (n.title + n.summary + n.tag).toLowerCase().includes(q) : true))
    .sort((a,b) => new Date(b.date) - new Date(a.date));

  noticeList.innerHTML = items.map(n => `
    <article class="card">
      <span class="badge">${n.target}</span>
      <h3><a href="${n.link}" target="_blank" rel="noopener">${n.title}</a></h3>
      <p class="meta">${new Date(n.date).toLocaleDateString('ko-KR')} • ${n.tag}</p>
      <p>${n.summary}</p>
    </article>
  `).join("") || `<p class="muted">검색 결과가 없습니다.</p>`;
}
searchInput?.addEventListener("input", renderNotices);
filterSelect?.addEventListener("change", renderNotices);
loadNotices();
