/* ==========================================================================
   Shared storefront logic: icons, illustrations, state, layout, helpers.
   ========================================================================== */

/* ---------- Icons (24×24 stroke icons) ---------- */
const ICON_PATHS = {
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
  heart: '<path d="M12 21s-7.5-4.6-9.5-9.2C1.2 8.6 3.3 5 6.9 5c2 0 3.5 1.1 5.1 3 1.6-1.9 3.1-3 5.1-3 3.6 0 5.7 3.6 4.4 6.8C19.5 16.4 12 21 12 21Z"/>',
  cart: '<path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6"/><circle cx="10" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/>',
  leaf: '<path d="M5 19C5 10 10 5 20 4c0 10-5 15-14 15"/><path d="M5 19c3-4 6-7 10-9"/>',
  truck: '<path d="M2 6h11v10H2zM13 9h4l4 4v3h-8z"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  phone: '<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  chat: '<path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.2A8.5 8.5 0 1 1 21 12Z"/><path d="M9 10.5c.5 2 2 3.5 4.5 4.5"/>',
  map: '<path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v9h14v-9M12 8v13M12 8C10 4 6 4 7.5 7 8.3 8 12 8 12 8Zm0 0c2-4 6-4 4.5-1-.8 1-4.5 1-4.5 1Z"/>',
  star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  check: '<path d="m5 12 5 5 9-10"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"/>',
  sprout: '<path d="M12 21v-8M12 13C12 8 8 6 4 6c0 5 3 7 8 7ZM12 11c0-4 3-6 8-6 0 4-3 6-8 6Z"/>',
  box: '<path d="m3 7 9-4 9 4-9 4zM3 7v10l9 4 9-4V7M12 11v10"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  tag: '<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.5"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.5 3-5.5 7-5.5s7 2 7 5.5M16 4.5a3.5 3.5 0 0 1 0 7M18 14.5c2.4.6 4 2.4 4 5.5"/>',
  file: '<path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h8M9 17h6"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10 21a2 2 0 0 0 4 0"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m14 6 4 4"/>',
  trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
  bank: '<path d="M3 10h18L12 4zM5 10v8M9 10v8M15 10v8M19 10v8M3 21h18"/>',
  cash: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 9v.01M18 15v.01"/>',
  phoneDevice: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/>',
  arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  server: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  code: '<path d="m8 7-5 5 5 5M16 7l5 5-5 5"/>',
  upload: '<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',
  download: '<path d="M12 4v12M7 11l5 5 5-5M4 20h16"/>',
  fingerprint: '<path d="M12 11v3a8 8 0 0 1-2 5M8 10a4 4 0 0 1 8 0v2a12 12 0 0 1-1 5M5 9a7 7 0 0 1 14 0v3M19 16c-.3 1.5-.7 2.8-1.3 4M5 12v1a10 10 0 0 1-1 4"/>',
  moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/>',
  wifiOff: '<path d="m3 3 18 18M8.5 16.5a5 5 0 0 1 7 0M5 13a10 10 0 0 1 5-2.7M19 13a10 10 0 0 0-2.4-1.7M2 9.5a15 15 0 0 1 4.5-2.8M22 9.5A15 15 0 0 0 11 5.1M12 20h.01"/>',
  pin: '<path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5"/>',
  refresh: '<path d="M20 11a8 8 0 0 0-14.9-3M4 4v4h4M4 13a8 8 0 0 0 14.9 3M20 20v-4h-4"/>',
  copy: '<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
  alert: '<path d="M12 3 2 20h20zM12 10v4M12 17h.01"/>',
};
function icon(name, size = 20, sw = 1.8) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS[name] || ""}</svg>`;
}

/* ---------- Plant illustrations (offline, consistent placeholders for product photos) ---------- */
function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.min(255, (n >> 16) + amt));
  const g = Math.max(0, Math.min(255, ((n >> 8) & 255) + amt));
  const b = Math.max(0, Math.min(255, (n & 255) + amt));
  return "#" + ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");
}
function potSvg(c) {
  const light = parseInt(c.slice(1), 16) > 0xd0d0d0;
  const st = light ? 'stroke="#cfc9ba" stroke-width="1.2"' : "";
  return `<path d="M64 134h72l-9 44H73z" fill="${c}" ${st}/><path d="M64 134h72l-1.6 8H65.6z" fill="#000" opacity=".1"/><rect x="57" y="122" width="86" height="14" rx="4" fill="${shade(c, 14)}" ${st}/>`;
}
function bloom(x, y, r, f, c) {
  const st = parseInt(f.slice(1), 16) > 0xeeeeee ? 'stroke="#d8d2c2" stroke-width="1"' : "";
  let s = "";
  for (let k = 0; k < 6; k++) {
    const a = (k * Math.PI) / 3;
    s += `<circle cx="${(x + Math.cos(a) * r * 0.58).toFixed(1)}" cy="${(y + Math.sin(a) * r * 0.58).toFixed(1)}" r="${(r * 0.52).toFixed(1)}" fill="${f}" ${st}/>`;
  }
  return s + `<circle cx="${x}" cy="${y}" r="${(r * 0.34).toFixed(1)}" fill="${c}"/>`;
}
function plantArt(a, variant = 0) {
  const views = ["0 0 200 200", "35 30 130 130", "0 0 200 200", "45 18 110 110"];
  const bg = variant === 2 ? "#ffffff" : variant === 1 ? shade(a.bg, -8) : a.bg;
  const leaf = "#3d8a5f", leafD = "#2c6e4c", leafL = "#5fa77c";
  // bg "none" draws the plant alone (used on dark hero banners)
  let g = a.bg === "none" ? "" : `<rect width="200" height="200" fill="${bg}"/><circle cx="168" cy="34" r="58" fill="#fff" opacity=".35"/>`;
  g += `<ellipse cx="100" cy="182" rx="50" ry="6" fill="#000" opacity=".07"/>`;
  if (a.kind === "flower") {
    const c = a.c || "#f6c945";
    g += `<path d="M100 128 L80 70 M100 128 L100 50 M100 128 L122 64" stroke="${leafD}" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M100 128C70 122 56 98 60 80c24 6 38 24 40 48Z" fill="${leafD}"/>
      <path d="M100 128c30-8 44-30 40-50-24 6-38 26-40 50Z" fill="${leaf}"/>
      <path d="M100 126c-12-22-10-40 0-54 12 14 12 32 0 54Z" fill="${leafL}"/>
      ${bloom(80, 66, 15, a.f, c)}${bloom(122, 60, 14, a.f, c)}${bloom(100, 46, 17, a.f, c)}${potSvg(a.pot || "#b9572f")}`;
  } else if (a.kind === "tree") {
    if (a.palm) {
      g += [-64, -38, -14, 12, 36, 60].map((d, i) => `<g transform="rotate(${d} 100 128)"><ellipse cx="100" cy="78" rx="9" ry="${44 - (i % 2) * 6}" fill="${i % 2 ? leaf : leafD}"/><path d="M100 124V36" stroke="${leafL}" stroke-width="1.4"/></g>`).join("");
    } else {
      g += `<rect x="96" y="82" width="8" height="46" rx="3" fill="#7a5233"/>
        <circle cx="76" cy="80" r="24" fill="${shade(a.f, -16)}"/><circle cx="124" cy="80" r="24" fill="${shade(a.f, -8)}"/>
        <circle cx="100" cy="60" r="34" fill="${a.f}"/><circle cx="90" cy="50" r="12" fill="#fff" opacity=".12"/>`;
      if (a.fruit) g += [[82, 66], [114, 54], [122, 86], [92, 88], [104, 72]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5.5" fill="${a.fruit}"/>`).join("");
    }
    g += potSvg("#8a5a3b");
  } else if (a.kind === "seed") {
    g += `<rect x="56" y="30" width="88" height="132" rx="8" fill="#fff" stroke="#e1dccf"/>
      <rect x="56" y="30" width="88" height="22" rx="8" fill="${a.f}"/><rect x="56" y="44" width="88" height="8" fill="${a.f}"/>
      <circle cx="100" cy="94" r="30" fill="${a.bg}"/>${bloom(100, 92, 20, a.f, "#f6c945")}
      <rect x="70" y="132" width="60" height="6" rx="3" fill="#e1dccf"/><rect x="78" y="144" width="44" height="5" rx="2.5" fill="#ece8de"/>
      ${[[66, 176], [80, 180], [128, 178], [140, 174], [116, 182]].map(([x, y], i) => `<ellipse cx="${x}" cy="${y}" rx="4" ry="2.4" transform="rotate(${i * 35} ${x} ${y})" fill="#8a6a3e"/>`).join("")}`;
  } else if (a.kind === "pot") {
    const light = parseInt(a.f.slice(1), 16) > 0xd0d0d0;
    const st = light ? 'stroke="#cfc9ba" stroke-width="1.2"' : "";
    g += `<path d="M52 92h82l-12 82H64z" fill="${a.f}" ${st}/><rect x="44" y="76" width="98" height="20" rx="5" fill="${shade(a.f, 14)}" ${st}/>
      <path d="M128 136h40l-6 40h-28z" fill="${shade(a.f, -12)}" ${st}/><rect x="124" y="128" width="48" height="10" rx="3" fill="${shade(a.f, 4)}" ${st}/>`;
  } else if (a.kind === "bag") {
    g += `<path d="M62 48h76l8 124H54z" fill="${a.f}"/><path d="M62 48h76l-2 10H64z" fill="#000" opacity=".18"/>
      <rect x="72" y="86" width="56" height="50" rx="6" fill="#fff" opacity=".92"/>
      <path d="M100 126c-14-6-18-18-14-30 12 4 16 16 14 30Zm0 0c12-6 16-16 12-26-10 4-14 14-12 26Z" fill="${leaf}"/>
      <ellipse cx="100" cy="174" rx="54" ry="7" fill="${shade(a.f, -10)}" opacity=".5"/>`;
  } else if (a.kind === "can") {
    g += `<path d="M70 90c0-36 56-36 56 0" stroke="${shade(a.f, -20)}" stroke-width="8" fill="none"/>
      <rect x="62" y="88" width="72" height="80" rx="12" fill="${a.f}"/><rect x="62" y="88" width="72" height="12" rx="6" fill="#000" opacity=".12"/>
      <path d="M132 118 170 76" stroke="${a.f}" stroke-width="10" stroke-linecap="round"/><circle cx="172" cy="73" r="9" fill="${shade(a.f, -20)}"/>
      ${[[166, 96], [176, 104], [160, 110]].map(([x, y]) => `<path d="M${x} ${y}c-3 4-3 7 0 7s3-3 0-7Z" fill="#7fb0dd"/>`).join("")}
      <path d="M82 140c8-14 20-18 32-16-4 12-14 18-32 16Z" fill="#fff" opacity=".85"/>`;
  }
  return `<svg viewBox="${views[variant] || views[0]}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img">${g}</svg>`;
}

/* ---------- Formatting ---------- */
const inr = (n) => "₹" + Math.round(n).toLocaleString("en-IN");
const pctOff = (p) => Math.round(((p.mrp - p.price) / p.mrp) * 100);
const starStr = (r) => "★★★★★".slice(0, Math.round(r)) + "☆☆☆☆☆".slice(0, 5 - Math.round(r));
const catName = (id) => (CATEGORIES.find((c) => c.id === id) || {}).name || id;
const byId = (id) => PRODUCTS.find((p) => p.id === Number(id));
const qs = (k) => new URLSearchParams(location.search).get(k);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const fmtDate = (d) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

/* ---------- Persistent demo state (localStorage) ---------- */
const Store = {
  get(k, d) { try { const v = localStorage.getItem("svn_" + k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem("svn_" + k, JSON.stringify(v)); } catch {} refreshCounts(); },
  cart() { return this.get("cart", []); },
  wish() { return this.get("wish", []); },
  user() { return this.get("user", null); },
  orders() { return this.get("orders", []); },
  addToCart(id, qty = 1) {
    const p = byId(id);
    if (!p || p.stock === 0) return toast("This item is currently out of stock", "alert");
    const cart = this.cart();
    const line = cart.find((l) => l.id === p.id);
    if (line) line.qty = Math.min(line.qty + qty, p.stock); else cart.push({ id: p.id, qty: Math.min(qty, p.stock) });
    this.set("cart", cart);
    toast(`Added to cart — ${p.name}`, "check");
  },
  setQty(id, qty) {
    const cart = this.cart().map((l) => (l.id === id ? { ...l, qty: Math.max(1, Math.min(qty, byId(id).stock)) } : l));
    this.set("cart", cart);
  },
  remove(id) { this.set("cart", this.cart().filter((l) => l.id !== id)); },
  toggleWish(id) {
    let w = this.wish();
    const on = w.includes(id);
    w = on ? w.filter((x) => x !== id) : [...w, id];
    this.set("wish", w);
    toast(on ? "Removed from wishlist" : "Saved to wishlist", "heart");
    return !on;
  },
};

// Product edits made in the admin panel are saved locally and reflected on the storefront
(function loadCatalogue() {
  const saved = Store.get("products", null);
  if (saved) PRODUCTS.splice(0, PRODUCTS.length, ...saved);
  if (!/admin\.html$/.test(location.pathname)) {
    for (let i = PRODUCTS.length - 1; i >= 0; i--) if (PRODUCTS[i].hidden) PRODUCTS.splice(i, 1);
  }
})();

function refreshCounts() {
  const c = Store.cart().reduce((s, l) => s + l.qty, 0);
  const w = Store.wish().length;
  document.querySelectorAll("[data-count=cart]").forEach((el) => { el.textContent = c; el.classList.toggle("hide", !c); });
  document.querySelectorAll("[data-count=wish]").forEach((el) => { el.textContent = w; el.classList.toggle("hide", !w); });
}

/* ---------- Toast & modal ---------- */
function toast(msg, ic = "check") {
  let wrap = document.querySelector(".toast-wrap");
  if (!wrap) { wrap = document.createElement("div"); wrap.className = "toast-wrap"; document.body.appendChild(wrap); }
  const t = document.createElement("div");
  t.className = "toast";
  t.innerHTML = `${icon(ic, 18)}<span>${esc(msg)}</span>`;
  wrap.appendChild(t);
  setTimeout(() => t.remove(), 2600);
}
function openModal(title, body, foot = "") {
  closeModal();
  const m = document.createElement("div");
  m.className = "modal-backdrop";
  m.innerHTML = `<div class="modal" role="dialog" aria-modal="true" aria-label="${esc(title)}">
    <div class="modal-head"><h3>${title}</h3><button class="icon-btn" data-close aria-label="Close">${icon("x")}</button></div>
    <div class="modal-body">${body}</div>${foot ? `<div class="modal-foot">${foot}</div>` : ""}</div>`;
  m.addEventListener("click", (e) => { if (e.target === m || e.target.closest("[data-close]")) closeModal(); });
  document.body.appendChild(m);
  return m;
}
function closeModal() { document.querySelectorAll(".modal-backdrop").forEach((m) => m.remove()); }
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

/* ---------- Product card ---------- */
function productCard(p) {
  const wished = Store.wish().includes(p.id);
  const stock = p.stock === 0 ? `<span class="stock-out">Out of stock</span>` : p.stock <= 10 ? `<span class="stock-low">Only ${p.stock} left</span>` : `<span class="stock-ok">In stock</span>`;
  const badges = [
    pctOff(p) >= 20 ? `<span class="tag tag-terra">${pctOff(p)}% OFF</span>` : "",
    p.festival ? `<span class="tag tag-gold">Festival Pick</span>` : "",
    p.pop >= 95 ? `<span class="tag tag-green">Bestseller</span>` : "",
  ].join("");
  return `<article class="p-card">
    <a class="p-media" href="product.html?id=${p.id}" aria-label="${esc(p.name)}">${plantArt(p.art)}</a>
    <div class="p-badges">${badges}</div>
    <button class="p-wish ${wished ? "on" : ""}" data-wish="${p.id}" aria-label="Save to wishlist">${icon("heart", 18)}</button>
    <div class="p-body">
      <span class="p-cat">${catName(p.cat)}</span>
      <a class="p-name" href="product.html?id=${p.id}">${esc(p.name)}</a>
      <div class="p-meta"><span class="stars">${starStr(p.rating)}</span><span>${p.rating} (${p.reviews})</span></div>
      <div class="p-meta">${stock}</div>
      <div class="p-price"><span class="price">${inr(p.price)}</span><span class="mrp">${inr(p.mrp)}</span><span class="off">${pctOff(p)}% off</span></div>
      <div class="p-actions"><button class="btn btn-primary btn-sm" data-add="${p.id}" ${p.stock === 0 ? "disabled" : ""}>${icon("cart", 16)} Add to Cart</button></div>
    </div>
  </article>`;
}
document.addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  if (add) { Store.addToCart(Number(add.dataset.add)); return; }
  const w = e.target.closest("[data-wish]");
  if (w) { const on = Store.toggleWish(Number(w.dataset.wish)); w.classList.toggle("on", on); }
});

/* ---------- Layout: ribbon, header, footer ---------- */
const BRAND_MARK = `<span class="brand-mark"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 21v-7" stroke="#cfe5d6" stroke-width="1.8" stroke-linecap="round"/><path d="M12 14C12 8.5 8 6 3.5 6c0 5.5 3.5 8 8.5 8Z" fill="#5fa77c"/><path d="M12 12c0-5 3.5-8 8.5-8 0 5-3.5 8-8.5 8Z" fill="#cfe5d6"/></svg></span>`;

function renderLayout(active) {
  const nav = [
    ["home.html", "Home", "home"], ["shop.html", "Shop All", "shop"],
    ["shop.html?cat=flowering", "Flowering Plants", "flowering"], ["shop.html?cat=seeds", "Seeds", "seeds"],
    ["shop.html?cat=saplings", "Saplings", "saplings"], ["shop.html?cat=pots", "Pots & Soil", "pots"],
    ["shop.html?cat=accessories", "Accessories", "accessories"], ["offers.html", "Festival Offers", "offers", "hl"],
    ["bulk-orders.html", "Bulk & Event Orders", "bulk"], ["care-tips.html", "Plant Care Tips", "blog"], ["contact.html", "Contact", "contact"],
  ];
  const header = `
  <div class="proto-ribbon"><div class="container">
    <span><span class="dot-live"></span><strong>Reference Prototype v0.1</strong> · Sample data for presentation — not connected to live systems</span>
    <nav aria-label="Prototype sections">
      <a href="index.html">Presentation</a><a href="overview.html">Project Blueprint</a><a href="home.html" class="active">Customer Website</a>
      <a href="admin.html">Admin Panel</a><a href="mobile-app.html">Mobile App</a>
    </nav>
  </div></div>
  <header class="site-header">
    <div class="container header-row">
      <a href="home.html" class="brand">${BRAND_MARK}<span class="brand-name">Sri Venkateswara<small>Nursery · Plants & Seeds</small></span></a>
      <div class="search" role="search">${icon("search", 18)}<input type="search" placeholder="Search roses, mango saplings, seeds…" aria-label="Search products" autocomplete="off"></div>
      <div class="header-actions">
        <a class="icon-btn" href="account.html" aria-label="My account">${icon("user")}</a>
        <a class="icon-btn" href="account.html#wishlist" aria-label="Wishlist">${icon("heart")}<span class="badge-count hide" data-count="wish">0</span></a>
        <a class="icon-btn" href="cart.html" aria-label="Cart">${icon("cart")}<span class="badge-count hide" data-count="cart">0</span></a>
      </div>
    </div>
    <div class="container"><div class="search mobile" role="search">${icon("search", 18)}<input type="search" placeholder="Search plants, seeds…" aria-label="Search products" autocomplete="off"></div></div>
    <nav class="main-nav" aria-label="Main"><div class="container"><ul>
      ${nav.map(([h, t, k, cls]) => `<li><a href="${h}" class="${k === active ? "active" : ""} ${cls || ""}">${t}</a></li>`).join("")}
    </ul></div></nav>
  </header>`;
  const footer = `
  <footer class="site-footer"><div class="container">
    <div class="footer-grid">
      <div>
        <a href="home.html" class="brand" style="margin-bottom:14px">${BRAND_MARK}<span class="brand-name" style="color:#fff">Sri Venkateswara Nursery</span></a>
        <p>Healthy flowering plants, seeds and saplings — grown with care and delivered to your doorstep.</p>
        <div class="pay-icons"><span>UPI</span><span>GPay</span><span>PhonePe</span><span>Paytm</span><span>Cards</span><span>Net Banking</span><span>COD</span></div>
      </div>
      <div><h4>Shop</h4><ul>${CATEGORIES.map((c) => `<li><a href="shop.html?cat=${c.id}">${c.name}</a></li>`).join("")}<li><a href="offers.html">Festival Offers</a></li></ul></div>
      <div><h4>Customer</h4><ul><li><a href="account.html">My Account</a></li><li><a href="account.html#orders">Track Order</a></li><li><a href="account.html#wishlist">Wishlist</a></li><li><a href="bulk-orders.html">Bulk / Event Orders</a></li><li><a href="care-tips.html">Plant Care Tips</a></li></ul></div>
      <div><h4>Contact</h4><ul>
        <li class="flex">${icon("phone", 16)} ${STORE.phone}</li><li class="flex">${icon("mail", 16)} ${STORE.email}</li>
        <li class="flex">${icon("chat", 16)} <a href="https://wa.me/${STORE.whatsapp}" target="_blank" rel="noopener">WhatsApp us</a></li>
        <li class="flex">${icon("clock", 16)} Mon–Sat 7 AM – 7:30 PM</li></ul></div>
    </div>
    <div class="footer-bottom"><span>© 2026 Sri Venkateswara Nursery. All rights reserved.</span><span>Privacy Policy · Terms · Shipping & Returns · Refund Policy</span></div>
  </div></footer>`;
  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);
  if (qs("embed")) document.querySelector(".proto-ribbon").remove();
  document.querySelectorAll(".search input").forEach(attachSearch);
  refreshCounts();
}

/* ---------- Search with auto-suggestions ---------- */
function attachSearch(input) {
  const box = document.createElement("div");
  box.className = "suggest hide";
  input.parentElement.appendChild(box);
  let idx = -1;
  const render = () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { box.classList.add("hide"); return; }
    const hits = PRODUCTS.filter((p) => (p.name + " " + catName(p.cat)).toLowerCase().includes(q)).slice(0, 6);
    idx = -1;
    box.innerHTML = hits.length
      ? hits.map((p) => `<a href="product.html?id=${p.id}"><span class="thumb">${plantArt(p.art)}</span><span>${esc(p.name)}</span><span class="cat">${catName(p.cat)}</span></a>`).join("") +
        `<a href="shop.html?q=${encodeURIComponent(q)}" style="color:var(--forest-700);font-weight:600">See all results for “${esc(q)}” →</a>`
      : `<div class="empty">No matches for “${esc(q)}”. Try “rose”, “mango” or “seeds”.</div>`;
    box.classList.remove("hide");
  };
  input.addEventListener("input", render);
  input.addEventListener("focus", render);
  input.addEventListener("blur", () => setTimeout(() => box.classList.add("hide"), 150));
  input.addEventListener("keydown", (e) => {
    const links = [...box.querySelectorAll("a")];
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      idx = (idx + (e.key === "ArrowDown" ? 1 : -1) + links.length) % links.length;
      links.forEach((l, i) => l.classList.toggle("focus", i === idx));
    } else if (e.key === "Enter") {
      if (idx >= 0 && links[idx]) location.href = links[idx].href;
      else if (input.value.trim()) location.href = "shop.html?q=" + encodeURIComponent(input.value.trim());
    }
  });
}

/* ---------- Delivery / pin code check (sample rule) ---------- */
function checkPin(pin) {
  if (!/^\d{6}$/.test(pin)) return { ok: false, msg: "Enter a valid 6-digit pin code" };
  if (!/^5[0-3]/.test(pin)) return { ok: false, msg: "Sorry, we don't deliver to this pin code yet. Store pickup is available." };
  const local = /^52[0-2]/.test(pin);
  const d = new Date(); d.setDate(d.getDate() + (local ? 1 : 3));
  return { ok: true, msg: `Delivery available · Estimated by ${d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" })}${local ? " (next-day zone)" : ""}` };
}

/* ---------- Cart totals (shared by cart + summary) ---------- */
function cartTotals(couponCode) {
  const lines = Store.cart().map((l) => ({ ...l, p: byId(l.id) })).filter((l) => l.p);
  const subtotal = lines.reduce((s, l) => s + l.p.price * l.qty, 0);
  const mrpTotal = lines.reduce((s, l) => s + l.p.mrp * l.qty, 0);
  const cp = couponCode && COUPONS[couponCode];
  let discount = 0, freeShip = subtotal >= STORE.freeShippingAbove;
  if (cp && subtotal >= cp.min) { if (cp.pct) discount = Math.round(subtotal * cp.pct / 100); if (cp.ship) freeShip = true; }
  const delivery = !lines.length || freeShip ? 0 : STORE.deliveryFee;
  return { lines, subtotal, mrpTotal, discount, delivery, total: subtotal - discount + delivery, coupon: cp && subtotal >= cp.min ? couponCode : null };
}
