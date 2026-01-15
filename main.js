const letters = document.querySelectorAll('tspan');
const groups = ['g1','g2','g3','g4','g5','g6','g7','g8'];

const cycle = 5000;
const step = cycle / groups.length;

function loop() {
  const t = Date.now() % cycle;
  const active = groups[Math.floor(t / step)];

  letters.forEach(l => {
    l.style.fill = l.classList.contains(active)
      ? '#FFD700'
      : 'white';
  });

  requestAnimationFrame(loop);
}
loop();