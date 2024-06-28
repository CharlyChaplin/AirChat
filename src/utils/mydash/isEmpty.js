/**
 * Функция возвращает фактор пустоты значения.
 * Если значение "value" пустое, то вернёт "true", иначе "false"
 * 
 * @param {any} value любое значение
 * @returns Boolean значение
 */

function isEmpty(value) {
	if (value instanceof Object) {
		// если это массив
		if (Array.isArray(value)) return value.length === 0;
		// если это объект
		return Object.keys(value).length === 0
	}
	if (typeof value === 'string') {
		return value.length === 0;
	}
	if (typeof value === 'number') {
		return false;
	}

}



console.log(isEmpty([1]));				// false
console.log(isEmpty([]));				// true
console.log(isEmpty({}));				// true
console.log(isEmpty({ 'a': 1 }));	// false
console.log(isEmpty(''));				// true



export default isEmpty;