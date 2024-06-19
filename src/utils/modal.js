const controls = [...document.querySelectorAll('[class*="cls__"]')];
const modalWindow = document.querySelector('.modal');

(function bindListener() {
	controls.forEach(control => {
		control.addEventListener('click', clickHandle);
	});
})();


function clickHandle(e) {
	e.preventDefault();
	modalWindow.classList.replace('modal--hide', 'modal--show');
	
	if (e.currentTarget.classList.contains('cls__addTalkGuy')) {
		console.log("Add Talk Guy");
	} else if (e.currentTarget.classList.contains('cls__removeTalkGuy')) {
		console.log("Remove Talk Guy");
	} else if (e.currentTarget.classList.contains('cls__addImg')) {
		console.log("Add IMG");
	} else if (e.currentTarget.classList.contains('cls__addVideo')) {
		console.log("Add Video");
	} else if (e.currentTarget.classList.contains('cls__addFile')) {
		console.log("Add File");
	} else if (e.currentTarget.classList.contains('cls__addGeo')) {
		console.log("Add Geolocation");
	}
}