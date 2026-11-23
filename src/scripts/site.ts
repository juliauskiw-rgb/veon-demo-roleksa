// Header (burger, Esc, focus trap, active anchor), sticky call bar on phones, directions accordion on phones.
const header = document.querySelector<HTMLElement>("[data-header]");
const burger = document.querySelector<HTMLButtonElement>("[data-burger]");
const panel = document.querySelector<HTMLElement>("[data-mnav]");

function setMenu(open: boolean, returnFocus = true): void {
  if (!burger || !panel) return;
  burger.setAttribute("aria-expanded", String(open));
  panel.hidden = !open;
  document.documentElement.classList.toggle("menu-open", open);
  if (open) panel.querySelector<HTMLElement>("a")?.focus();
  else if (returnFocus) burger.focus();
}
burger?.addEventListener("click", () => setMenu(burger.getAttribute("aria-expanded") !== "true"));
panel?.addEventListener("click", (e) => {
  if ((e.target as HTMLElement).closest("a")) setMenu(false, false);
});
document.addEventListener("keydown", (e) => {
  if (!panel || panel.hidden) return;
  if (e.key === "Escape") { setMenu(false); return; }
  if (e.key !== "Tab" || !burger) return;
  const items = [burger, ...panel.querySelectorAll<HTMLElement>("a, button")];
  const first = items[0], last = items[items.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});
window.matchMedia("(min-width: 1120px)").addEventListener("change", (m) => { if (m.matches) setMenu(false, false); });

// Header rule after the first scroll.
const onScroll = (): void => { header?.classList.toggle("is-scrolled", window.scrollY > 8); };
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Active nav item.
const navLinks = [...document.querySelectorAll<HTMLAnchorElement>("[data-nav]")];
if ("IntersectionObserver" in window && navLinks.length) {
  const byId = new Map(navLinks.map((a) => [a.hash.slice(1), a]));
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) {
      const a = byId.get(en.target.id);
      if (!a) continue;
      if (en.isIntersecting) { navLinks.forEach((l) => l.removeAttribute("aria-current")); a.setAttribute("aria-current", "true"); }
    }
  }, { rootMargin: "-45% 0px -50% 0px" });
  byId.forEach((_, id) => { const el = document.getElementById(id); if (el) io.observe(el); });
}

// Sticky call bar (phones): shows once the hero call button is off screen, hides while contacts are visible.
const bar = document.querySelector<HTMLElement>("[data-callbar]");
const heroCta = document.querySelector("[data-hero-cta]");
const contactsEl = document.getElementById("contacts");
if (bar && heroCta && contactsEl && "IntersectionObserver" in window) {
  let pastHero = false, atContacts = false;
  const sync = (): void => { bar.classList.toggle("is-shown", pastHero && !atContacts); bar.toggleAttribute("inert", !(pastHero && !atContacts)); };
  new IntersectionObserver(([en]) => { pastHero = !en.isIntersecting && en.boundingClientRect.top < 0; sync(); }).observe(heroCta);
  new IntersectionObserver(([en]) => { atContacts = en.isIntersecting; sync(); }, { rootMargin: "0px 0px -20% 0px" }).observe(contactsEl);
  bar.classList.add("is-ready");
  sync();
}

// Directions: accordion on phones, all open from 768 px. Without JS every item stays open.
const dirs = [...document.querySelectorAll<HTMLDetailsElement>("[data-dir]")];
const wide = window.matchMedia("(min-width: 768px)");
const applyDirs = (): void => {
  dirs.forEach((d, i) => {
    const summary = d.querySelector("summary");
    if (wide.matches) { d.open = true; summary?.setAttribute("tabindex", "-1"); }
    else { d.open = i === 0 || i === 1; summary?.removeAttribute("tabindex"); }
  });
};
if (dirs.length) { applyDirs(); wide.addEventListener("change", applyDirs); }
dirs.forEach((d) => d.querySelector("summary")?.addEventListener("click", (e) => { if (wide.matches) e.preventDefault(); }));
