/**
 * Koda — main.js
 * Handles: sticky nav scroll state, scroll-triggered fade-in,
 * smooth anchor scrolling, and mobile menu toggle.
 */

(function () {
  'use strict';

  // ── Sticky nav ────────────────────────────────────────────────
  const nav = document.getElementById('kp-nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 36);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

  // ── Scroll fade-in ────────────────────────────────────────────
  const fadeEls = document.querySelectorAll('.fade');
  if (fadeEls.length > 0) {
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('on');
              obs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -36px 0px' }
      );
      fadeEls.forEach((el) => obs.observe(el));
    } else {
      // Fallback for browsers without IntersectionObserver
      fadeEls.forEach((el) => el.classList.add('on'));
    }
  }

  // ── Smooth scroll ─────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const navH = 68;
      const top = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ── Mobile menu ───────────────────────────────────────────────
  const menuToggle = document.getElementById('kp-menu-toggle');
  const mobileMenu = document.getElementById('kp-mob');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!nav?.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
