/* ============================================================
AutoRoy⚡AI – HERO 3D TILT + CAMERA MOTION ENGINE
============================================================ */

const heroSection = document.querySelector(".hero-content");
const heroTitleEl = document.querySelector(".hero-title");
const heroSubtitleEl = document.querySelector(".hero-subtitle");
const logoEl = document.querySelector(".logo");

let mouseX = 0, mouseY = 0;
let tiltX = 0, tiltY = 0;

/* ------------------------------
עדכון ערכי העכבר
-------------------------------- */
document.addEventListener("mousemove", (e) => {
mouseX = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

/* ------------------------------
מנוע תנועה רכה
-------------------------------- */
function animateTilt() {
tiltX += (mouseX - tiltX) * 0.06;
tiltY += (mouseY - tiltY) * 0.06;

const rotateX = tiltY * 8; // סיבוב למעלה/למטה
const rotateY = tiltX * 10; // סיבוב ימין/שמאל

const depthZ = tiltX * 18; // עומק
const depthZsub = tiltY * 12;

/* תלת מימד להירו */
heroSection.style.transform = `
perspective(1200px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateZ(${depthZ}px)
translateY(${tiltY * -10}px)
`;

/* לוגו מגיב בנפרד */
logoEl.style.transform = `
perspective(1400px)
rotateX(${rotateX * 0.6}deg)
rotateY(${rotateY * 0.6}deg)
translateZ(${depthZ * 0.4}px)
translateY(${tiltY * -6}px)
`;

/* כותרת */
heroTitleEl.style.transform = `
perspective(1600px)
rotateX(${rotateX * 0.3}deg)
rotateY(${rotateY * 0.3}deg)
translateZ(${depthZ * 0.8}px)
`;

/* כותרת משנה */
heroSubtitleEl.style.transform = `
perspective(1600px)
rotateX(${rotateX * 0.15}deg)
rotateY(${rotateY * 0.15}deg)
translateZ(${depthZsub}px)
opacity: ${0.92 + tiltX * 0.08}
`;

requestAnimationFrame(animateTilt);
}

animateTilt();

/* ------------------------------
אפקט ריחוף בעת עזיבת העכבר
-------------------------------- */
document.addEventListener("mouseleave", () => {
tiltX = 0;
tiltY = 0;
});
