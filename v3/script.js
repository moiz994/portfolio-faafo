// Theme toggle
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');

  // Apply saved preference before first paint
  if (localStorage.getItem('theme') === 'light') {
    root.classList.add('light');
  }

  btn.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
  });
})();

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.1 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
