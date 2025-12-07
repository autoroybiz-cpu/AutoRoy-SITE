/* ============================================================
AutoRoy⚡AI – Overscroll Glow Engine
============================================================ */

let lastScroll = 0;

window.addEventListener("scroll", () => {
const now = window.scrollY;

if (now < lastScroll - 35) {
document.body.classList.add("overscroll-active");
setTimeout(() => document.body.classList.remove("overscroll-active"), 350);
}

lastScroll = now;
});
