/**
 * Функция выдаёт диапазон целых чисел в виде массива.
 * Если задан только "first" параметр, то диапазон исходит от нуля.
 * Если заданы "from" и "to", то диапазон от "from" до "to"(не включая его).
 * Если заданы "from", "to" и "step", то диапазон от "from" до "to"(не включая его) с шагом "step"
 * 
 * @param {number} from начальное значение диапазона
 * @param {number} to конечное значение диапазона (не включая его)
 * @param {number} step шаг прохода по диапазону
 */

function rangeRight(from, to, step = 1) {
	if (!from && !to) return [];
	let result = [];
	if (!to) {
		if (from > 0) {
			for (let i = from; i > 0; i -= step) result.push(i);
		} else {
			for (let i = from; i < 0; i += step) result.push(i);
		}
	} else {
		if (to > 0) {
			if (step === 0) {
				for (let i = to; i > from; i--) result.push(from);
			} else {
				for (let i = to; i > from; i -= step) result.push(i);
			}
		} else {
			if (step === 0) {
				for (let i = to; i < from; i++) result.push(from);
			} else {
				for (let i = to; i < from; i -= step) result.push(i);
			}
		}
	}

	return result;
}

console.log(rangeRight(4));				// [ 4, 3, 2, 1 ]
console.log(rangeRight(-4));				// [ -4, -3, -2, -1 ]
console.log(rangeRight(1, 5));			// [ 5, 4, 3, 2 ]
console.log(rangeRight(0, 20, 5));		// [ 20, 15, 10, 5 ]
console.log(rangeRight(0, -4, -1));		// [ -4, -3, -2, -1 ]
console.log(rangeRight(1, 4, 0));		// [ 1, 1, 1 ]
console.log(rangeRight(0));				// []



export default rangeRight;