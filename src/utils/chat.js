const chats = document.querySelectorAll('.chatItem');
const gag = document.querySelector('.content__gag');
const chatContent = document.querySelector('.content__wrapper');

chats.forEach(chat => chat.addEventListener('click', () => addActiveClass(chat)));

function addActiveClass(elem) {
	removeActiveClass();
	elem.classList.add('chatItem--active');
	gag.classList.add('content__gag--hidden');
	chatContent.classList.remove('content__wrapper--hidden');
}

function removeActiveClass() {
	chats.forEach(chat => chat.classList.remove('chatItem--active'));
}

