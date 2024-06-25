const modal = document.querySelector('.modal');
const overlay = modal.querySelector('.modal__overlay');
const actionBtn = modal.querySelector('[type="submit"]');
const attr = modal.dataset;


modal.addEventListener('click', handleFunc);
actionBtn.addEventListener('click', handleButtonClick);

function handleFunc(e) {
	e.stopPropagation();
	
	if (e.target === overlay && e.target !== actionBtn) {
		closeModal();
	}
}

function handleButtonClick(e) {
	e.preventDefault();
	closeModal();
}

function closeModal() {
	if (modal.classList.contains('modal--show')) {
		modal.classList.replace('modal--show', 'modal--hide');
	}
}