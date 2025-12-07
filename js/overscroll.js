/* ============================================================
AutoRoy⚡AI – Overscroll Glow Engine
============================================================ */

let lastScroll = 0;

window.addEventListener("scroll", () => {
const current = window.scrollY;

// גלילה למעלה בפתאומיות → אפקט
if (current < lastScroll - 35) {
document.body.classList.add("overscroll-active");
setTimeout(() => {
document.body.classList.remove("overscroll-active");
}, 350);
}

lastScroll = current;
});
