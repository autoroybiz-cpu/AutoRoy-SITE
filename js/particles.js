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
