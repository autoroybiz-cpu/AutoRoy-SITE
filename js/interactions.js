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
