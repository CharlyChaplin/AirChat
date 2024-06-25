import { removeFromClassList } from './functions.js';

// Блок с аватаром для чтения
const avatarBlockStatic = document.querySelector('.profile__logo');
// Блок с аватаром для записи
const avatarBlockEdit = document.querySelector('.profile__logo--editable');
// Блок с данными пользователя
const userDataBlock = document.querySelector('.profile__userData');
// Кнопка изменения данных пользователя
const editAccountBtn = document.getElementById('changeDataAction');
// Блок с кнопками изменения
const changeActionsBlock = document.querySelector('.userActions__changeActions');
// Кнопка с отправкой изменённых данных пользователя
const changedDataSubmitBtn = document.getElementById('changedDataSubmit');
// Блок с кнопкой отправки изменённых данных пользователя
const changedDataSubmitBlock = document.querySelector('.userActions__applyChanges');
// Кнопка изменения пароля
const editPassBtn = document.getElementById('changePassAction');
// Блок с полями для изменения пароля
const passwordsBlock = document.querySelector('.profile__userDataPassEdit');
// Кнопка выхода из аккаунта
const logoutBtn = document.getElementById('logoutAction');



// обработчик на кнопку изменения данных пользователя
editAccountBtn.addEventListener('click', editAccHandler, { once: true });
// обработчик на кнопку изменения пароля пользователя
editPassBtn.addEventListener('click', editPassHandler, { once: true });
// обработчик на кнопку выхода из аккаунта
logoutBtn.addEventListener('click', logoutHandler);



// функции редактирования данных пользователя
function editAccHandler() {
	// скрываем блок аватара для чтения
	avatarBlockStatic.classList.add(avatarBlockStatic.classList[0] + '--hidden');
	// показываем блок аватара для записи
	avatarBlockEdit.setAttribute("class", removeFromClassList(avatarBlockEdit.classList[0], '--hidden'))

	// ищем все Inputs
	const inputsCollection = document.querySelectorAll('[class*="--cell"]');
	// Показываем Inputs
	toggleInputs(inputsCollection, true);

	// скрываем кнопки изменения данных
	changeActionsBlock.classList.add(changeActionsBlock.classList[0] + '--hidden');
	// отображаем кнопку "Сохранить"
	changedDataSubmitBlock.setAttribute('class', removeFromClassList(changedDataSubmitBlock.classList[0], '--hidden'));
	// навешиваем обработчик на кнопку "Сохранить"
	changedDataSubmitBtn.addEventListener('click', () => saveDataHandler(inputsCollection), { once: true });
}
function saveDataHandler(inputsCollection) {
	// показываем блок аватара для чтения
	avatarBlockStatic.setAttribute("class", removeFromClassList(avatarBlockStatic.classList[0], '--hidden'));
	// скрываем блок аватара для записи
	avatarBlockEdit.classList.add(avatarBlockEdit.classList[0] + '--hidden');

	// возвращаем Inputs в исходное состояние
	toggleInputs(inputsCollection, false);
	// отображаем блок .userActions__changeActions
	changeActionsBlock.setAttribute("class", removeFromClassList(changeActionsBlock.classList[0], '--hidden'));
	// скрываем блок .userActions__applyChanges
	changedDataSubmitBlock.classList.add(changedDataSubmitBlock.classList[0] + '--hidden');
	// обработчик на кнопку изменения данных пользователя
	editAccountBtn.addEventListener('click', editAccHandler, { once: true });
}

// функции редактирования пароля пользователя
function editPassHandler() {
	// скрываем блок с пользовательскими данными
	userDataBlock.classList.add(userDataBlock.classList[0] + '--hidden');
	// показываем блок с полями для изменения пароля
	passwordsBlock.setAttribute("class", removeFromClassList(passwordsBlock.classList[0], "--hidden"));
	// ищем все Inputs в этом блоке
	const inputsCollection = passwordsBlock.querySelectorAll('input');

	// скрываем кнопки изменения данных
	changeActionsBlock.classList.add(changeActionsBlock.classList[0] + '--hidden');
	// отображаем кнопку "Сохранить"
	changedDataSubmitBlock.setAttribute('class', removeFromClassList(changedDataSubmitBlock.classList[0], '--hidden'));
	// навешиваем обработчик на кнопку "Сохранить"
	changedDataSubmitBtn.addEventListener('click', () => savePassHandler(inputsCollection), { once: true });
}
function savePassHandler(inputsCollection) {
	// возвращаем Inputs в исходное состояние
	// toggleInputs(inputsCollection, false);

	// отображаем блок с пользовательскими данными
	userDataBlock.setAttribute("class", removeFromClassList(userDataBlock.classList[0], "--hidden"));
	// скрываем блок с полями для изменения пароля
	passwordsBlock.classList.add(passwordsBlock.classList[0] + "--hidden");
	// отображаем блок .userActions__changeActions
	changeActionsBlock.setAttribute("class", removeFromClassList(changeActionsBlock.classList[0], '--hidden'));
	// скрываем блок .userActions__applyChanges
	changedDataSubmitBlock.classList.add(changedDataSubmitBlock.classList[0] + '--hidden');
	// обработчик на кнопку изменения данных пользователя
	editPassBtn.addEventListener('click', editPassHandler, { once: true });
}

//функция выхода из аккаунта
function logoutHandler() {
	window.location.href = 'index.html';
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
}

function makeSelection() { this.select() }