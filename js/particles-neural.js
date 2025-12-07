/* ============================================================
AutoRoy⚡AI – PARTICLES LAYER 4 (NEURAL NETWORK)
מערכת חלקיקים שיוצרת קישורים דינמיים – כמו מוח של AI
============================================================ */

const neuralCanvas = document.getElementById("particles-neural");
const neuralCtx = neuralCanvas.getContext("2d");

neuralCanvas.width = window.innerWidth;
neuralCanvas.height = window.innerHeight;

/* ------------------------------
פרמטרים
-------------------------------- */
const NN_COUNT = 140;
const NN_MAX_DISTANCE = 180;

let neurons = [];
let mouseNN = { x: null, y: null };

/* ------------------------------
תנועת עכבר משפיעה על המערכת
-------------------------------- */
document.addEventListener("mousemove", (e) => {
mouseNN.x = e.clientX;
mouseNN.y = e.clientY;
});

/* ------------------------------
אובייקט נוירון
-------------------------------- */
class Neuron {
constructor() {
this.x = Math.random() * neuralCanvas.width;
this.y = Math.random() * neuralCanvas.height;

this.vx = (Math.random() - 0.5) * 0.8;
this.vy = (Math.random() - 0.5) * 0.8;

this.size = Math.random() * 3 + 1;
}

move() {
this.x += this.vx;
this.y += this.vy;

if (this.x <= 0 || this.x >= neuralCanvas.width) this.vx *= -1;
if (this.y <= 0 || this.y >= neuralCanvas.height) this.vy *= -1;
}

draw() {
neuralCtx.beginPath();
neuralCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
neuralCtx.fillStyle = "rgba(120,160,255,0.9)";
neuralCtx.fill();
}
}

/* ------------------------------
יצירת רשת נוירונים
-------------------------------- */
function initNeurons() {
neurons = [];
for (let i = 0; i < NN_COUNT; i++) {
neurons.push(new Neuron());
}
}

/* ------------------------------
קו מחבר בין נוירונים
-------------------------------- */
function connectNeurons() {
for (let a = 0; a < neurons.length; a++) {
for (let b = a; b < neurons.length; b++) {
const dx = neurons[a].x - neurons[b].x;
const dy = neurons[a].y - neurons[b].y;

const dist = Math.sqrt(dx * dx + dy * dy);

if (dist < NN_MAX_DISTANCE) {
const opacity = 1 - dist / NN_MAX_DISTANCE;

neuralCtx.beginPath();
neuralCtx.moveTo(neurons[a].x, neurons[a].y);
neuralCtx.lineTo(neurons[b].x, neurons[b].y);
neuralCtx.strokeStyle = `rgba(150,170,255,${opacity * 0.4})`;
neuralCtx.lineWidth = 1.2;
neuralCtx.stroke();
}
}
}
}

/* ------------------------------
משיכת נוירונים לכיוון העכבר
-------------------------------- */
function attractToMouse() {
if (mouseNN.x === null) return;

neurons.forEach(n => {
const dx = mouseNN.x - n.x;
const dy = mouseNN.y - n.y;

const dist = Math.sqrt(dx * dx + dy * dy);
if (dist < 160) {
n.x -= dx * 0.02;
n.y -= dy * 0.02;
}
});
}

/* ------------------------------
אנימציה
-------------------------------- */
function animateNeural() {
neuralCtx.clearRect(0, 0, neuralCanvas.width, neuralCanvas.height);

neurons.forEach(n => {
n.move();
n.draw();
});

connectNeurons();
attractToMouse();

requestAnimationFrame(animateNeural);
}

initNeurons();
animateNeural();

/* ------------------------------
התאמת מסך
-------------------------------- */
window.addEventListener("resize", () => {
neuralCanvas.width = window.innerWidth;
neuralCanvas.height = window.innerHeight;
initNeurons();
});
