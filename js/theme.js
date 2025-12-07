/* ============================================================
AutoRoy⚡AI – THEME CONTROLLER
מצב תאורה: Light / Dark / Cyber with transitions
============================================================ */

const themeButtons = document.querySelectorAll(".theme-toggle button");

themeButtons.forEach(btn => {
btn.addEventListener("click", () => {
const mode = btn.getAttribute("data-mode");
document.body.className = mode;
localStorage.setItem("autoroy-theme", mode);
});
});
