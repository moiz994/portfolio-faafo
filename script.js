// Theme toggle
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  if (localStorage.getItem('theme') === 'dark') root.classList.add('dark');
  btn.addEventListener('click', () => {
    root.classList.toggle('dark');
    localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
  });
})();

// Work carousel prev/next
(function () {
  const grid = document.getElementById('workGrid');
  const prevBtn = document.getElementById('workPrev');
  const nextBtn = document.getElementById('workNext');
  if (!grid || !prevBtn || !nextBtn) return;

  function cardWidth() {
    const card = grid.querySelector('.work-card');
    return card ? card.offsetWidth + 14 : 340;
  }

  function updateBtns() {
    prevBtn.disabled = grid.scrollLeft <= 1;
    nextBtn.disabled = grid.scrollLeft + grid.offsetWidth >= grid.scrollWidth - 1;
  }

  prevBtn.onclick = () => grid.scrollBy({ left: -cardWidth(), behavior: 'smooth' });
  nextBtn.onclick = () => grid.scrollBy({ left: cardWidth(), behavior: 'smooth' });
  grid.addEventListener('scroll', updateBtns, { passive: true });
  updateBtns();
})();

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.08 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
