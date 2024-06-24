const avatarBlock = document.querySelector('.userIcon__editable .userIcon__form');
const input = document.querySelector('.userIcon__input');
const userIcon = document.querySelector('.userIcon__icon');
const overlay = document.querySelector('.userIcon__overlay');


overlay.addEventListener('click', e => {
	e.stopPropagation();
	input.click();
})

input.addEventListener('input', e => {
	const file = e.target.files[0];
	if (file) {
		createImg(file);
		// скрываем иконку и оверлей
		userIcon.style.cssText = overlay.style.cssText = `display: none`;
	}
});

// создание блока <div> с вложенным элементом <img>
function createImg(file) {
	const previewImage = document.createElement('div');
	previewImage.classList.add('userIcon__img');
	previewImage.innerHTML = `<img src=${URL.createObjectURL(file)} alt="AvaIco">`;
	avatarBlock.insertAdjacentElement('beforeend', previewImage);
	URL.revokeObjectURL(file);
}