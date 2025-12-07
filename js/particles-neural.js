/* ============================================================
AutoRoy⚡AI – NEURAL NETWORK ENGINE
רשת נוירונים שמתחברת ומתנתקת כמו מוח
============================================================ */

const cn = document.getElementById("particles-neural");
const xn = cn.getContext("2d");

cn.width = innerWidth;
cn.height = innerHeight;

let neurons = [];
const N = 140;
const MAX_DIST = 150;

for (let i = 0; i < N; i++) {
neurons.push({
x: Math.random() * cn.width,
y: Math.random() * cn.height,
vx: (Math.random() - 0.5) * 0.8,
vy: (Math.random() - 0.5) * 0.8,
r: Math.random() * 3 + 1
});
}

let mouseN = { x: null, y: null };

document.addEventListener("mousemove", e => {
mouseN.x = e.clientX;
mouseN.y = e.clientY;
});

function animateNeural() {
xn.clearRect(0, 0, cn.width, cn.height);

// ציור נוירונים
neurons.forEach(a => {
a.x += a.vx;
a.y += a.vy;

if (a.x < 0 || a.x > cn.width) a.vx *= -1;
if (a.y < 0 || a.y > cn.height) a.vy *= -1;

xn.beginPath();
xn.arc(a.x, a.y, a.r, 0, Math.PI * 2);
xn.fillStyle = "rgba(150,170,255,0.9)";
xn.fill();
});

// קווים בין נוירונים
for (let i = 0; i < N; i++) {
for (let j = i + 1; j < N; j++) {
const dx = neurons[i].x - neurons[j].x;
const dy = neurons[i].y - neurons[j].y;
const dist = Math.sqrt(dx * dx + dy * dy);

if (dist < MAX_DIST) {
const opacity = 1 - dist / MAX_DIST;
xn.beginPath();
xn.moveTo(neurons[i].x, neurons[i].y);
xn.lineTo(neurons[j].x, neurons[j].y);
xn.strokeStyle = `rgba(160,180,255,${opacity * 0.35})`;
xn.lineWidth = 1.1;
xn.stroke();
}
}
}

requestAnimationFrame(animateNeural);
}

animateNeural();



