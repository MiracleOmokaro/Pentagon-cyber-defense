const stages = {
  personal: {
    title: "Personal & grassroots",
    startCost: "Often less than the cost of a serious incident",
    attackCost: "$15k–$50k+",
    assessment: "Focused website & basic system review",
    assessmentNote: "Critical holes plus a simple fix roadmap",
    risks: [
      "Weak or reused passwords",
      "Unpatched site software",
      "No backups",
      "Exposed admin panels",
      "Simple phishing success",
    ],
  },
  micro: {
    title: "Micro & early startup",
    startCost: "Startup capital is often smaller than recovery",
    attackCost: "$50k–$200k",
    assessment: "Full private assessment + prioritised plan",
    assessmentNote: "Risk reduction without enterprise overhead",
    risks: [
      "Misconfigured cloud services",
      "Missing multi-factor authentication",
      "Poor access control",
      "No monitoring",
      "Insecure customer data handling",
    ],
  },
  growing: {
    title: "Growing small business",
    startCost: "Years of progress can be erased in one incident",
    attackCost: "$200k–$1m+",
    assessment: "Deeper assessment + light ongoing support",
    assessmentNote: "A stronger foundation as you scale",
    risks: [
      "Expanding attack surface",
      "Inconsistent team practices",
      "Third-party vendor risk",
      "Incomplete incident response",
      "Compliance gaps",
    ],
  },
};

function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  const btn = document.getElementById("menu-btn");
  if (!menu || !btn) return;
  const open = menu.classList.toggle("open");
  btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  btn.innerHTML = open
    ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>'
    : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
}

function setStage(key) {
  const data = stages[key];
  if (!data) return;
  document.querySelectorAll("[data-stage]").forEach((el) => {
    el.classList.toggle("on", el.getAttribute("data-stage") === key);
  });
  const hit = document.getElementById("risk-hit");
  const start = document.getElementById("risk-start");
  const assess = document.getElementById("risk-assess");
  const note = document.getElementById("risk-note");
  const list = document.getElementById("risk-list");
  if (hit) hit.textContent = data.attackCost;
  if (start) start.textContent = data.startCost;
  if (assess) assess.textContent = data.assessment;
  if (note) note.textContent = data.assessmentNote;
  if (list) {
    list.innerHTML = data.risks
      .map((r) => `<li><span class="dot"></span>${r}</li>`)
      .join("");
  }
}

function onContactSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const err = document.getElementById("form-error");
  const wrap = document.getElementById("form-wrap");
  const done = document.getElementById("form-done");
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();
  if (!name || !email || !message) {
    if (err) err.textContent = "Name, email, and a short description are required.";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    if (err) err.textContent = "Enter a valid email address.";
    return;
  }
  const record = {
    name,
    email,
    business: String(data.get("business") || "").trim(),
    stage: String(data.get("stage") || ""),
    message,
    at: new Date().toISOString(),
  };
  try {
    const prev = JSON.parse(localStorage.getItem("pcd-inquiries") || "[]");
    localStorage.setItem("pcd-inquiries", JSON.stringify([record, ...prev].slice(0, 20)));
  } catch {
    /* ignore */
  }
  if (wrap) wrap.hidden = true;
  if (done) done.hidden = false;
}

function resetContact() {
  const wrap = document.getElementById("form-wrap");
  const done = document.getElementById("form-done");
  const err = document.getElementById("form-error");
  const form = document.getElementById("contact-form");
  if (err) err.textContent = "";
  if (form) form.reset();
  if (wrap) wrap.hidden = false;
  if (done) done.hidden = true;
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}

let deferredInstall = null;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredInstall = e;
  showInstallChip();
});

window.addEventListener("appinstalled", () => {
  deferredInstall = null;
  const chip = document.getElementById("install-chip");
  if (chip) chip.remove();
});

function showInstallChip() {
  if (document.getElementById("install-chip")) return;
  if (window.matchMedia("(display-mode: standalone)").matches) return;
  const chip = document.createElement("button");
  chip.id = "install-chip";
  chip.type = "button";
  chip.className = "install-chip";
  chip.textContent = "Install app";
  chip.addEventListener("click", async () => {
    if (!deferredInstall) return;
    deferredInstall.prompt();
    await deferredInstall.userChoice.catch(() => {});
    deferredInstall = null;
    chip.remove();
  });
  document.body.appendChild(chip);
}

