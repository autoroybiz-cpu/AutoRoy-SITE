const canvas1 = document.getElementById("particles-layer-1");
const ctx1 = canvas1.getContext("2d");

canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;

let particlesArray1 = [];

class ParticleLayer1 {
constructor(){
this.x = Math.random()*canvas1.width;
this.y = Math.random()*canvas1.height;
this.size = Math.random()*3+1;
this.speedX = (Math.random()*0.6)-0.3;
this.speedY = (Math.random()*0.6)-0.3;
}
update(){
this.x += this.speedX;
this.y += this.speedY;
if (this.x < 0 || this.x > canvas1.width) this.speedX *= -1;
if (this.y < 0 || this.y > canvas1.height) this.speedY *= -1;
}
draw(){
ctx1.fillStyle = "rgba(150,170,255,0.7)";
ctx1.beginPath();
ctx1.arc(this.x,this.y,this.size,0,Math.PI*2);
ctx1.fill();
}
}

function initParticles1(){
particlesArray1 = [];
for (let i = 0; i < 120; i++){
particlesArray1.push(new ParticleLayer1());
}
}

function animateParticles1(){
ctx1.clearRect(0,0,canvas1.width,canvas1.height);
particlesArray1.forEach(p => {
p.update();
p.draw();
});
requestAnimationFrame(animateParticles1);
}

initParticles1();
animateParticles1();
/* ============================================================
AutoRoy⚡AI – PARTICLES LAYER 2 (MAGNET SYSTEM)
חלקיקים שנמשכים או דוחים את העכבר, עם עומק אמיתי
============================================================ */

const canvas2 = document.getElementById("particles-layer-2");
const ctx2 = canvas2.getContext("2d");

canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

let magParticles = [];
const MAG_COUNT = 140;

let mouseMag = {
x: null,
y: null,
radius: 120 // רדיוס השפעת מגנט
};

window.addEventListener("mousemove", (e) => {
mouseMag.x = e.clientX;
mouseMag.y = e.clientY;
});

/* אובייקט חלקיק מגנט */
class MagnetParticle {
constructor() {
this.x = Math.random() * canvas2.width;
this.y = Math.random() * canvas2.height;

this.size = Math.random() * 3 + 1;

this.baseX = this.x;
this.baseY = this.y;

this.speed = Math.random() * 3 + 0.5;

this.density = Math.random() * 40 + 5;
}

draw() {
ctx2.fillStyle = "rgba(90,130,255,0.85)";
ctx2.beginPath();
ctx2.arc(this.x, this.y, this.size, 0, Math.PI * 2);
ctx2.closePath();
ctx2.fill();
}

update() {
let dx = mouseMag.x - this.x;
let dy = mouseMag.y - this.y;
let distance = Math.sqrt(dx * dx + dy * dy);
let forceDirectionX = dx / distance;
let forceDirectionY = dy / distance;
let maxDistance = mouseMag.radius;

if (distance < maxDistance) {
let force = (maxDistance - distance) / maxDistance;
let directionX = forceDirectionX * force * this.density;
let directionY = forceDirectionY * force * this.density;

// דחייה מהעכבר
this.x -= directionX;
this.y -= directionY;
} else {
// חזרה למיקום המקורי (שואף למרכז)
if (this.x !== this.baseX) {
let dx = this.x - this.baseX;
this.x -= dx / 20;
}
if (this.y !== this.baseY) {
let dy = this.y - this.baseY;
this.y -= dy / 20;
}
}
}
}

/* יצירת חלקיקים */
function initMagneticParticles() {
magParticles = [];
for (let i = 0; i < MAG_COUNT; i++) {
magParticles.push(new MagnetParticle());
}
}

/* אנימציה */
function animateMagneticParticles() {
ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

magParticles.forEach(p => {
p.update();
p.draw();
});

requestAnimationFrame(animateMagneticParticles);
}

initMagneticParticles();
animateMagneticParticles();

/* התאמת גודל המסך */
window.addEventListener("resize", () => {
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;
initMagneticParticles();
});
