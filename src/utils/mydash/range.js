/**
 * Функция выдаёт диапазон целых чисел в виде массива.
 * Если задан только "first" параметр, то диапазон исходит от нуля.
 * Если заданы "from" и "to", то диапазон от "from" до "to"(не включая его).
 * Если заданы "from", "to" и "step", то диапазон от "from" до "to"(не включая его) с шагом "step"
 * 
 * @param {number} from ночальное значение диапазона
 * @param {number} to конечное значение диапазона (не включая его)
 * @param {number} step шаг прохода по диапазону
 */

function range(from, to, step = 1) {
	if (!from && !to) return [];
	let result = [];
	if (!to) {
		if (from > 0) {
			for (let i = 0; i < from; i += step) result.push(i);
		} else {
			for (let i = 0; i > from; i -= step) result.push(i);
		}
	} else {
		if (to > 0) {
			if (step === 0) {
				for (let i = from; i < to; i++) result.push(from);
			} else {
				for (let i = from; i < to; i += step) result.push(i);
			}
		} else {
			if (step === 0) {
				for (let i = from; i > to; i--) result.push(from);
			} else {
				for (let i = from; i > to; i += step) result.push(i);
			}
		}
	}

	return result;
}

console.log(range(4));				// [ 0, 1, 2, 3 ]
console.log(range(-4));				// [ 0, -1, -2, -3 ]
console.log(range(1, 5));			// [ 1, 2, 3, 4 ]
console.log(range(0, 20, 5));		// [ 0, 5, 10, 15 ]
console.log(range(0, -4, -1));	// [ 0, -1, -2, -3 ]
console.log(range(1, 4, 0));		// [ 1, 1, 1 ]
console.log(range(0));				// []