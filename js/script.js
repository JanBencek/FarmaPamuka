const navigationEl = document.querySelector('.nav');
const teamEl = document.querySelector('.section--team');

window.addEventListener('scroll', () => {
  if (teamEl.getBoundingClientRect().top < window.scrollY) {
    navigationEl.classList.add('sticky');
  } else {
    navigationEl.classList.remove('sticky');
  }
});
