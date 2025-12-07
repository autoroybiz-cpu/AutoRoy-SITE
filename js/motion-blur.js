/* ============================================================
AutoRoy⚡AI – Soft Motion Blur Engine
============================================================ */

let prevX = 0, prevY = 0;
let blurX = 0, blurY = 0;

document.addEventListener("mousemove", (e) => {
blurX = Math.abs(e.clientX - prevX);
blurY = Math.abs(e.clientY - prevY);

prevX = e.clientX;
prevY = e.clientY;

// רמת הטשטוש – עד 6 פיקסל
const blurAmount = Math.min((blurX + blurY) * 0.02, 6);

if (blurAmount > 1) {
document.body.classList.add("motion-blur-active");
} else {
document.body.classList.remove("motion-blur-active");
}

document.documentElement.style.setProperty("--blur-strength", `${blurAmount}px`);
});
