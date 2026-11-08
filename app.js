const units = [
  {
    id: 1, title: "分数除法", nav: "分数除法", color: "#e38b63",
    short: "平均分、倒数与单位“1”",
    description: "从一张纸的平均分出发，看见分数除法的意义，理解“除以一个数”为什么可以转化成“乘它的倒数”。",
    concepts: ["分数除以整数", "一个数除以分数", "倒数", "已知部分求整体"],
    knowledge: [
      "<strong>分数除以整数：</strong>把一个分数平均分成若干份，相当于求它的几分之一。",
      "<strong>除法转化：</strong>除以一个不为零的数，等于乘这个数的倒数；能约分时先约分。",
      "<strong>解决实际问题：</strong>已知一个数的几分之几是多少，可以用除法求这个数，也就是求单位“1”。"
    ],
    key: "商的变化有规律：被除数不变，除数小于 1 时商变大；除数大于 1 时商变小。",
    quiz: { q: "有 6 名同学在跳绳，是操场上参加活动总人数的 2/9。操场上一共有多少人？", options: ["12 人", "18 人", "27 人", "54 人"], answer: 2, explain: "6 ÷ 2/9 = 6 × 9/2 = 27（人）。也可以想：2 份是 6 人，9 份就是 27 人。" }
  },
  {
    id: 2, title: "圆", nav: "圆", color: "#5c9dc8",
    short: "半径、周长、面积与圆周率",
    description: "拖动半径，观察直径、周长和面积如何变化；通过滚动与剪拼，亲自发现圆周率与面积公式。",
    concepts: ["圆心与半径", "轴对称与旋转", "C = πd = 2πr", "S = πr²"],
    knowledge: [
      "<strong>圆的特征：</strong>同一个圆中所有半径都相等，d = 2r；圆有无数条对称轴。",
      "<strong>圆的周长：</strong>周长总是直径的 π 倍，计算时 π 通常取 3.14。",
      "<strong>圆的面积：</strong>把圆等分剪拼成近似的平行四边形，底是 πr，高是 r，所以 S = πr²。"
    ],
    key: "半径扩大到原来的 2 倍，直径和周长也扩大到 2 倍，但面积会扩大到 4 倍。",
    quiz: { q: "两个直径 4 m 的小花坛与一个直径 8 m 的大花坛，哪种方案的总面积更大？", options: ["两个小花坛", "一个大花坛", "一样大", "无法比较"], answer: 1, explain: "两个小花坛面积为 2×π×2²=8π；大花坛面积为 π×4²=16π，所以大花坛更大。" }
  },
  {
    id: 3, title: "用字母表示（二）", nav: "用字母表示", color: "#9b87c5",
    short: "数量关系、图形规律与日历",
    description: "字母不只是答案，也能表示不断变化的数量。摆一摆三角形，把重复出现的规律写成一个简洁的式子。",
    concepts: ["用字母表示数量关系", "代入求值", "探索图形规律", "日历中的关系"],
    knowledge: [
      "<strong>表示关系：</strong>不同数量可用不同字母表示，如 a 条大船和 b 条小船共坐 6a＋4b 人。",
      "<strong>图形规律：</strong>连续摆 n 个三角形，第一个用 3 根，之后每个增加 2 根，共需 2n＋1 根。",
      "<strong>日历规律：</strong>左右相邻相差 1，上下相邻相差 7；用字母能表示任意位置的数。"
    ],
    key: "同一个规律可以有不同写法：3＋2(n－1) 与 2n＋1 表示的是同一种数量关系。",
    quiz: { q: "按连续摆三角形的规律，71 根小棒可以摆多少个三角形？", options: ["23 个", "35 个", "36 个", "70 个"], answer: 1, explain: "2n＋1=71，所以 2n=70，n=35。" }
  },
  {
    id: 4, title: "分数的应用", nav: "分数的应用", color: "#d69b45",
    short: "分数混合运算与增减问题",
    description: "借助条形图找准单位“1”，看清“比原来多几分之几”和“比后来少几分之几”为什么不一样。",
    concepts: ["连续求几分之几", "分数混合运算", "增加几分之几", "减少几分之几"],
    knowledge: [
      "<strong>连续求部分：</strong>可以逐步求，也可以先把两个分数相乘，再乘单位“1”的量。",
      "<strong>运算顺序：</strong>分数混合运算的顺序与整数相同，整数运算律对分数同样适用。",
      "<strong>增加与减少：</strong>新量 = 原量 ×（1＋几分之几）；剩余量 = 原量 ×（1－几分之几）。"
    ],
    key: "比较时要找准单位“1”：冰比水多 1/9，是以水为基准；水比冰少 1/10，是以冰为基准。",
    quiz: { q: "服装进价 80 元，零售价 110 元。零售价比进价提高了几分之几？", options: ["3/8", "3/11", "8/11", "1/3"], answer: 0, explain: "提高的部分是 110－80=30 元，以进价 80 元为单位“1”，所以提高了 30/80=3/8。" }
  },
  {
    id: 5, title: "比的认识", nav: "比的认识", color: "#65a785",
    short: "比值、化简、比例与应用",
    description: "亲手调配绿色颜料，发现前项和后项同时乘相同的数，颜色与比值都不会改变。",
    concepts: ["比与比值", "比、分数、除法", "比的化简", "比例的认识"],
    knowledge: [
      "<strong>比的意义：</strong>两个数相除又叫两个数的比；a∶b=a÷b，a/b 就是比值（b≠0）。",
      "<strong>基本性质：</strong>比的前项和后项同时乘或除以同一个不为 0 的数，比值不变。",
      "<strong>比例：</strong>两个比的比值相等，就能组成比例；速度、单价等都可用比值刻画。"
    ],
    key: "化简比的结果仍是一个比，通常写成最简整数比；求比值的结果是一个数。",
    quiz: { q: "把 24∶42 化成最简整数比，结果是多少？", options: ["4∶6", "4∶7", "12∶21", "6∶7"], answer: 1, explain: "前项和后项同时除以最大公因数 6，24∶42=4∶7。" }
  },
  {
    id: 6, title: "确定位置", nav: "确定位置", color: "#d47775",
    short: "方向、角度、距离与路线",
    description: "在方向标上移动目标，用方向、角度和距离准确报告位置；切换观测点，发现相对位置的变化。",
    concepts: ["观测点", "方向与角度", "距离", "描述行走路线"],
    knowledge: [
      "<strong>三个要素：</strong>用方向和距离确定位置时，要先明确观测点，再说方向、角度和距离。",
      "<strong>相对位置：</strong>观测点交换后，方向相反、距离不变，如北偏东变为南偏西。",
      "<strong>描述路线：</strong>按行走顺序分段描述，每一段都要以新的起点为观测点。"
    ],
    key: "只说“北偏东”会有一条射线，只说“距离 4 km”会是一个圆；两者结合才能确定一个点。",
    quiz: { q: "奇思看妙想在北偏东 50°方向。妙想看奇思在什么方向？", options: ["北偏西 50°", "南偏东 50°", "南偏西 50°", "东偏北 50°"], answer: 2, explain: "交换观测点后方向相反：北变南、东变西，角度不变，所以是南偏西 50°。" }
  },
  {
    id: 7, title: "百分数的认识与应用（一）", nav: "百分数", color: "#798ac4",
    short: "百分率、互化、营养与储蓄",
    description: "把 100 个小格当作比较的标准，直观理解百分数；在分数、小数和百分数之间自由转换。",
    concepts: ["百分数的意义", "合格率与发芽率", "分数小数互化", "利息 = 本金×利率×时间"],
    knowledge: [
      "<strong>百分数：</strong>表示一个数是另一个数的百分之几，也叫百分比或百分率。",
      "<strong>相互转换：</strong>小数化百分数，小数点右移两位；百分数化小数，去掉百分号并除以 100。",
      "<strong>实际应用：</strong>求一个数的百分之几用乘法；利息 = 本金 × 年利率 × 存期。"
    ],
    key: "百分数可以大于 100%，如 120%；“提高 0.3 个百分点”表示百分数直接相减，不是提高 0.3%。",
    quiz: { q: "淘气罚点球 20 个，进 18 个。他的进球率是多少？", options: ["18%", "80%", "90%", "111.1%"], answer: 2, explain: "进球率 = 进球数 ÷ 罚球数 ×100%=18÷20×100%=90%。" }
  },
  {
    id: 8, title: "观察物体（二）", nav: "观察物体", color: "#4e9b9a",
    short: "投影、三视图与搭积木",
    description: "转动观察方向，把立体积木转化成正面、左面和上面的平面图，建立空间与平面的联系。",
    concepts: ["圆柱与圆锥的投影", "从不同方向观察", "根据视图搭积木", "最少与最多"],
    knowledge: [
      "<strong>有趣的投影：</strong>圆柱从上面看是圆，从正面和侧面看是长方形；圆锥正面和侧面是三角形。",
      "<strong>三视图：</strong>从上面看底层占地，从正面和左面看各列、各行的高度。",
      "<strong>复原模型：</strong>一个视图往往对应多种搭法，可结合多个视图确定或限制模型。"
    ],
    key: "视图相同，立体模型不一定相同。因此只根据部分视图时，常需要讨论“最少”和“最多”。",
    quiz: { q: "从正面和侧面照射圆锥，看到的投影通常是什么形状？", options: ["圆", "长方形", "三角形", "梯形"], answer: 2, explain: "圆锥从上面看是圆，从正面和侧面看都是三角形。" }
  },
  {
    id: 9, title: "数据的表示和分析（三）", nav: "数据的表示和分析", color: "#b27c9d",
    short: "三种统计图、分段整理与变化",
    description: "同一组数据可以有不同表达。切换条形图、折线图和扇形图，学习根据问题选择合适的统计图。",
    concepts: ["条形统计图", "折线统计图", "扇形统计图", "数据分段与比较"],
    knowledge: [
      "<strong>条形统计图：</strong>清楚地表示每个项目的具体数量，便于比较多少。",
      "<strong>折线统计图：</strong>清楚地反映事物的变化情况，还能比较两条线的变化差异。",
      "<strong>扇形统计图：</strong>用整个圆表示总体，清楚表示各部分占总体的百分比。"
    ],
    key: "读图先看名称，再看横轴、纵轴和图例；分段整理时，段的大小会影响我们发现的规律。",
    quiz: { q: "要表示某地区一年 12 个月平均气温的变化情况，最适合用哪种统计图？", options: ["条形统计图", "折线统计图", "扇形统计图", "统计表以外的图都不行"], answer: 1, explain: "重点是气温随月份的“变化情况”，折线统计图最清楚。" }
  }
];

const state = {
  route: "home",
  completed: new Set(),
  circleMode: "radius",
  observerReversed: false,
  cubeView: "iso",
  chartType: "bar"
};

try {
  const saved = JSON.parse(localStorage.getItem("math6-progress") || "[]");
  state.completed = new Set(saved.filter(n => n >= 1 && n <= 9));
} catch (_) {}

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const gcd = (a, b) => b ? gcd(b, a % b) : a;
const fmt = n => Number(n.toFixed(2)).toString();
const frac = (a, b) => `<span class="fraction"><span>${a}</span><span>${b}</span></span>`;
const arrowIcon = '<svg viewBox="0 0 24 24"><path d="M5 12h14m-5-5 5 5-5 5"/></svg>';
const bulbIcon = '<svg viewBox="0 0 24 24"><path d="M9 18h6M10 21h4M8.5 14.5A6 6 0 1 1 15.5 14.5C14.5 15.4 15 18 15 18H9s.5-2.6-.5-3.5Z"/></svg>';

function unitIcon(id) {
  const icons = {
    1: '<svg viewBox="0 0 70 70"><rect x="10" y="16" width="48" height="34" rx="3"/><path d="M22 16v34M34 16v34M46 16v34M10 33h48"/><path d="m39 55 18-18" stroke-width="2"/></svg>',
    2: '<svg viewBox="0 0 70 70"><circle cx="35" cy="35" r="24"/><path d="M35 35 56 20M11 35h48"/><circle cx="35" cy="35" r="2"/></svg>',
    3: '<svg viewBox="0 0 70 70"><path d="m8 49 13-25 13 25Zm26 0 13-25 13 25"/><path d="M21 24 34 49m13-25L34 49"/><text x="29" y="17" fill="currentColor" stroke="none" font-size="14">n</text></svg>',
    4: '<svg viewBox="0 0 70 70"><path d="M9 22h36M9 47h52" stroke-width="8" stroke-linecap="round"/><path d="M45 16v12M45 41v12"/><path d="m50 28 10-12" stroke-width="2"/></svg>',
    5: '<svg viewBox="0 0 70 70"><path d="M12 22h22v37H12zM36 13h22v46H36z"/><path d="M12 35h22M36 28h22"/><path d="M18 12v5m33-10v2"/></svg>',
    6: '<svg viewBox="0 0 70 70"><circle cx="34" cy="37" r="23"/><path d="M34 9v56M6 37h56M34 37 50 18"/><circle cx="50" cy="18" r="4"/></svg>',
    7: '<svg viewBox="0 0 70 70"><circle cx="20" cy="18" r="8"/><circle cx="50" cy="52" r="8"/><path d="m14 58 42-46" stroke-width="2"/></svg>',
    8: '<svg viewBox="0 0 70 70"><path d="m35 9 24 14-24 14L11 23Zm-24 14v25l24 14 24-14V23M35 37v25"/><path d="m23 16 24 14v25"/></svg>',
    9: '<svg viewBox="0 0 70 70"><path d="M9 57h53M14 53V35m12 18V22m12 31V29m12 24V12m12 41V41" stroke-width="6"/><path d="m12 24 13-9 14 5L53 8" stroke-width="1.5"/></svg>'
  };
  return icons[id];
}

function saveProgress() {
  try { localStorage.setItem("math6-progress", JSON.stringify([...state.completed])); } catch (_) {}
}

function updateProgress() {
  const count = state.completed.size;
  $("#progressNumber").textContent = count;
  $("#progressRing").style.setProperty("--progress", `${count / 9 * 360}deg`);
}

function renderNav() {
  $("#unitNav").innerHTML = `
    <button class="nav-home ${state.route === "home" ? "active" : ""}" data-route="home">
      <svg viewBox="0 0 24 24"><path d="m4 11 8-7 8 7v9h-6v-6h-4v6H4Z"/></svg>学习首页
    </button>
    ${units.map(u => `<button class="nav-item ${state.route === u.id ? "active" : ""}" style="--nav-color:${u.color}" data-route="${u.id}">
      <span class="nav-index">${String(u.id).padStart(2, "0")}</span><span class="nav-title">${u.nav}</span>${state.completed.has(u.id) ? '<span class="nav-check">✓</span>' : ""}
    </button>`).join("")}`;
  $$('[data-route]', $("#unitNav")).forEach(btn => btn.addEventListener("click", () => navigate(btn.dataset.route)));
  updateProgress();
}

function navigate(route) {
  location.hash = route === "home" ? "home" : `unit-${route}`;
  $("#sidebar").classList.remove("open");
}

function route() {
  const match = location.hash.match(/^#unit-([1-9])$/);
  state.route = match ? Number(match[1]) : "home";
  renderNav();
  if (state.route === "home") renderHome(); else renderLesson(units[state.route - 1]);
  window.scrollTo({ top: 0, behavior: "instant" });
}

function renderHome() {
  $("#breadcrumb").innerHTML = "学习首页 <span>/</span> 探索数学";
  $("#app").innerHTML = `
    <section class="home-hero">
      <div class="hero-copy">
        <div class="eyebrow">北师大版 · 六年级上册</div>
        <h1>把数学，变成<br><em>看得见的实验。</em></h1>
        <p>拖动、观察、猜想、验证。用动态图形理解每一个核心知识，让公式不再只是需要记住的符号。</p>
        <button class="primary-button" id="startLearning">开始第一课 ${arrowIcon}</button>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
        <div class="hero-circle"></div><div class="hero-pi">π</div><div class="hero-dot"></div>
        <svg class="hero-triangle" viewBox="0 0 100 100"><path d="M50 8 94 86H6Zm0 0v78M6 86l72-44M94 86 22 42"/></svg>
        <div class="hero-formula">C = 2πr&nbsp;&nbsp; S = πr²</div>
      </div>
    </section>
    <div class="home-stats">
      <div class="stat"><strong>9</strong><span>学习单元</span></div><div class="stat-separator"></div>
      <div class="stat"><strong>27</strong><span>核心知识</span></div><div class="stat-separator"></div>
      <div class="stat"><strong>9</strong><span>互动实验</span></div>
    </div>
    <div class="section-heading"><div><h2>单元学习地图</h2><p>选择一个单元，开始你的数学探索</p></div><span>与教材目录同步</span></div>
    <section class="unit-grid">
      ${units.map(u => `<article class="unit-card" tabindex="0" role="button" data-unit="${u.id}" style="--card-color:${u.color}" aria-label="学习第${u.id}单元 ${u.title}">
        <div class="unit-card-top"><span class="unit-number">UNIT ${String(u.id).padStart(2, "0")}</span><span class="unit-status ${state.completed.has(u.id) ? "done" : ""}">${state.completed.has(u.id) ? "✓" : "→"}</span></div>
        <h3>${u.title}</h3><p>${u.short}</p><div class="card-icon">${unitIcon(u.id)}</div>
      </article>`).join("")}
    </section>
    <div class="practice-strip">
      <div class="practice-icon">∑</div><div><strong>综合实践 · 用数学解决真实问题</strong><p>教材还安排了制订节水方案、制订营养食谱和五子棋活动，把数据、百分数与策略用起来。</p></div>
      <div class="practice-tags"><span>节水方案</span><span>营养食谱</span><span>五子棋</span></div>
    </div>`;
  $("#startLearning").addEventListener("click", () => navigate(1));
  $$(".unit-card").forEach(card => {
    card.addEventListener("click", () => navigate(card.dataset.unit));
    card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") navigate(card.dataset.unit); });
  });
}

function experimentHeader(id) {
  const names = ["分数分割器", "圆的动态实验室", "图形规律发现器", "单位“1”条形图", "颜料配比实验室", "方向定位雷达", "百分数百格板", "立体图形观察台", "统计图切换台"];
  return `<div class="card-header"><h2>${names[id - 1]} <span class="experiment-badge">INTERACTIVE</span></h2><small>拖动参数，观察变化</small></div>`;
}

function rangeControl(id, label, min, max, value, step = 1, suffix = "") {
  return `<div class="control-row"><label for="${id}">${label}</label><input id="${id}" type="range" min="${min}" max="${max}" value="${value}" step="${step}"><span class="control-value" id="${id}Value">${value}${suffix}</span></div>`;
}

function renderLesson(u) {
  document.documentElement.style.setProperty("--unit", u.color);
  $("#breadcrumb").innerHTML = `学习首页 <span>/</span> 第${u.id}单元 · ${u.title}`;
  $("#app").innerHTML = `
    <section class="lesson-header">
      <div class="lesson-kicker"><span class="unit-pill">UNIT ${String(u.id).padStart(2, "0")}</span> 核心知识可视化</div>
      <div class="lesson-title-row"><div><h1>${u.title}</h1><p>${u.description}</p></div><span class="lesson-number-bg">${String(u.id).padStart(2, "0")}</span></div>
      <div class="concept-chips">${u.concepts.map(c => `<span>${c}</span>`).join("")}</div>
    </section>
    <div class="lesson-grid">
      <section class="experiment-card">${experimentHeader(u.id)}${experimentTemplate(u.id)}</section>
      <aside class="lesson-side">
        <section class="knowledge-card">
          <h2 class="card-title">${bulbIcon}知识锦囊</h2>
          <ul class="knowledge-list">${u.knowledge.map(k => `<li>${k}</li>`).join("")}</ul>
          <div class="key-point"><strong>特别注意</strong><br>${u.key}</div>
        </section>
        <section class="quiz-card">
          <div class="quiz-label">QUICK CHECK · 随堂闯关</div><h3>${u.quiz.q}</h3>
          <div class="quiz-options">${u.quiz.options.map((o, i) => `<button class="quiz-option" data-answer="${i}">${String.fromCharCode(65 + i)}. ${o}</button>`).join("")}</div>
          <p class="quiz-feedback" id="quizFeedback">${state.completed.has(u.id) ? "这一单元已经闯关成功，也可以再挑战一次。" : "选出答案，完成本单元的学习打卡。"}</p>
        </section>
      </aside>
    </div>
    <div class="lesson-footer">
      ${u.id > 1 ? `<button class="lesson-nav-button" id="prevUnit">← 上一单元 · ${units[u.id - 2].nav}</button>` : "<span></span>"}
      ${u.id < 9 ? `<button class="lesson-nav-button next" id="nextUnit">下一单元 · ${units[u.id].nav} →</button>` : '<button class="lesson-nav-button next" id="backHome">回到学习地图 →</button>'}
    </div>`;
  bindExperiment(u.id);
  bindQuiz(u);
  if (u.id > 1) $("#prevUnit").addEventListener("click", () => navigate(u.id - 1));
  if (u.id < 9) $("#nextUnit").addEventListener("click", () => navigate(u.id + 1));
  else $("#backHome").addEventListener("click", () => navigate("home"));
}

function bindQuiz(u) {
  $$(".quiz-option").forEach(btn => btn.addEventListener("click", () => {
    const answer = Number(btn.dataset.answer);
    if (answer === u.quiz.answer) {
      $$(".quiz-option").forEach(b => { b.disabled = true; b.classList.toggle("correct", Number(b.dataset.answer) === answer); });
      $("#quizFeedback").textContent = `回答正确！${u.quiz.explain}`;
      const isNew = !state.completed.has(u.id);
      state.completed.add(u.id); saveProgress(); renderNav();
      if (isNew) showToast(`第 ${u.id} 单元闯关成功，学习进度 +1`);
    } else {
      btn.classList.add("wrong"); btn.disabled = true;
      $("#quizFeedback").textContent = "再想一想。先找准数量关系，也可以回到上方实验中寻找线索。";
    }
  }));
}

let toastTimer;
function showToast(message) {
  const toast = $("#toast"); toast.textContent = message; toast.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function experimentTemplate(id) {
  switch (id) {
    case 1: return `<div class="experiment-stage"><div id="fractionVisual"></div><div class="formula-bar" id="fractionFormula"></div><p class="visual-caption" id="fractionCaption"></p></div><div class="controls-panel">${rangeControl("fracNum", "分子", 1, 3, 2)}${rangeControl("fracDen", "分母", 4, 8, 5)}${rangeControl("fracDiv", "平均分成", 2, 5, 2, 1, " 份")}</div>`;
    case 2: return `<div class="experiment-stage"><div class="segmented circle-mode" id="circleModes"><button data-mode="radius" class="active">认识圆</button><button data-mode="circumference">滚动一周</button><button data-mode="area">剪拼面积</button></div><div id="circleVisual"></div><div class="formula-bar" id="circleFormula"></div></div><div class="controls-panel">${rangeControl("circleR", "半径 r", 1, 8, 4, .5, " cm")}</div>`;
    case 3: return `<div class="experiment-stage"><div class="triangle-chain" id="triangleChain"></div><div class="stick-count"><div><strong id="triangleN">4</strong><span>三角形 / 个</span></div><div><strong id="stickN">9</strong><span>小棒 / 根</span></div></div><div class="formula-bar" id="triangleFormula"></div><div class="calendar-mini">日历方框中，若左上角是 a，则四个数依次为 <strong>a、a＋1、a＋7、a＋8</strong>。</div></div><div class="controls-panel">${rangeControl("triangleCount", "三角形个数 n", 1, 8, 4)}</div>`;
    case 4: return `<div class="experiment-stage"><div class="application-visual" id="applicationVisual"></div><div class="formula-bar" id="applicationFormula"></div><div class="compare-note" id="applicationNote"></div></div><div class="controls-panel">${rangeControl("waterVolume", "水的体积", 18, 90, 45, 9, " cm³")}${rangeControl("increaseN", "增加九分之", 1, 3, 1)}</div>`;
    case 5: return `<div class="experiment-stage"><div class="paint-lab" id="paintLab"></div><div class="formula-bar" id="ratioFormula"></div><p class="visual-caption" id="ratioCaption"></p></div><div class="controls-panel">${rangeControl("blueParts", "蓝色颜料", 1, 8, 4, 1, " 份")}${rangeControl("yellowParts", "黄色颜料", 1, 16, 16, 1, " 份")}</div>`;
    case 6: return `<div class="experiment-stage"><div class="position-layout"><div id="positionVisual"></div><div class="position-report" id="positionReport"></div></div></div><div class="controls-panel">${rangeControl("directionAngle", "北偏东角度", 0, 90, 30, 5, "°")}${rangeControl("targetDistance", "目标距离", 1, 6, 4, 1, " km")}</div>`;
    case 7: return `<div class="experiment-stage"><div class="percent-layout"><div class="hundred-grid" id="hundredGrid"></div><div><div class="percent-number" id="percentNumber">64%</div><div class="conversion-list" id="conversionList"></div><div class="interest-box">储蓄小例子：2 万元按年利率 1.55% 存 3 年<br>利息为 <strong>20000 × 1.55% × 3 = 930 元</strong></div></div></div></div><div class="controls-panel">${rangeControl("percentValue", "涂色百分比", 0, 100, 64, 1, "%")}</div>`;
    case 8: return `<div class="experiment-stage"><div class="viewer-toolbar"><div class="segmented" id="cubeViews"><button data-view="iso" class="active">立体模型</button><button data-view="front">从正面看</button><button data-view="left">从左面看</button><button data-view="top">从上面看</button></div></div><div class="cube-stage" id="cubeStage"></div><p class="view-explain" id="viewExplain"></p></div>`;
    case 9: return `<div class="experiment-stage"><div class="chart-tabs"><div class="segmented" id="chartTypes"><button data-chart="bar" class="active">条形统计图</button><button data-chart="line">折线统计图</button><button data-chart="pie">扇形统计图</button></div></div><div class="chart-container" id="chartContainer"></div><div class="chart-insight" id="chartInsight"></div></div>`;
  }
}

function bindExperiment(id) {
  if (id === 1) bindFraction();
  if (id === 2) bindCircle();
  if (id === 3) bindTriangles();
  if (id === 4) bindApplication();
  if (id === 5) bindRatio();
  if (id === 6) bindPosition();
  if (id === 7) bindPercent();
  if (id === 8) bindCubes();
  if (id === 9) bindCharts();
}

function bindRange(id, update, suffix = "") {
  const input = $(`#${id}`);
  input.addEventListener("input", () => {
    $(`#${id}Value`).textContent = `${input.value}${suffix}`;
    update();
  });
}

function bindFraction() {
  const update = () => {
    const n = +$("#fracNum").value, d = +$("#fracDen").value, divisor = +$("#fracDiv").value;
    const resultDen = d * divisor, divisorGcd = gcd(n, resultDen);
    const simpleN = n / divisorGcd, simpleD = resultDen / divisorGcd;
    $("#fractionVisual").innerHTML = `<div class="fraction-visual">
      <div><div class="fraction-step-label">原来的涂色部分：${n}/${d}</div><div class="fraction-bar" style="grid-template-columns:repeat(${d},1fr)">${Array.from({length:d},(_,i)=>`<i class="fraction-cell ${i<n?"shaded":""}"></i>`).join("")}</div></div>
      <div class="fraction-arrow">→</div>
      <div><div class="fraction-step-label">把涂色部分平均分成 ${divisor} 份</div><div class="fraction-grid" style="grid-template-columns:repeat(${d},1fr);grid-template-rows:repeat(${divisor},1fr)">${Array.from({length:d*divisor},(_,i)=>{const row=Math.floor(i/d),col=i%d;return `<i class="fraction-grid-cell ${col>=n?"original-empty":""} ${row===0&&col<n?"selected":""}"></i>`}).join("")}</div></div>
    </div><div class="bar-model"><span>每份是涂色部分的 1/${divisor}</span><div class="mini-segments">${Array.from({length:divisor},(_,i)=>`<i class="${i===0?"on":""}"></i>`).join("")}</div></div>`;
    $("#fractionFormula").innerHTML = `${frac(n,d)} ÷ ${divisor} = ${frac(n,d)} × ${frac(1,divisor)} = ${frac(n,resultDen)} ${divisorGcd>1?` = <span class="highlight">${frac(simpleN,simpleD)}</span>`:""}`;
    $("#fractionCaption").innerHTML = `深色部分是整张纸的 <strong>${simpleN}/${simpleD}</strong>。平均分成 ${divisor} 份，就是乘 ${frac(1,divisor)}。`;
  };
  bindRange("fracNum", update); bindRange("fracDen", update); bindRange("fracDiv", update, " 份"); update();
}

function circleReadouts(r, mode) {
  const values = mode === "area" ? [["半径 r",`${fmt(r)} cm`],["直径 d",`${fmt(2*r)} cm`],["面积 S",`${fmt(3.14*r*r)} cm²`]] : [["半径 r",`${fmt(r)} cm`],["直径 d",`${fmt(2*r)} cm`],["周长 C",`${fmt(2*3.14*r)} cm`]];
  return `<div class="circle-readouts">${values.map(v=>`<div class="readout"><small>${v[0]}</small><strong>${v[1]}</strong></div>`).join("")}</div>`;
}

function bindCircle() {
  $$("#circleModes button").forEach(btn => btn.addEventListener("click", () => {
    state.circleMode = btn.dataset.mode;
    $$("#circleModes button").forEach(b=>b.classList.toggle("active",b===btn)); update();
  }));
  const update = () => {
    const r = +$("#circleR").value, mode = state.circleMode;
    let svg = "", formula = "";
    if (mode === "radius") {
      const R = 30+r*8, cx=250, cy=125;
      svg = `<svg class="circle-svg" viewBox="0 0 500 250" aria-label="圆的半径与直径示意图">
        <defs><pattern id="circleGrid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="#e8ede8" stroke-width="1"/></pattern></defs>
        <rect width="500" height="250" fill="url(#circleGrid)" rx="10"/>
        <circle cx="${cx}" cy="${cy}" r="${R}" fill="${units[1].color}" fill-opacity=".09" stroke="${units[1].color}" stroke-width="2.5"/>
        <path d="M${cx-R} ${cy}H${cx+R}" stroke="#244c60" stroke-width="1.5"/><path d="M${cx} ${cy}V${cy-R}" stroke="${units[1].color}" stroke-width="3"/>
        <circle cx="${cx}" cy="${cy}" r="4" fill="#18302b"/><circle cx="${cx}" cy="${cy-R}" r="4" fill="${units[1].color}"/>
        <text x="${cx+8}" y="${cy+18}" font-size="12" fill="#18302b">O</text><text x="${cx+8}" y="${(cy+cy-R)/2}" font-size="16" fill="${units[1].color}">r</text><text x="${cx-8}" y="${cy+20}" font-size="16" fill="#244c60">d</text>
        <text x="20" y="28" font-size="11" fill="#6d7c77">同一圆中，所有半径都相等</text></svg>`;
      formula = `<span>d = <span class="highlight">2r</span> = ${fmt(2*r)} cm</span><small>圆心决定圆的位置，半径决定圆的大小；沿任意直径对折都能重合。</small>`;
    } else if (mode === "circumference") {
      const R=18+r*5, cx=135, cy=105, start=70, end=start+2*Math.PI*R;
      svg = `<svg class="circle-svg" viewBox="0 0 560 250" aria-label="圆滚动一周与周长示意图">
        <path d="M25 165H535" stroke="#cad3cc" stroke-width="2"/><circle cx="${cx}" cy="${cy}" r="${R}" fill="${units[1].color}" fill-opacity=".08" stroke="${units[1].color}" stroke-width="2.5"/>
        <path d="M${cx} ${cy}L${cx+R*.72} ${cy-R*.72}" stroke="#18302b"/><circle cx="${cx+R*.72}" cy="${cy-R*.72}" r="5" fill="#e38b63"/>
        <path d="M${start} 208H${end}" stroke="${units[1].color}" stroke-width="5" stroke-linecap="round"/><path d="M${start} 195v25M${end} 195v25" stroke="#18302b"/>
        <text x="${(start+end)/2}" y="238" text-anchor="middle" font-size="12" fill="#6d7c77">圆片滚动一周的距离 = 周长 C</text><text x="${cx}" y="${cy+5}" text-anchor="middle" font-size="14" fill="#18302b">O</text></svg>`;
      formula = `<span>C = 2πr ≈ 2 × 3.14 × ${fmt(r)} = <span class="highlight">${fmt(2*3.14*r)} cm</span></span><small>圆周率 π 是周长与直径的固定比值，是一个无限不循环小数。</small>`;
    } else {
      const R=25+r*5, cx=115, cy=122, x=265, w=Math.PI*R, y=122-R/2;
      const rays=Array.from({length:12},(_,i)=>{const a=i*Math.PI/6;return `<path d="M${cx} ${cy}L${cx+R*Math.cos(a)} ${cy+R*Math.sin(a)}" stroke="white" stroke-width="1"/>`}).join("");
      svg = `<svg class="circle-svg" viewBox="0 0 550 250" aria-label="圆剪拼成近似平行四边形示意图">
        <circle cx="${cx}" cy="${cy}" r="${R}" fill="${units[1].color}" fill-opacity=".28" stroke="${units[1].color}" stroke-width="2"/>${rays}
        <path d="M205 122h35m-9-8 9 8-9 8" fill="none" stroke="#89978f" stroke-width="1.5"/>
        <path d="M${x+12} ${y}H${x+w+12}L${x+w} ${y+R}H${x}Z" fill="${units[1].color}" fill-opacity=".22" stroke="${units[1].color}" stroke-width="2"/>
        <path d="M${x+w/4} ${y+3}L${x+w/4-5} ${y+R-3}M${x+w/2} ${y+3}L${x+w/2-5} ${y+R-3}M${x+3*w/4} ${y+3}L${x+3*w/4-5} ${y+R-3}" stroke="white"/>
        <text x="${x+w/2}" y="${y-10}" text-anchor="middle" font-size="12" fill="#6d7c77">底 ≈ 圆周长的一半 = πr</text><text x="${x+w+23}" y="${y+R/2}" font-size="12" fill="#6d7c77">高 = r</text>
        <text x="115" y="225" text-anchor="middle" font-size="11" fill="#6d7c77">等分的份数越多，越接近圆</text></svg>`;
      formula = `<span>S = 底 × 高 = πr × r = <span class="highlight">πr² ≈ ${fmt(3.14*r*r)} cm²</span></span><small>剪拼前后面积不变；平行四边形的底是圆周长的一半，高是圆的半径。</small>`;
    }
    $("#circleVisual").innerHTML = svg + circleReadouts(r, mode);
    $("#circleFormula").innerHTML = formula;
  };
  bindRange("circleR", update, " cm"); update();
}

function bindTriangles() {
  const update = () => {
    const n = +$("#triangleCount").value, w=n*44+40;
    const points=Array.from({length:n+2},(_,i)=>`${20+i*44},${i%2===0?145:55}`);
    let polygons="";
    for(let i=0;i<n;i++) polygons+=`<polygon points="${points[i]} ${points[i+1]} ${points[i+2]}" fill="${units[2].color}" fill-opacity="${i%2===0?.12:.05}" stroke="${units[2].color}" stroke-width="4" stroke-linejoin="round"/>`;
    $("#triangleChain").innerHTML=`<svg viewBox="0 0 ${w} 200" aria-label="${n}个连续三角形"><path d="M0 172H${w}" stroke="#e5e9e3"/>${polygons}<text x="${w/2}" y="193" text-anchor="middle" font-size="11" fill="#6d7c77">第 1 个用 3 根，之后每增加 1 个三角形只需再添 2 根</text></svg>`;
    $("#triangleN").textContent=n; $("#stickN").textContent=2*n+1;
    $("#triangleFormula").innerHTML=`<span>m = 3＋2(n－1) = <span class="highlight">2n＋1</span> = ${2*n+1}</span><small>把 n = ${n} 代入式子，就能直接算出小棒根数。</small>`;
  };
  bindRange("triangleCount",update); update();
}

function bindApplication() {
  const update=()=>{
    const water=+$("#waterVolume").value,n=+$("#increaseN").value,ice=water*(9+n)/9,diff=water*n/9;
    $("#applicationVisual").innerHTML=`<div class="application-row"><div class="application-label">水<small>单位“1”</small></div><div class="segment-bar">${Array.from({length:9},()=>"<i></i>").join("")}</div><div class="application-value">${water} cm³</div></div><div class="application-row"><div class="application-label">冰<small>比水多 ${n}/9</small></div><div class="segment-bar ice">${Array.from({length:9+n},(_,i)=>`<i class="${i>=9?"added":""}">${i>=9?"增加":""}</i>`).join("")}</div><div class="application-value">${fmt(ice)} cm³</div></div>`;
    $("#applicationFormula").innerHTML=`<span>冰的体积 = ${water} ×（1＋${frac(n,9)}）= <span class="highlight">${fmt(ice)} cm³</span></span>`;
    $("#applicationNote").innerHTML=`冰比水多 <strong>${n}/9</strong>（以水为基准）；反过来，水比冰少 <strong>${n}/${9+n}</strong>（以冰为基准）。<br>两次比较的单位“1”不同，所以分数也不同。`;
  };
  bindRange("waterVolume",update," cm³");bindRange("increaseN",update);update();
}

const paintStops = [
  [0, [244, 207, 69]], [.1, [196, 207, 77]], [.2, [131, 189, 96]],
  [.25, [85, 168, 106]], [.33, [53, 151, 123]], [.5, [40, 127, 145]],
  [.75, [36, 105, 165]], [1, [36, 85, 164]]
];
function mixPaint(b, y) {
  const t = b / (b + y);
  const right = paintStops.findIndex(stop => stop[0] >= t);
  if (right <= 0) return `rgb(${paintStops[Math.max(0, right)][1].join(",")})`;
  const [t0, c0] = paintStops[right - 1], [t1, c1] = paintStops[right];
  const amount = (t - t0) / (t1 - t0);
  const rgb = c0.map((value, i) => Math.round(value + (c1[i] - value) * amount));
  return `rgb(${rgb.join(",")})`;
}
function bindRatio() {
  const update=()=>{
    const b=+$("#blueParts").value,y=+$("#yellowParts").value,d=gcd(b,y),sb=b/d,sy=y/d,match=b*4===y;
    const color=mixPaint(b,y),targetColor=mixPaint(1,4);
    const cup=(name,ratio,fill)=>`<div class="paint-cup"><div class="cup"><div class="paint-liquid" style="background:${fill}"></div></div><strong>${name}</strong><small>${ratio}</small></div>`;
    $("#paintLab").innerHTML=`${cup("目标配色","蓝 ∶ 黄 = 1∶4",targetColor)}<div class="mix-result ${match?"match":""}"><span>${match?"✓":"≠"}</span><small>${match?"颜色相同":"继续调配"}</small></div>${cup("我的配色",`${b}∶${y}`,color)}`;
    $("#ratioFormula").innerHTML=`<span>${b}∶${y} =（${b}÷${d}）∶（${y}÷${d}）= <span class="highlight">${sb}∶${sy}</span></span>`;
    $("#ratioCaption").innerHTML=match?`我的配色与目标的比值相同，<strong>颜色相同，能组成比例：${b}∶${y}=1∶4</strong>。`:`目标要求蓝∶黄=1∶4；当前比值是 <strong>${fmt(b/y)}</strong>，而目标比值是 0.25。蓝色占比越大，颜色越偏蓝。`;
  };
  bindRange("blueParts",update," 份");bindRange("yellowParts",update," 份");update();
}

function directionText(angle,reversed=false) {
  if(angle===0)return reversed?"正南":"正北";
  if(angle===90)return reversed?"正西":"正东";
  return reversed?`南偏西 ${angle}°`:`北偏东 ${angle}°`;
}

function bindPosition() {
  const update=()=>{
    const angle=+$("#directionAngle").value,d=+$("#targetDistance").value,reverse=state.observerReversed;
    const rad=angle*Math.PI/180,len=d*22,cx=170,cy=145;
    const tx=cx+(reverse?-1:1)*Math.sin(rad)*len,ty=cy-(reverse?-1:1)*Math.cos(rad)*len;
    const ax=cx+35*Math.sin(rad),ay=cy-35*Math.cos(rad);
    const east=(reverse?-1:1)*d*Math.sin(rad),north=(reverse?-1:1)*d*Math.cos(rad);
    $("#positionVisual").innerHTML=`<svg class="position-svg" viewBox="0 0 360 290" aria-label="方向与距离定位图">
      <rect x="5" y="5" width="350" height="280" rx="12" fill="#f8faf7"/>
      ${[22,44,66,88,110,132].map((r,i)=>`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#dce3dd" stroke-dasharray="${i%2?"3 4":"0"}"/>`).join("")}
      <path d="M${cx} 18V270M35 ${cy}H325" stroke="#b8c5bc"/><path d="m${cx-4} 26 4-8 4 8m140 115 8 4-8 4" fill="none" stroke="#819188"/>
      <text x="${cx}" y="15" text-anchor="middle" font-size="11" fill="#596b62">北</text><text x="338" y="${cy+4}" font-size="11" fill="#596b62">东</text><text x="${cx}" y="282" text-anchor="middle" font-size="11" fill="#596b62">南</text><text x="15" y="${cy+4}" font-size="11" fill="#596b62">西</text>
      <path d="M${cx} ${cy-35}A35 35 0 ${angle>45?1:0} 1 ${ax} ${ay}" fill="none" stroke="#d47775" stroke-width="2" transform="${reverse?`rotate(180 ${cx} ${cy})`:""}"/>
      <path d="M${cx} ${cy}L${tx} ${ty}" stroke="#d47775" stroke-width="2.5" stroke-dasharray="5 3"/>
      <circle cx="${cx}" cy="${cy}" r="7" fill="#18302b"/><circle cx="${tx}" cy="${ty}" r="9" fill="#d47775" stroke="white" stroke-width="4"/>
      <text x="${cx+10}" y="${cy+18}" font-size="11" fill="#18302b">观测点</text><text x="${tx+12}" y="${ty-10}" font-size="11" fill="#a45451">${reverse?"象群":"小公象"}</text>
      <text x="20" y="272" font-size="9" fill="#87948d">每格代表 1 km</text></svg>`;
    $("#positionReport").innerHTML=`<small>位置报告 · ${reverse?"以小公象为观测点":"以象群为观测点"}</small><strong>${directionText(angle,reverse)}</strong><p>距离 <b>${d} km</b><br>向${reverse?"西":"东"} ${fmt(Math.abs(east))} km，向${reverse?"南":"北"} ${fmt(Math.abs(north))} km</p><button class="observer-toggle" id="observerToggle">交换观测点 ↻</button>`;
    $("#observerToggle").addEventListener("click",()=>{state.observerReversed=!state.observerReversed;update();});
  };
  bindRange("directionAngle",update,"°");bindRange("targetDistance",update," km");update();
}

function bindPercent() {
  $("#hundredGrid").innerHTML=Array.from({length:100},(_,i)=>`<i class="percent-cell" data-cell="${i}"></i>`).join("");
  const update=()=>{
    const p=+$("#percentValue").value,d=gcd(p,100);
    $$(".percent-cell").forEach((cell,i)=>cell.classList.toggle("on",i<p));
    $("#percentNumber").textContent=`${p}%`;
    $("#conversionList").innerHTML=`<div class="conversion-item"><span>分数</span><strong>${p===0?"0":`${p}/100${d>1?` = ${p/d}/${100/d}`:""}`}</strong></div><div class="conversion-item"><span>小数</span><strong>${fmt(p/100)}</strong></div><div class="conversion-item"><span>100 g 黄豆中的对应含量</span><strong>${fmt(p)} g</strong></div><div class="conversion-item"><span>250 g 黄豆中的对应含量</span><strong>${fmt(250*p/100)} g</strong></div>`;
  };
  bindRange("percentValue",update,"%");update();
}

const cubeHeights=[[1,1,0],[1,2,0],[0,1,0]];
function isoCube(x,y,z) {
  const sx=190+(x-y)*52,sy=177+(x+y)*27-z*48;
  const top=`${sx},${sy} ${sx+52},${sy+27} ${sx},${sy+54} ${sx-52},${sy+27}`;
  const left=`${sx-52},${sy+27} ${sx},${sy+54} ${sx},${sy+102} ${sx-52},${sy+75}`;
  const right=`${sx},${sy+54} ${sx+52},${sy+27} ${sx+52},${sy+75} ${sx},${sy+102}`;
  return `<g><polygon points="${left}" fill="#4b827e"/><polygon points="${right}" fill="#66aaa4"/><polygon points="${top}" fill="#9ac9bc"/><path d="M${sx-52} ${sy+27}L${sx} ${sy+54}l52-27M${sx} ${sy+54}v48" fill="none" stroke="#356c69" stroke-width="1"/></g>`;
}

function projectionSvg(type) {
  let cells=[];
  if(type==="top") {
    cubeHeights.forEach((row,x)=>row.forEach((h,y)=>{if(h)cells.push({col:y,row:x,h})}));
    return `<svg viewBox="0 0 400 260"><text x="200" y="25" text-anchor="middle" font-size="11" fill="#6d7c77">数字表示这个位置叠放的小正方体个数</text>${Array.from({length:9},(_,i)=>{const x=i%3,y=Math.floor(i/3),h=cubeHeights[y][x];return `<rect x="${130+x*50}" y="${55+y*50}" width="46" height="46" rx="3" fill="${h?"#78b4aa":"#edf1ec"}" stroke="white"/><text x="${153+x*50}" y="${84+y*50}" text-anchor="middle" font-size="16" fill="${h?"white":"#a4afa8"}">${h||""}</text>`}).join("")}<path d="M280 50v155m-5-145 5-10 5 10" stroke="#6d7c77"/><text x="280" y="225" text-anchor="middle" font-size="10" fill="#6d7c77">后面</text></svg>`;
  }
  const heights=type==="front"?cubeHeights.map(row=>Math.max(...row)):[0,1,2].map(y=>Math.max(...cubeHeights.map(row=>row[y])));
  const title=type==="front"?"正面：看到 3 列，每列最高分别为 1、2、1 层":"左面：看到 3 列，每列最高分别为 1、2、0 层";
  return `<svg viewBox="0 0 400 260"><text x="200" y="30" text-anchor="middle" font-size="11" fill="#6d7c77">${title}</text>${heights.map((h,col)=>Array.from({length:h},(_,row)=>`<rect x="${115+col*58}" y="${185-row*52}" width="54" height="48" rx="3" fill="${row%2?"#66aaa4":"#8fc2b5"}" stroke="white"/>`).join("")).join("")}<path d="M95 238H310" stroke="#9eaaa3"/><text x="200" y="255" text-anchor="middle" font-size="9" fill="#8a9690">视线与模型保持水平</text></svg>`;
}

function bindCubes() {
  const update=()=>{
    const view=state.cubeView;
    if(view==="iso") {
      let cubes=[];
      cubeHeights.forEach((row,x)=>row.forEach((h,y)=>{for(let z=0;z<h;z++)cubes.push({x,y,z})}));
      cubes.sort((a,b)=>(a.x+a.y+a.z)-(b.x+b.y+b.z));
      $("#cubeStage").innerHTML=`<svg viewBox="0 0 400 270" aria-label="六个小正方体搭成的立体模型"><ellipse cx="190" cy="247" rx="130" ry="17" fill="#dfe7df" opacity=".6"/>${cubes.map(c=>isoCube(c.x,c.y,c.z)).join("")}<text x="200" y="24" text-anchor="middle" font-size="11" fill="#6d7c77">这个模型一共用了 6 个小正方体</text></svg>`;
      $("#viewExplain").textContent="先整体观察，再切换三个方向。想象视线垂直于对应的面。";
    } else {
      $("#cubeStage").innerHTML=projectionSvg(view);
      $("#viewExplain").textContent=view==="top"?"从上面看只能确定占地位置，不能看出具体高度。":"被前面的积木挡住的低层，在视图中不会另外出现。";
    }
  };
  $$("#cubeViews button").forEach(btn=>btn.addEventListener("click",()=>{state.cubeView=btn.dataset.view;$$("#cubeViews button").forEach(b=>b.classList.toggle("active",b===btn));update()}));update();
}

const census60=[1.78,1.91,2.64],census65=[1.19,1.30,1.91];
function barChart() {
  const names=["第五次","第六次","第七次"];
  return `<svg viewBox="0 0 600 280" aria-label="三次人口普查老年人口数量条形统计图"><text x="300" y="20" text-anchor="middle" font-size="12" fill="#18302b">第五～七次人口普查老年人口数量</text>${[0,1,2,3].map(v=>`<path d="M60 ${230-v*60}H560" stroke="#e4e9e3"/><text x="48" y="${234-v*60}" text-anchor="end" font-size="9" fill="#7e8a84">${v}</text>`).join("")}<text x="18" y="20" font-size="9" fill="#7e8a84">人口数 / 亿</text>${names.map((name,i)=>{const x=105+i*160;return `<rect x="${x}" y="${230-census60[i]*60}" width="38" height="${census60[i]*60}" rx="4" fill="#7ca8cb"/><rect x="${x+48}" y="${230-census65[i]*60}" width="38" height="${census65[i]*60}" rx="4" fill="#b27c9d"/><text x="${x+19}" y="${220-census60[i]*60}" text-anchor="middle" font-size="10" fill="#52758c">${census60[i]}</text><text x="${x+67}" y="${220-census65[i]*60}" text-anchor="middle" font-size="10" fill="#8c5e78">${census65[i]}</text><text x="${x+43}" y="254" text-anchor="middle" font-size="10" fill="#6d7c77">${name}</text>`}).join("")}</svg><div class="chart-legend"><span><i style="background:#7ca8cb"></i>60 岁及以上</span><span><i style="background:#b27c9d"></i>65 岁及以上</span></div>`;
}

function lineChart() {
  const x=[120,300,480],y60=census60.map(v=>225-v*60),y65=census65.map(v=>225-v*60);
  return `<svg viewBox="0 0 600 280" aria-label="三次人口普查老年人口变化折线统计图"><text x="300" y="20" text-anchor="middle" font-size="12" fill="#18302b">老年人口数量变化情况</text>${[0,1,2,3].map(v=>`<path d="M65 ${225-v*60}H550" stroke="#e4e9e3"/><text x="52" y="${229-v*60}" text-anchor="end" font-size="9" fill="#7e8a84">${v}</text>`).join("")}<path d="M${x.map((px,i)=>`${px} ${y60[i]}`).join(" L")}" fill="none" stroke="#7ca8cb" stroke-width="3"/><path d="M${x.map((px,i)=>`${px} ${y65[i]}`).join(" L")}" fill="none" stroke="#b27c9d" stroke-width="3"/>${x.map((px,i)=>`<circle cx="${px}" cy="${y60[i]}" r="5" fill="#7ca8cb" stroke="white" stroke-width="2"/><circle cx="${px}" cy="${y65[i]}" r="5" fill="#b27c9d" stroke="white" stroke-width="2"/><text x="${px}" y="${y60[i]-12}" text-anchor="middle" font-size="10" fill="#52758c">${census60[i]}</text><text x="${px}" y="${y65[i]+18}" text-anchor="middle" font-size="10" fill="#8c5e78">${census65[i]}</text><text x="${px}" y="253" text-anchor="middle" font-size="10" fill="#6d7c77">${["第五次","第六次","第七次"][i]}</text>`).join("")}</svg><div class="chart-legend"><span><i style="background:#7ca8cb"></i>60 岁及以上</span><span><i style="background:#b27c9d"></i>65 岁及以上</span></div>`;
}

function polar(cx,cy,r,angle){return{x:cx+r*Math.cos(angle),y:cy+r*Math.sin(angle)}}
function pieSlice(cx,cy,r,start,end,color) {
  const a=polar(cx,cy,r,start),b=polar(cx,cy,r,end),large=end-start>Math.PI?1:0;
  return `<path d="M${cx} ${cy}L${a.x} ${a.y}A${r} ${r} 0 ${large} 1 ${b.x} ${b.y}Z" fill="${color}" stroke="white" stroke-width="2"/>`;
}
function pieChart() {
  const data=[17.95,63.35,5.20,13.50],colors=["#efc669","#7ca8cb","#9bc2a5","#b27c9d"],labels=["0～14 岁","15～59 岁","60～64 岁","65 岁及以上"];
  let angle=-Math.PI/2,slices="";
  data.forEach((v,i)=>{const end=angle+v/100*Math.PI*2;slices+=pieSlice(180,145,95,angle,end,colors[i]);angle=end});
  return `<svg viewBox="0 0 600 280" aria-label="第七次人口普查年龄分布扇形统计图"><text x="300" y="20" text-anchor="middle" font-size="12" fill="#18302b">第七次人口普查年龄分布</text>${slices}<circle cx="180" cy="145" r="44" fill="white"/><text x="180" y="141" text-anchor="middle" font-size="10" fill="#6d7c77">总体</text><text x="180" y="160" text-anchor="middle" font-size="15" fill="#18302b">100%</text>${labels.map((label,i)=>`<rect x="340" y="${65+i*38}" width="12" height="12" rx="2" fill="${colors[i]}"/><text x="362" y="${75+i*38}" font-size="11" fill="#52635b">${label}</text><text x="525" y="${75+i*38}" text-anchor="end" font-size="12" fill="#18302b">${data[i]}%</text>`).join("")}</svg>`;
}

function bindCharts() {
  const update=()=>{
    const type=state.chartType;
    $("#chartContainer").innerHTML=type==="bar"?barChart():type==="line"?lineChart():pieChart();
    const insights={bar:"<strong>看数量：</strong>条形越长，数量越多；容易比较每次普查的老年人口数。",line:"<strong>看变化：</strong>折线向上表示增长，越陡说明这一阶段增长得越快。",pie:"<strong>看占比：</strong>整个圆是总体，每个扇形表示一个年龄段占总体的百分比。"};
    $("#chartInsight").innerHTML=insights[type];
  };
  $$("#chartTypes button").forEach(btn=>btn.addEventListener("click",()=>{state.chartType=btn.dataset.chart;$$("#chartTypes button").forEach(b=>b.classList.toggle("active",b===btn));update()}));update();
}

$("#menuButton").addEventListener("click",()=>$("#sidebar").classList.toggle("open"));
$("#overviewButton").addEventListener("click",()=>navigate("home"));
window.addEventListener("hashchange",route);
document.addEventListener("keydown",e=>{if(e.key==="Escape")$("#sidebar").classList.remove("open")});
route();
