const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  }));
}
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
document.querySelectorAll('[data-category]').forEach(link => link.addEventListener('click', () => {
  const category = link.getAttribute('data-category');
  const emailLink = document.querySelector('.division-cta a[href^="mailto:"]');
  if (emailLink) emailLink.href = `mailto:info@elitetrdksa.com?subject=${encodeURIComponent('Enquiry: ' + category)}`;
}));
