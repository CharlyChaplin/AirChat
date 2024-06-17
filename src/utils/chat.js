const chats = document.querySelectorAll('.chatItem');
// toggle Gag and Content
const gag = document.querySelector('.content__gag');
const chatContent = document.querySelector('.content__wrapper');
// work with Burger-menu
const burgerIcon = document.querySelector('.menu-icon');
const burgerIconInnerWrapper = document.querySelector('.menu-icon__wrapper');
const burgerMenu = document.querySelector('.menu');
const msgBox = document.querySelector('.content__msg-input');


// Handle toggle Gag page/Content page
chats.forEach(chat => chat.addEventListener('click', () => addActiveClass(chat)));

function addActiveClass(elem) {
	removeActiveClass();
	elem.classList.add('chatItem--active');
	gag.classList.add('content__gag--hidden');
	chatContent.classList.remove('content__wrapper--hidden');
	msgBox.focus();
}

function removeActiveClass() {
	chats.forEach(chat => chat.classList.remove('chatItem--active'));
}


// Menu Handle Open
burgerIcon.addEventListener('click', handleMenuOpen);

function handleMenuOpen(e) {
	e.stopPropagation();
	burgerIcon.classList.add('menu-icon--active');
	burgerMenu.classList.remove('menu--hidden');
	window.addEventListener('click', e => handleCloseMenu(e), { once: true });
}

function handleCloseMenu(e) {
	if (e.target !== burgerIcon && e.target !== burgerIconInnerWrapper) {
		burgerMenu.classList.add('menu--hidden');
		burgerIcon.classList.remove('menu-icon--active');
	}
}

addEventListener("DOMContentLoaded", e => {
	console.log("Dom loaded");
})