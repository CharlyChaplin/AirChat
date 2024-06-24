/**
 * Принимает на вход строку классов и удаляет класс в зависимости от подстроки,
 * если она присутствует в текущем листе классов.
 * @param {String} clsString Текущий лист классов
 * @param {String} subStr Искомая строка в листе классов для удаления
 */
function removeFromClassList(clsString = "", subStr = '') {
	let list = [];

	if (clsString.length && subStr.length) {
		list = clsString.split(' ');
		return list.filter(el => !el.includes(subStr)).join(' ');
	} else {
		return;
	}
}


module.exports = {
	removeFromClassList
}