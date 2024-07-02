import { removeFromClassList } from "./functions";

const form = document.querySelector('form');
const sendButton = form?.querySelector('.button__auth');


form.addEventListener('submit', e => submitAction(e, form));


// Отсылка данных
function submitAction(e, frm) {
	const inputs = [...frm?.querySelectorAll('input')];
	e.preventDefault();
	if (validateAll(inputs)) {
		const outObj = {};
		const formData = new FormData(frm);
		for (let [key, value] of formData.entries()) {
			outObj[key] = value;
		}
		console.log(outObj);
		return outObj;
	}

}

// Устанавливает обработчик на элемент
function validateAll(elems) {
	let result = false;
	
	for (let input of elems) {
		result = validateElem(input);
	}

	return result;
}

// Валидирует элемент в зависимости от его назначения
function validateElem(el) {
	let isPassed = true;
	const errElement = el.parentElement.querySelector('.input__errDesc');
	
	if (el.getAttribute('name').toLowerCase() === 'login') {
		const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
		if (!EMAIL_REGEXP.test(el.value)) {
			errorShow(errElement, 'Неверный формат почты');
			isPassed = false;
		} else {
			errorHide(errElement);
			isPassed = true;
		}
	}

	if (el.getAttribute('name').toLowerCase() === 'password') {
		if (el.value.length < 8) {
			errorShow(errElement, 'Слишком короткий пароль');
			isPassed = false;
		} else {
			errorHide(errElement);
			isPassed = true;
		}
	}

	return isPassed;
}

function errorShow(el, strVal) {
	el.textContent = strVal;
	el.classList.add(el.classList[0] + '--show');
}

function errorHide(el) {
	el.textContent = '';
	el.setAttribute('class', removeFromClassList(Array.from(el.classList).join(' '), '--show'));
}