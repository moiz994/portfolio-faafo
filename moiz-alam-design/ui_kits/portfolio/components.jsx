/* Portfolio UI Kit — primitives & chrome
   Navbar, Footer, ThemeToggle, Button, Tag, useReveal hook. */

const { useState, useEffect, useRef } = React;

// --- Theme toggle (sun/moon, persists to localStorage) ---
function ThemeToggle() {
  const [dark, setDark] = useState(
    () => document.documentElement.classList.contains('dark')
  );
  const toggle = () => {
    const root = document.documentElement;
    root.classList.toggle('dark');
    const isDark = root.classList.contains('dark');
    setDark(isDark);
    try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (e) {}
  };
  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
      <div className="toggle-icon-wrap">
        <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" fill="currentColor" stroke="none"/>
          <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="5.64" y1="5.64" x2="4.22" y2="4.22"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          <line x1="5.64" y1="18.36" x2="4.22" y2="19.78"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        </svg>
        <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" stroke="none"/>
        </svg>
      </div>
    </button>
  );
}

// --- Tag / category chip ---
function Tag({ tone, children }) {
  return <span className={"wtag" + (tone ? " " + tone : "")}>{children}</span>;
}

// --- Button ---
function Button({ variant = "primary", children, onClick, href }) {
  const cls = "btn-" + variant;
  if (href) return <a className={cls} href={href} target="_blank" rel="noreferrer">{children}</a>;
  return <button className={cls} onClick={onClick}>{children}</button>;
}

// --- Navbar (home variant + case-study variant) ---
function Navbar({ mode = "home", onHome }) {
  if (mode === "project") {
    return (
      <nav className="navbar">
        <span className="nav-logo" onClick={onHome}>MA</span>
        <div className="nav-right">
          <span className="nav-back" onClick={onHome}>← All Projects</span>
          <ThemeToggle />
        </div>
      </nav>
    );
  }
  return (
    <nav className="navbar">
      <span className="nav-logo" onClick={onHome}>MA</span>
      <div className="nav-right">
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#journey">Journey</a></li>
          <li><a href="#personal">Human</a></li>
          <li><a href="#contact">Let's Talk</a></li>
        </ul>
        <span className="nav-resume">Resume ↓</span>
        <ThemeToggle />
      </div>
    </nav>
  );
}

// --- Footer ---
function Footer() {
  return (
    <footer className="footer">
      <span>Moiz Alam · Sydney</span>
      <span className="footer-dot">·</span>
      <span>Senior Product Manager</span>
    </footer>
  );
}

// --- Scroll reveal hook: adds .visible to .reveal elements in view ---
function useReveal(dep) {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [dep]);
}

Object.assign(window, { ThemeToggle, Tag, Button, Navbar, Footer, useReveal });
