const chats = document.querySelectorAll('.chatItem');

chats.forEach(chat => chat.addEventListener('click', () => addActiveClass(chat)));

function addActiveClass(elem) {
	removeActiveClass();
	elem.classList.add('chatItem--active');
}

function removeActiveClass() {
	chats.forEach(chat => chat.classList.remove('chatItem--active'));
}

