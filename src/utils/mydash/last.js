/**
 * Функция выдаёт последний элемент массива
 * 
 * @param {any} arr Входной массив
 * @returns Последний элемент массива
 */

function last(arr) {
	return Array.isArray(arr)
		? arr[arr.length - 1]
		: null;
}

export default last;