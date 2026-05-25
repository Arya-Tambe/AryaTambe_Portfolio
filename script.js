// Custom cursor
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');
let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top  = mouseY + 'px';
});

(function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.12;
  cursorY += (mouseY - cursorY) * 0.12;
  cursor.style.left = cursorX + 'px';
  cursor.style.top  = cursorY + 'px';
  requestAnimationFrame(animateCursor);
})();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.style.transform = 'translate(-50%,-50%) scale(1.6)');
  el.addEventListener('mouseleave', () => cursor.style.transform = 'translate(-50%,-50%) scale(1)');
});

// Sticky nav scroll class
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Scroll-reveal observer
const revealEls = document.querySelectorAll(
  '.info-card, .skill-item, .project-row, .about-body, .section-title, .social-link, .contact-title, .contact-sub, .contact-location'
);
revealEls.forEach(el => el.classList.add('reveal'));

const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
        // Also trigger skill bars
        if (entry.target.classList.contains('skill-item')) {
          entry.target.classList.add('visible');
        }
      }, 80);
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObs.observe(el));

// Stagger children within grids
document.querySelectorAll('.skills-grid, .about-cards-col, .social-stack').forEach(grid => {
  Array.from(grid.children).forEach((child, i) => {
    child.style.transitionDelay = (i * 0.1) + 's';
  });
});