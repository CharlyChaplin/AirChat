const input = document.querySelector('.userIcon__input');
const userIcon = document.querySelector('.userIcon__icon');
const overlay = document.querySelector('.userIcon__overlay');
const previewImage = document.querySelector('.userIcon__img');

overlay.addEventListener('click', e => {
	e.stopPropagation();
	input.click();
})

input.addEventListener('input', e => {
	const file = e.target.files[0];
	if (file) {
		createImg(file);
		userIcon.style.cssText = `display: none`;
		previewImage.style.cssText = `display: flex`;
	}
});

function createImg(file) {
	previewImage.innerHTML = `<img src=${URL.createObjectURL(file)} alt="AvaIco">`;
	URL.revokeObjectURL(file);
}