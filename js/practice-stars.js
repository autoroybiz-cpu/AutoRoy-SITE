/* ============================================================
AutoRoy⚡AI – STARFIELD UNIVERSE
============================================================ */

const cs = document.getElementById("particles-stars");
const xs = cs.getContext("2d");

cs.width = innerWidth;
cs.height = innerHeight;

let stars = [];
const STAR_MAX = 260;

for (let i = 0; i < STAR_MAX; i++) {
stars.push({
x: Math.random() * cs.width - cs.width / 2,
y: Math.random() * cs.height - cs.height / 2,
z: Math.random() * 800,
size: Math.random() * 1.2 + 0.3
});
}

function animateStars() {
xs.clearRect(0, 0, cs.width, cs.height);

stars.forEach(s => {
s.z -= 2;
if (s.z <= 1) s.z = 800;

const scale = 800 / s.z;
const x = s.x * scale + cs.width / 2;
const y = s.y * scale + cs.height / 2;

xs.beginPath();
xs.arc(x, y, s.size * scale, 0, Math.PI * 2);
xs.fillStyle = `rgba(200,220,255,0.9)`;
xs.fill();
});

requestAnimationFrame(animateStars);
}

animateStars();
