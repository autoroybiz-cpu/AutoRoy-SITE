/* ============================================================
AutoRoy⚡AI – PARTICLES LAYER 2 (MAGNETIC)
חלקיקים שמגיבים לעכבר
============================================================ */

const c2 = document.getElementById("particles-layer-2");
const x2 = c2.getContext("2d");

c2.width = innerWidth;
c2.height = innerHeight;

let mParticles = [];

for (let i = 0; i < 55; i++) {
mParticles.push({
x: Math.random() * c2.width,
y: Math.random() * c2.height,
r: Math.random() * 4 + 2,
vx: Math.random() * 0.4 - 0.2,
vy: Math.random() * 0.4 - 0.2
});
}

let mouse = { x: null, y: null };

document.addEventListener("mousemove", e => {
mouse.x = e.clientX;
mouse.y = e.clientY;
});

function animateMagnetic() {
x2.clearRect(0, 0, c2.width, c2.height);

mParticles.forEach(p => {
if (mouse.x) {
const dx = p.x - mouse.x;
const dy = p.y - mouse.y;
const dist = Math.sqrt(dx * dx + dy * dy);

if (dist < 180) {
p.x += dx * 0.03;
p.y += dy * 0.03;
}
}

p.x += p.vx;
p.y += p.vy;

x2.beginPath();
x2.arc(p.x, p.y, p.r, 0, Math.PI * 2);
x2.fillStyle = "rgba(120,150,255,0.65)";
x2.fill();
});

requestAnimationFrame(animateMagnetic);
}

animateMagnetic();
