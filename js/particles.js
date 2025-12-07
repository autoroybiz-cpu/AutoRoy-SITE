/* ============================================================
AutoRoy⚡AI – PARTICLES LAYER 1
חלקיקים רכים ברקע
============================================================ */

const c1 = document.getElementById("particles-layer-1");
const x1 = c1.getContext("2d");

c1.width = innerWidth;
c1.height = innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
particles.push({
x: Math.random() * c1.width,
y: Math.random() * c1.height,
r: Math.random() * 3 + 1,
vx: Math.random() * 0.6 - 0.3,
vy: Math.random() * 0.6 - 0.3,
a: Math.random() * 0.7 + 0.2
});
}

function animateLayer1() {
x1.clearRect(0, 0, c1.width, c1.height);

particles.forEach(p => {
p.x += p.vx;
p.y += p.vy;

if (p.x < 0 || p.x > c1.width) p.vx *= -1;
if (p.y < 0 || p.y > c1.height) p.vy *= -1;

x1.beginPath();
x1.arc(p.x, p.y, p.r, 0, Math.PI * 2);
x1.fillStyle = `rgba(255,255,255,${p.a})`;
x1.fill();
});

requestAnimationFrame(animateLayer1);
}

animateLayer1();
