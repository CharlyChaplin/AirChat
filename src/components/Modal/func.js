const modal = document.querySelector('.modal');
const modalWrapper = document.querySelector('.modal__wrapper');
const attr = modal.dataset;


modal.addEventListener('click', handleFunc);

function handleFunc(e) {
	if (e.target !== modalWrapper) {
		if (modal.classList.contains('modal--show')) {
			modal.classList.replace('modal--show', 'modal--hide');
		}
	}
}