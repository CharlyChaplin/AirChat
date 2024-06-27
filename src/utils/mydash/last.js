function last(arr) {
	return Array.isArray(arr)
		? arr[arr.length - 1]
		: null;
}

export default last;