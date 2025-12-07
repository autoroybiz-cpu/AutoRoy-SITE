/* ============================================================
AutoRoy⚡AI – PARTICLES LAYER 3 (STARFIELD UNIVERSE)
שכבת כוכבים דינמית שנותנת עומק עתידני אמיתי
============================================================ */

const starsCanvas = document.getElementById("particles-stars");
const starsCtx = starsCanvas.getContext("2d");

starsCanvas.width = window.innerWidth;
starsCanvas.height = window.innerHeight;

/* ------------------------------
פרמטרים
-------------------------------- */
const STAR_COUNT = 260;
const STAR_SPEED = 0.015;
const STAR_DEPTH = 800;

/* רשימת הכוכבים */
let stars = [];

/* ------------------------------
פונקציית יצירת כוכב
-------------------------------- */
function createStar() {
return {
x: Math.random() * starsCanvas.width - starsCanvas.width / 2,
y: Math.random() * starsCanvas.height - starsCanvas.height / 2,
z: Math.random() * STAR_DEPTH,
size: Math.random() * 1.2 + 0.3,
brightness: Math.random() * 0.6 + 0.4,
};
}

/* ------------------------------
יצירת כוכבים ראשונית
-------------------------------- */
function initStars() {
stars = [];
for (let i = 0; i < STAR_COUNT; i++) {
stars.push(createStar());
}
}

/* ------------------------------
ציור כוכב
-------------------------------- */
function drawStar(s) {
const scale = STAR_DEPTH / (STAR_DEPTH - s.z);
const x = (s.x * scale) + starsCanvas.width / 2;
const y = (s.y * scale) + starsCanvas.height / 2;

starsCtx.beginPath();
starsCtx.arc(x, y, s.size * scale, 0, Math.PI * 2);
starsCtx.fillStyle = `rgba(180,200,255,${s.brightness})`;
starsCtx.fill();
}

/* ------------------------------
עדכון מיקום כוכב
-------------------------------- */
function updateStar(s) {
s.z -= STAR_SPEED * 10;
if (s.z <= 1) {
s.x = Math.random() * starsCanvas.width - starsCanvas.width / 2;
s.y = Math.random() * starsCanvas.height - starsCanvas.height / 2;
s.z = STAR_DEPTH;
}
}

/* ------------------------------
אנימציה
-------------------------------- */
function animateStars() {
starsCtx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);

stars.forEach(s => {
updateStar(s);
drawStar(s);
});

requestAnimationFrame(animateStars);
}

/* ------------------------------
פרלקסה לעכבר
-------------------------------- */
document.addEventListener("mousemove", (e) => {
const xShift = (e.clientX - window.innerWidth / 2) * 0.002;
const yShift = (e.clientY - window.innerHeight / 2) * 0.002;

stars.forEach(s => {
s.x += xShift * (s.z / 400);
s.y += yShift * (s.z / 400);
});
});

/* ------------------------------
שינוי צבע במצב CYBER
-------------------------------- */
function updateStarColors() {
if (document.body.classList.contains("cyber")) {
starsCtx.globalCompositeOperation = "lighter";
} else {
starsCtx.globalCompositeOperation = "source-over";
}
}

setInterval(updateStarColors, 300);

/* ------------------------------
התאמה למסך
-------------------------------- */
window.addEventListener("resize", () => {
starsCanvas.width = window.innerWidth;
starsCanvas.height = window.innerHeight;
initStars();
});

/* ------------------------------
הפעלה
-------------------------------- */
initStars();
animateStars();
