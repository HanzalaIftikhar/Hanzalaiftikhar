// ===================================================
// PORTFOLIO — script.js
// Phase 1: mobile nav toggle only.
// Smooth scrolling is handled by CSS (scroll-behavior),
// so no JS is needed for that.
// ===================================================

const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');

navToggle.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// close the mobile menu automatically after tapping a link
mobileNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});