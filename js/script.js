const navigationEl = document.querySelector('.nav');
const teamEl = document.querySelector('.section--team');
const heroEl = document.querySelector('.hero__container');

window.addEventListener('scroll', () => {
  const height = navigationEl.getBoundingClientRect().height;
  if (teamEl.getBoundingClientRect().y <= height) {
    navigationEl.classList.add('sticky');
  } else {
    navigationEl.classList.remove('sticky');
  }
});

document.querySelector('.mobile-nav').addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

document.querySelectorAll('.nav__li').forEach((el) => {
  el.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});
