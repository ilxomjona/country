const elBtn = document.querySelector('.btn');
const elbody = document.querySelector('body');
elBtn.addEventListener('click', () => {
	elbody.classList.toggle('dark-mode');
});
