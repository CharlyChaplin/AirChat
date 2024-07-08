import { removeFromClassList } from "./functions";

const form = document.querySelector('form');
const phoneField = form.querySelector('input[type="tel"]');

form.addEventListener('submit', e => submitAction(e, form));

// Если это форма регистрации И имеется поле для ввода телефона
if (form.dataset.typeform === "signup" && phoneField) {
	if (phoneField) {
		for (let evt of ['input', 'blur', 'focus']) {
			phoneField.addEventListener(evt, phoneInputWatch);
		}
	}

	const renewPassElem = document.getElementById('renewpassword');
	renewPassElem.addEventListener('input', () => renewInputCheck(form));
}


// Отсылка данных
function submitAction(e, frm) {
	const inputs = [...frm?.querySelectorAll('input')];
	e.preventDefault();
	if (validateAll(inputs)) {
		const outObj = {};
		const formData = new FormData(frm);
		for (let [key, value] of formData.entries()) {
			if (key !== 'renewpassword') outObj[key] = value;
		}
		console.log("Данные отправлены:", outObj);
		return outObj;
	} else {
		console.log("Ошибка в данных, поэтому они не отправлены.");
	}

}

// Устанавливает обработчик на элемент
function validateAll(elems) {
	// изначально доверяем, что всё прошло
	let result = true;

	// если хотя бы одна проверка не прошла, то изменяем доверие
	for (let input of elems) {
		if (!validateElem(input, form)) {
			result = false;
		}
	}

	return result;
}

// Валидирует элемент в зависимости от его назначения
function validateElem(el, frm) {
	let isPassed = true;
	const errElement = el.parentElement.querySelector('.input__errDesc');
	if (el.getAttribute('name').toLowerCase() === 'email') {
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

	if (el.getAttribute('name').toLowerCase() === 'nickname') {
		if (el.value.length < 3) {
			errorShow(errElement, 'Слишком короткий ник');
			isPassed = false;
		} else {
			errorHide(errElement);
			isPassed = true;
		}
	}

	if (el.getAttribute('name').toLowerCase() === 'first_name') {
		if (el.value.length < 1) {
			errorShow(errElement, 'Введите имя');
			isPassed = false;
		} else {
			errorHide(errElement);
			isPassed = true;
		}
	}

	if (el.getAttribute('name').toLowerCase() === 'second_name') {
		if (el.value.length < 1) {
			errorShow(errElement, 'Введите фамилию');
			isPassed = false;
		} else {
			errorHide(errElement);
			isPassed = true;
		}
	}

	if (el.getAttribute('name').toLowerCase() === 'phone') {
		if (/^(\+7)(\(\d{3}\))\s(\d{3})\-(\d{2})\-(\d{2})/.test(el.value)) {
			errorHide(errElement);
			isPassed = true;
		} else {
			errorShow(errElement, 'Неверный формат номера телефона');
			isPassed = false;
		}
	}

	if (el.getAttribute('name').toLowerCase() === 'renewpassword') {
		if (frm.dataset.typeform === "signup") {
			const passData = [...frm.querySelectorAll('[type="password"]')];
			if (passData.length === 2) {
				if (passData[0].value === passData[1].value) {
					isPassed = true;
				} else {
					isPassed = false;
				}
			} else {
				errorShow(errElement, 'Ошибка в форме');
				isPassed = false;
			}
		}
	}

	return isPassed;
}

// Функция для отображения ошибки
function errorShow(el, strVal) {
	el.textContent = strVal;
	el.classList.add(el.classList[0] + '--show');
}

// Функция для скрытия ошибки
function errorHide(el) {
	el.textContent = '';
	el.setAttribute('class', removeFromClassList(Array.from(el.classList).join(' '), '--show'));
}

// Функция для проверки правильного формата телефона
function phoneInputWatch(e) {
	const el = e.target;
	const clearVal = el.dataset.phoneclear;
	const pattern = el.dataset.phonepattern;
	const matrix_def = "+7(___) ___-__-__";
	const matrix = pattern || matrix_def;
	let currentPosInMatrix = 0;
	const def = matrix.replace(/\D/g, "");
	let inputValue = e.target.value.replace(/\D/g, "");

	if (clearVal !== 'false' && e.type === 'blur') {
		if (inputValue.length < matrix.match(/([\_\d])/g).length) {
			e.target.value = '';
			return;
		}
	}

	if (def.length >= inputValue.length) inputValue = def;

	e.target.value = matrix.replace(/./g, symInStr => {
		const checkSymbol = /[_\d]/.test(symInStr);
		return checkSymbol && currentPosInMatrix < inputValue.length
			? inputValue.charAt(currentPosInMatrix++)
			: currentPosInMatrix >= inputValue.length
				? ""
				: symInStr
	});


}

// Функция для проверки правильности повторного пароля
function renewInputCheck(frm) {
	const errElement = document.getElementById('renewpassword').parentElement.querySelector('.input__errDesc');
	const passData = [...frm.querySelectorAll('[type="password"]')];

	if (passData.length === 2) {
		if (passData[0].value === passData[1].value) {
			errorHide(errElement);
			isPassed = true;
		} else {
			errorShow(errElement, 'Пароли не совпадают');
			isPassed = false;
		}
	} else {
		errorShow(errElement, 'Ошибка в форме');
		isPassed = false;
	}
}