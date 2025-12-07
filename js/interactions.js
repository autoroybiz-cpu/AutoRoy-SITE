/* ============================================================
AutoRoy⚡AI – INTERACTION ENGINE
גלילה, Reveal, ריחוף, תנועה לפי עכבר, עומק דינמי
============================================================ */

/* ------------------------------
אפקט חשיפת אלמנטים (Reveal)
-------------------------------- */
const revealElements = document.querySelectorAll(".reveal");

function handleReveal() {
const triggerBottom = window.innerHeight * 0.88;

revealElements.forEach(el => {
const rect = el.getBoundingClientRect().top;
if (rect < triggerBottom) {
el.classList.add("visible");
}
});
}

window.addEventListener("scroll", handleReveal);
handleReveal();

/* ------------------------------
אפקט עומק מותאם לעכבר (Mouse Parallax)
-------------------------------- */
document.addEventListener("mousemove", (e) => {
const x = (e.clientX / window.innerWidth - 0.5) * 20;
const y = (e.clientY / window.innerHeight - 0.5) * 20;

document.documentElement.style.setProperty("--dx", `${x}px`);
document.documentElement.style.setProperty("--dy", `${y}px`);
});

/* ------------------------------
ריחוף חלקיקים לעבר העכבר (Magnet Layer)
-------------------------------- */
let mouse = { x: 0, y: 0 };

document.addEventListener("mousemove", function(e){
mouse.x = e.clientX;
mouse.y = e.clientY;
});

/* הכנה לשכבת חלקיקים 2 */
window.magnetMouse = mouse;

/* ------------------------------
אנימציית עומק על כותרות
-------------------------------- */
const heroTitle = document.querySelector(".hero-title");
document.addEventListener("mousemove", (e) => {
const x = (e.clientX - window.innerWidth/2) * 0.002;
const y = (e.clientY - window.innerHeight/2) * 0.002;

heroTitle.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
});

/* ------------------------------
אפקט Smooth Scroll (לשדרוג)
-------------------------------- */
let scrollPos = 0;

function smoothScroll() {
scrollPos += (window.scrollY - scrollPos) * 0.12;
document.body.style.transform = `translateY(${-scrollPos}px)`;
requestAnimationFrame(smoothScroll);
}

smoothScroll();
/* ============================================================
AutoRoy⚡AI – INTERACTION ENGINE (Extended)
חלק 2 – תנועת עומק, פיזיקה, מהירות עכבר, רב־שכבתיות
============================================================ */

/* ------------------------------
1. FOLLOW CURSOR VELOCITY ENGINE
-------------------------------- */
let lastX = 0, lastY = 0;
let velocityX = 0, velocityY = 0;

document.addEventListener("mousemove", e => {
velocityX = e.clientX - lastX;
velocityY = e.clientY - lastY;

lastX = e.clientX;
lastY = e.clientY;

document.documentElement.style.setProperty("--vx", velocityX);
document.documentElement.style.setProperty("--vy", velocityY);
});

/* ------------------------------
2. MULTI-LAYER PARALLAX
-------------------------------- */
const layers = document.querySelectorAll(".depth-layer-1, .depth-layer-2, .depth-layer-3");

document.addEventListener("mousemove", (e) => {
const x = (e.clientX - window.innerWidth / 2) / 50;
const y = (e.clientY - window.innerHeight / 2) / 50;

layers.forEach((layer, index) => {
const depth = (index + 1) * 2;
layer.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
});
});

/* ------------------------------
3. HERO FLOAT MOTION ENGINE
-------------------------------- */
const hero = document.querySelector(".hero-content");
let floatX = 0, floatY = 0;

function heroFloat() {
floatX += (velocityX * 0.02 - floatX) * 0.1;
floatY += (velocityY * 0.02 - floatY) * 0.1;

hero.style.transform = `translate(${floatX}px, ${floatY}px)`;

requestAnimationFrame(heroFloat);
}

heroFloat();

/* ------------------------------
4. ADVANCED REVEAL ENGINE
-------------------------------- */
const revealItems = document.querySelectorAll(".reveal");

function advancedReveal() {
const trigger = window.innerHeight * 0.85;

revealItems.forEach(item => {
const rect = item.getBoundingClientRect().top;

if (rect < trigger) {
item.classList.add("visible");
item.style.transitionDelay = `${Math.random() * 0.4}s`;
item.style.filter = "blur(0px)";
} else {
item.style.filter = "blur(4px)";
}
});
}

window.addEventListener("scroll", advancedReveal);
advancedReveal();

/* ------------------------------
5. PHYSICS-BASED HOVER FOR TITLES
-------------------------------- */
const title = document.querySelector(".hero-title");

title.addEventListener("mousemove", (e) => {
const rect = title.getBoundingClientRect();
const x = (e.clientX - rect.left) / rect.width - 0.5;
const y = (e.clientY - rect.top) / rect.height - 0.5;

title.style.transform = `scale(1.03) rotateX(${y * -6}deg) rotateY(${x * 6}deg)`;
});

title.addEventListener("mouseleave", () => {
title.style.transform = "scale(1) rotateX(0deg) rotateY(0deg)";
});

/* ------------------------------
6. SUBTITLE ENERGY WAVE
-------------------------------- */
const subtitle = document.querySelector(".hero-subtitle");

document.addEventListener("mousemove", (e) => {
const midX = window.innerWidth / 2;
const diff = (e.clientX - midX) * 0.003;

subtitle.style.letterSpacing = `${Math.abs(diff) * 2}px`;
});

/* ------------------------------
7. SMOOTH SCROLL 2.0
-------------------------------- */
let scrollY = 0;
let targetY = 0;

function smoothScrollEngine() {
targetY = window.scrollY;
scrollY += (targetY - scrollY) * 0.07;

document.body.style.transform = `translateY(${-scrollY}px)`;

requestAnimationFrame(smoothScrollEngine);
}

smoothScrollEngine();

/* ------------------------------
8. SOFT SHAKE ON FAST MOVEMENT
-------------------------------- */
function softShake() {
const intensity = Math.min(Math.abs(velocityX) + Math.abs(velocityY), 60);

document.documentElement.style.setProperty("--shake", `${intensity * 0.3}px`);

requestAnimationFrame(softShake);
}

softShake();

/* ------------------------------
9. CURSOR DEPTH LIGHTING
-------------------------------- */
document.addEventListener("mousemove", (e) => {
const xPercent = e.clientX / window.innerWidth;
const yPercent = e.clientY / window.innerHeight;

document.documentElement.style.setProperty("--light-x", `${xPercent * 100}%`);
document.documentElement.style.setProperty("--light-y", `${yPercent * 100}%`);
});

/* ------------------------------
10. TEXT MAGNET EFFECT (ראשוני)
-------------------------------- */
const magnetElements = document.querySelectorAll(".magnet");

magnetElements.forEach(el => {
el.addEventListener("mousemove", (e) => {
const rect = el.getBoundingClientRect();
const x = e.clientX - rect.left - rect.width / 2;
const y = e.clientY - rect.top - rect.height / 2;

el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
});

el.addEventListener("mouseleave", () => {
el.style.transform = "translate(0, 0)";
});
});

/* ------------------------------
11. MOTION-BLUR BASED ON SPEED
-------------------------------- */
document.addEventListener("mousemove", () => {
const speed = Math.sqrt(velocityX ** 2 + velocityY ** 2);
const blur = Math.min(speed * 0.03, 6);

hero.style.filter = `blur(${blur}px)`;
});
