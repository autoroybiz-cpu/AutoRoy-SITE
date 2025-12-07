/* ============================================================
AutoRoy⚡AI – Motion Blur Engine
============================================================ */

let px = 0, py = 0;

document.addEventListener("mousemove", e => {
const sx = Math.abs(e.clientX - px);
const sy = Math.abs(e.clientY - py);

px = e.clientX;
py = e.clientY;

const blur = Math.min((sx + sy) * 0.03, 6);

if (blur > 1) {
document.body.classList.add("motion-blur-active");
document.documentElement.style.setProperty("--blur-strength", `${blur}px`);
} else {
document.body.classList.remove("motion-blur-active");
}
});
