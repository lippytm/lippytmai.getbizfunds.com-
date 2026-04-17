/* =========================================================
   lippytmai.getbizfunds.com  –  Main Script
   ========================================================= */

(function () {
  'use strict';

  /* ---- Mobile Navigation ---- */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  /* ---- Navbar scroll shadow ---- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (navbar) {
      navbar.style.background = window.scrollY > 40
        ? 'rgba(11,15,26,0.97)'
        : 'rgba(11,15,26,0.85)';
    }
  });

  /* ---- Intersection Observer – fade-in cards ---- */
  const observerOpts = { threshold: 0.12 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOpts);

  document.querySelectorAll(
    '.service-card, .diversity-card, .platform-tile, .platform-features li'
  ).forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
    observer.observe(el);
  });

  // Add .visible class effect via CSS
  const styleTag = document.createElement('style');
  styleTag.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(styleTag);

  /* ---- Contact Form ---- */
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  function showFieldError(fieldId, msg) {
    const errEl = document.getElementById(fieldId + '-error');
    if (errEl) errEl.textContent = msg;
  }
  function clearFieldErrors() {
    document.querySelectorAll('.field-error').forEach(el => { el.textContent = ''; });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      clearFieldErrors();

      const name    = form.querySelector('#name');
      const email   = form.querySelector('#email');
      const message = form.querySelector('#message');
      let valid = true;

      if (!name.value.trim()) {
        showFieldError('name', 'Please enter your name.');
        valid = false;
      }
      if (!email.value.trim() || !email.validity.valid) {
        showFieldError('email', 'Please enter a valid email address.');
        valid = false;
      }
      if (!message.value.trim()) {
        showFieldError('message', 'Please enter a message.');
        valid = false;
      }
      if (!valid) return;

      // Simulate send (swap with real endpoint / mailto / formspree)
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Sending…';
      btn.disabled = true;

      setTimeout(() => {
        form.style.display = 'none';
        if (success) success.style.display = 'block';
      }, 1200);
    });
  }

  /* ---- Animated counters ---- */
  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;

    const tick = () => {
      current += step;
      if (current >= target) {
        el.textContent = target + suffix;
        return;
      }
      el.textContent = Math.floor(current) + suffix;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  const counters = document.querySelectorAll('.stat-value[data-target]');
  if (counters.length) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => statsObserver.observe(c));
  }

  /* ---- Active nav link on scroll ---- */
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    links.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current
        ? 'var(--clr-white)'
        : '';
    });
  }, { passive: true });
})();
