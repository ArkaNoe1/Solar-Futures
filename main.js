if (document.body.dataset.page === 'home') {

  const letters = document.querySelectorAll('tspan');
  const groups = ['g1','g2','g3','g4','g5','g6','g7','g8'];
  const cycle = 5000;
  const step = cycle / groups.length;

  function loop() {
  	const textColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-text')
      .trim();
    const t = Date.now() % cycle;
    const active = groups[Math.floor(t / step)];
    letters.forEach(l => {
      l.style.fill = l.classList.contains(active) ? '#FFD700' : textColor;
    });
    requestAnimationFrame(loop);
  }
  loop();
}

const root = document.documentElement;

// Cambio tema claro / oscuro

const themeButton = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme') || 'dark';

root.dataset.theme = savedTheme;

themeButton?.addEventListener('click', () => {
  const currentTheme = root.dataset.theme;
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  root.dataset.theme = newTheme;

  localStorage.setItem('theme', newTheme);
});

// Aumento tamaño texto

const fontButton = document.getElementById('text-size');
const savedTextSize = localStorage.getItem('textSize');

if (savedTextSize === 'large') {
  root.dataset.text = 'large';
  fontButton.textContent = 'A-';
} else {
  root.dataset.text = '';
  fontButton.textContent = 'A+';
}

fontButton?.addEventListener('click', () => {
  const isLarge = root.dataset.text === 'large';
  if (isLarge) {
    root.dataset.text = '';
    localStorage.setItem('textSize', 'normal');
    fontButton.textContent = 'A+';
  } else {
    root.dataset.text = 'large';
    localStorage.setItem('textSize', 'large');
    fontButton.textContent = 'A-';
  }
});