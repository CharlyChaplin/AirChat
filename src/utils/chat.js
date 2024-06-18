const chats = document.querySelectorAll('.chatItem');
// toggle Gag and Content
const gag = document.querySelector('.content__gag');
const chatContent = document.querySelector('.content__wrapper');

// work with Burger-menu
const burgerIcon = document.querySelector('.menu-icon');
const burgerMenu = document.querySelector('.menu');

// work with menu-attach
const attachIcon = document.querySelector('.attach-icon');
const attachMenu = document.querySelector('.menu-attach');

// autoFocus on Input
const msgBox = document.querySelector('.content__msg-input');
// addEventListener("DOMContentLoaded", e => {
// 	console.log("Dom loaded");
// })


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
[burgerIcon, attachIcon].forEach(el => {
	el.addEventListener('click', handleMenuOpen);
});

function handleMenuOpen(e) {
	e.stopPropagation();
	if (e.currentTarget === burgerIcon) {
		if (attachIcon.classList.contains('attach-icon--active')) {
			handleCloseMenu(burgerIcon);
		}
		burgerIcon.classList.add('menu-icon--active');
		burgerMenu.classList.remove('menu--hidden');
	} else if (e.currentTarget === attachIcon) {
		if (burgerIcon.classList.contains('menu-icon--active')) {
			handleCloseMenu(attachIcon);
		}
		attachIcon.classList.add('attach-icon--active');
		attachMenu.classList.remove('menu-attach--hidden');
	}

	window.addEventListener('click', e => handleCloseMenu(e), { once: true });
}

// Menu Handle Close
function handleCloseMenu(e) {
	if (e.target !== burgerIcon) {
		burgerIcon.classList.remove('menu-icon--active');
		burgerMenu.classList.add('menu--hidden');
	}
	if (e.target !== attachIcon) {
		attachIcon.classList.remove('attach-icon--active');
		attachMenu.classList.add('menu-attach--hidden');
	}
}