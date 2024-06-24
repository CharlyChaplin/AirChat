import { removeFromClassList } from './functions.js';

// Кнопка изменения данных пользователя
const editAccountBtn = document.getElementById('changeDataAction');
// Блок с кнопками изменения
const changeActionsBlock = document.querySelector('.userActions__changeActions');
// Кнопка с отправкой изменённых данных пользователя
const changedDataSubmitBtn = document.getElementById('changedDataSubmit');
// Блок с кнопкой отправки изменённых данных пользователя
const changedDataSubmitBlock = document.querySelector('.userActions__applyChanges');
// Блок с аватаром
const avatarBlock = document.querySelector('.profile__logo');

// обработчик на кнопку изменения данных пользователя
editAccountBtn.addEventListener('click', editAccHandler, { once: true });



function editAccHandler() {
	// ищем все Inputs
	const inputsCollection = document.querySelectorAll('[class*="--cell"]');

	// Показываем Inputs
	toggleInputs(inputsCollection, true);

	// скрываем кнопки изменения данных
	changeActionsBlock.classList.add(changeActionsBlock.className + '--hidden');
	// отображаем кнопку "Сохранить"
	changedDataSubmitBlock.setAttribute('class', removeFromClassList(changedDataSubmitBlock.className, '--hidden'));
	// навешиваем обработчик на кнопку "Сохранить"
	changedDataSubmitBtn.addEventListener('click', () => saveDataHandler(inputsCollection), { once: true });
}

function saveDataHandler(inputsCollection) {
	// возвращаем Inputs в исходное состояние
	toggleInputs(inputsCollection, false);
	// отображаем блок .userActions__changeActions
	changeActionsBlock.setAttribute("class", removeFromClassList(changeActionsBlock.className, '--hidden'));
	// скрываем блок .userActions__applyChanges
	changedDataSubmitBlock.classList.add(changedDataSubmitBlock.className + '--hidden');
	// обработчик на кнопку изменения данных пользователя
	editAccountBtn.addEventListener('click', editAccHandler, { once: true });
}


function toggleInputs(collection = null, factor = null) {
	if (!collection.length || factor === null) return;

	// берём все элементы Input в блоке с данными(кроме аватара)
	for (let el of collection) {
		if (factor) {
			el.value = el.getAttribute("value");
			el.removeAttribute("disabled");
			el.classList.add("userData__data--editable");
			el.addEventListener("click", makeSelection);
		} else {
			el.setAttribute("disabled", "disabled");
			el.classList.remove("userData__data--editable");
			el.removeEventListener("click", makeSelection);
		}
	}
	// берём блок аватара
	
}

function makeSelection() { this.select() }