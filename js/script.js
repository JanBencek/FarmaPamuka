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
