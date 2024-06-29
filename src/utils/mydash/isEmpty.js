/**
 * Функция возвращает фактор пустоты значения.
 * Если значение "value" пустое, то вернёт "true", иначе "false"
 * 
 * @param {any} value любое значение
 * @returns Boolean значение
 */

function isEmpty(value) {
	if (
		typeof value === 'number' ||
		(value === null || value === undefined) ||
		typeof value === "boolean" ||
		(typeof value === 'string' && value.length === 0) ||
		(Array.isArray(value) && value.length === 0) ||
		(value instanceof Object && (!(value instanceof Map) || !(value instanceof Set)) && Object.keys(value).length === 0) ||
		(value instanceof Map && value.size === 0) ||
		(value instanceof Set && value.size === 0)
	) {
		return true;
	} else {
		return false;
	}
}
console.log(isEmpty(null));			// => true
console.log(isEmpty(true));			// => true
console.log(isEmpty(1));				// => true
console.log(isEmpty([1, 2, 3]));		// => false
console.log(isEmpty({ 'a': 1 }));	// => false
console.log(isEmpty('123'));			// => false
console.log(isEmpty(123));				// => true
console.log(isEmpty(''));				// => true
console.log(isEmpty(0));				// => true

console.log(isEmpty([1]));				// => false
console.log(isEmpty([]));				// => true
console.log(isEmpty({}));				// => true
console.log(isEmpty({ 'a': 1 }));	// => false
console.log(isEmpty(''));				// => true



// export default isEmpty;