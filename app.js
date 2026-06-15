// ============================================================
//  ΦίΛιΠs — Λογική πλοήγησης & rendering
//  Δεν χρειάζεται να το αγγίξεις για να αλλάξεις το μενού.
//  (Όλα τα δεδομένα είναι στο menu-data.js)
// ============================================================

(function () {
  "use strict";

  // ---- Διγλωσσία: labels για τα στοιχεία του UI ----
  const I18N = {
    gr: {
      enter: "Δες το μενού",
      back: "← Πίσω",
      categories: "Κατηγορίες",
      items: "προϊόντα",
      poweredBy: "Powered by Φίλιπς © 2025"
    },
    en: {
      enter: "View Menu",
      back: "← Back",
      categories: "Categories",
      items: "items",
      poweredBy: "Powered by Φίλιπς © 2025"
    }
  };

  let lang = localStorage.getItem("filips-lang") || "gr";

  // ---- Helpers ----
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  function catTitle(cat) {
    return lang === "gr" ? (cat.titleGr || cat.title) : cat.title;
  }

  // Μορφοποίηση τιμής (π.χ. "7.0 / 28.0" -> "7.0€ / 28.0€", "—" μένει ίδιο)
  function fmtPrice(price) {
    if (!price || price === "—") return esc(price || "");
    return esc(price)
      .split("/")
      .map((p) => p.trim())
      .map((p) => `${p}<span class="eur">€</span>`)
      .join(" / ");
  }

  // ============================================================
  //  RENDER: Κατηγορίες
  // ============================================================
  function renderCategories() {
    const grid = $("#cat-grid");
    grid.innerHTML = MENU.categories
      .map((cat) => {
        const sub = cat.subtitle ? `<span class="st">${esc(cat.subtitle)}</span>` : "";
        return `
        <div class="cat-card" data-cat="${esc(cat.id)}" role="button" tabindex="0">
          <span class="ic">${esc(cat.icon || "•")}</span>
          <span class="t">${esc(catTitle(cat))}</span>
          ${sub}
          <span class="count">${cat.items.length} ${I18N[lang].items}</span>
        </div>`;
      })
      .join("");
  }

  // ============================================================
  //  RENDER: Προϊόντα μιας κατηγορίας
  // ============================================================
  function renderProducts(catId) {
    const cat = MENU.categories.find((c) => c.id === catId);
    if (!cat) {
      goto("categories");
      return;
    }

    $("#prod-title").textContent = catTitle(cat);
    $("#prod-sub").textContent = cat.subtitle || "";

    // Αν τα προϊόντα έχουν πεδίο "group" (π.χ. Whiskey), τα δείχνουμε
    // ομαδοποιημένα με τίτλους υπο-κατηγορίας. Αλλιώς απλή λίστα.
    const wrap = $("#items-wrap");
    const hasGroups = cat.items.some((it) => it.group);

    if (hasGroups) {
      const groups = groupBy(cat.items, (it) => it.group || "");
      wrap.innerHTML = Object.keys(groups)
        .map((g) => {
          const head = g ? `<h2 class="subgroup-title">${esc(g)}</h2>` : "";
          return head + groups[g].map((it) => itemHTML(it)).join("");
        })
        .join("");
    } else {
      wrap.innerHTML = cat.items.map((it) => itemHTML(it)).join("");
    }

    // scroll πάνω-πάνω όταν ανοίγεις κατηγορία
    window.scrollTo(0, 0);
  }

  function groupBy(arr, keyFn) {
    return arr.reduce((acc, x) => {
      const k = keyFn(x);
      (acc[k] = acc[k] || []).push(x);
      return acc;
    }, {});
  }

  function itemHTML(it) {
    const desc = it.desc ? `<div class="desc">${esc(it.desc)}</div>` : "";
    return `
      <div class="item">
        <div class="body">
          <div class="name">${esc(it.name)}</div>
          ${desc}
        </div>
        <div class="price">${fmtPrice(it.price)}</div>
      </div>`;
  }

  // ============================================================
  //  ΠΛΟΗΓΗΣΗ (single-page + URL hash για back button κινητού)
  // ============================================================
  function showView(id) {
    document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
    const el = document.getElementById("view-" + id);
    if (el) el.classList.add("active");
  }

  // Από hash -> οθόνη. Hash μορφές: "", "#menu", "#cat/<id>"
  function route() {
    const hash = location.hash.replace(/^#/, "");
    if (!hash || hash === "splash") {
      showView("splash");
    } else if (hash === "menu" || hash === "categories") {
      renderCategories();
      showView("categories");
    } else if (hash.indexOf("cat/") === 0) {
      const id = hash.slice(4);
      renderProducts(id);
      showView("products");
    } else {
      showView("splash");
    }
  }

  // Αλλαγή hash -> ενεργοποιεί το route() μέσω του hashchange listener
  function goto(target) {
    if (target === "splash") location.hash = "";
    else if (target === "categories") location.hash = "menu";
    else if (target.indexOf("cat:") === 0) location.hash = "cat/" + target.slice(4);
    // Άμεση κλήση: δεν βασιζόμαστε μόνο στο hashchange (κάποια webview δεν το πυροδοτούν).
    route();
  }

  // ============================================================
  //  ΓΛΩΣΣΑ
  // ============================================================
  function applyLang() {
    document.documentElement.lang = lang === "gr" ? "el" : "en";
    $("#btn-enter").textContent = I18N[lang].enter;
    document.querySelectorAll(".btn-back").forEach((b) => (b.textContent = I18N[lang].back));
    $("#cat-page-title").textContent = I18N[lang].categories;
    document.querySelectorAll(".footer-powered").forEach(
      (f) => (f.textContent = I18N[lang].poweredBy)
    );
    document.querySelectorAll(".lang-toggle button").forEach((b) =>
      b.classList.toggle("on", b.dataset.lang === lang)
    );
  }

  function setLang(l) {
    lang = l;
    localStorage.setItem("filips-lang", l);
    applyLang();
    // ξανα-render για τους τίτλους κατηγοριών στη σωστή γλώσσα
    if (document.getElementById("view-categories").classList.contains("active"))
      renderCategories();
    route();
  }

  // ============================================================
  //  EVENTS
  // ============================================================
  function bind() {
    $("#btn-enter").addEventListener("click", () => goto("categories"));

    // Κάρτες κατηγοριών (event delegation)
    $("#cat-grid").addEventListener("click", (e) => {
      const card = e.target.closest(".cat-card");
      if (card) goto("cat:" + card.dataset.cat);
    });
    $("#cat-grid").addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const card = e.target.closest(".cat-card");
        if (card) {
          e.preventDefault();
          goto("cat:" + card.dataset.cat);
        }
      }
    });

    // Κουμπιά πίσω
    document.querySelectorAll(".btn-back").forEach((b) =>
      b.addEventListener("click", () => goto("categories"))
    );

    // Toggle γλώσσας
    document.querySelectorAll(".lang-toggle button").forEach((b) =>
      b.addEventListener("click", () => setLang(b.dataset.lang))
    );

    window.addEventListener("hashchange", route);
  }

  // ============================================================
  //  INIT
  // ============================================================
  document.addEventListener("DOMContentLoaded", () => {
    // Γέμισε brand στοιχεία
    if (MENU.brand) {
      const slg = MENU.brand.slogans || [];
      const pick = slg[Math.floor(Math.random() * slg.length)] || "Every Drink Shines";
      document.querySelectorAll(".footer-slogan").forEach((e) => (e.textContent = pick));
    }
    bind();
    applyLang();
    renderCategories();
    route();
  });
})();
