// ===== 링크(필요시 수정) =====
const FORM_URL  = "https://docs.google.com/forms/d/e/1FAIpQLSfwTpjtMC54kYjYMaYvoJ28UezsAxDzm-OW4EZ3_XWT-l27_A/viewform?usp=header";
const SHEET_URL = "https://docs.google.com/spreadsheets/d/1i2Fib71dI_Bb1L945GchXtm-IAsxHCxRKQ-2alvm5QM/edit?usp=sharing";
const TIMETABLE_CSV_PATH = "data/timetable.csv"; // 신청결과 CSV (추후 업로드)

// ===== 현재 탭 활성화 표기 =====
(function markActiveTab(){
  const page = document.documentElement.getAttribute("data-page") || document.body.getAttribute("data-page");
  document.querySelectorAll(".tabs a").forEach(a=>{
    a.removeAttribute("aria-current");
    if (a.dataset.tab === page) a.setAttribute("aria-current","page");
  });
})();

// ===== (옵션) 예전 공지 목록 로직: 인사말씀 페이지에선 미사용 =====
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

// ===== 신청결과: CSV 기반 시간표 조회 =====
const form = document.getElementById("lookupForm");
const resultArea = document.getElementById("resultArea");

function norm(s){ return String(s || "").trim().toLowerCase(); }
function parseCSV(text){
  const rows=[]; let i=0, field="", inQ=false, row=[];
  while(i<text.length){
    const c=text[i];
    if(inQ){
      if(c==='"' && text[i+1]==='"'){ field+='"'; i++; }
      else if(c==='"'){ inQ=false; }
      else field+=c;
    }else{
      if(c==='"'){ inQ=true; }
      else if(c===','){ row.push(field); field=""; }
      else if(c==='\n'){ row.push(field); rows.push(row); row=[]; field=""; }
      else if(c==='\r'){ }
      else field+=c;
    }
    i++;
  }
  if(field.length>0 || row.length>0){ row.push(field); rows.push(row); }
  return rows;
}
function headerMap(headers){
  const map = {};
  headers.forEach((h,idx)=>{
    const k=norm(h);
    if(/학교|school/.test(k)) map.school = idx;
    else if(/학년|grade/.test(k)) map.grade = idx;
    else if(/반|class/.test(k)) map.class = idx;
    else if(/이름|name/.test(k)) map.name = idx;
    else if(/교시|slot|period/.test(k)) map.slot = idx;
    else if(/시간|time/.test(k)) map.time = idx;
    else if(/활동|activity|program|subject/.test(k)) map.activity = idx;
    else if(/교실|room|장소/.test(k)) map.room = idx;
  });
  return map;
}
function renderSchedule(rows){
  if(!rows.length){
    resultArea.innerHTML = `<p class="muted">조회 결과가 없습니다. 입력 정보를 확인해주세요.</p>`;
    return;
  }
  rows.sort((a,b)=>{
    const sa = a.slot ?? a.time ?? ""; const sb = b.slot ?? b.time ?? "";
    return String(sa).localeCompare(String(sb), 'ko');
  });
  resultArea.innerHTML = rows.map(r=>`
    <article class="card">
      <h3>${r.slot ? `${r.slot}교시` : (r.time || "시간")}</h3>
      <p><strong>활동</strong> ${r.activity || "-"}</p>
      <p><strong>시간</strong> ${r.time || "-"}</p>
      <p><strong>교실</strong> ${r.room || "-"}</p>
    </article>
  `).join("");
}

async function lookup(e){
  e?.preventDefault();
  if(!form || !resultArea) return;
  const q = {
    school: norm(document.getElementById("school").value),
    grade:  norm(document.getElementById("grade").value),
    class:  norm(document.getElementById("class").value),
    name:   norm(document.getElementById("name").value),
  };
  try{
    const res = await fetch(TIMETABLE_CSV_PATH + `?t=${Date.now()}`);
    if(!res.ok) throw new Error("CSV 파일을 불러오지 못했습니다.");
    const text = await res.text();
    const rows = parseCSV(text);
    if(!rows.length) throw new Error("CSV 내용이 비어 있습니다.");
    const headers = rows[0];
    const map = headerMap(headers);
    const data = rows.slice(1).map(r=>({
      school:  r[map.school],
      grade:   r[map.grade],
      class:   r[map.class],
      name:    r[map.name],
      slot:    r[map.slot],
      time:    r[map.time],
      activity:r[map.activity],
      room:    r[map.room],
    }));
    const matched = data.filter(x =>
      norm(x.school)===q.school &&
      norm(x.grade) === q.grade &&
      norm(x.class) === q.class &&
      norm(x.name)  === q.name
    );
    renderSchedule(matched);
  }catch(err){
    console.error(err);
    resultArea.innerHTML = `
      <p class="muted">데이터를 불러올 수 없습니다. <code>${TIMETABLE_CSV_PATH}</code>가 존재하는지 확인해주세요.</p>
    `;
  }
}
form?.addEventListener("submit", lookup);
document.getElementById("resetBtn")?.addEventListener("click", ()=>{
  form.reset(); resultArea.innerHTML = "";
});