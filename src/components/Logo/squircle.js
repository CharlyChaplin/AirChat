function updateSuperellipse() {
	const generateSuperellipsePath = (a, b, n, points = 100) => {
		let path = '';
		for (let i = 0; i <= points; i++) {
			const theta = (Math.PI * 2 * i) / points;
			const x = Math.pow(Math.abs(Math.cos(theta)), 2 / n) * a * Math.sign(Math.cos(theta));
			const y = Math.pow(Math.abs(Math.sin(theta)), 2 / n) * b * Math.sign(Math.sin(theta));
			if (i === 0) {
				path += `M ${x + a} ${y + b} `;
			} else {
				path += `L ${x + a} ${y + b} `;
			}
		}
		path += 'Z';
		return path;
	}

	const svg = document.querySelector('.logo a > svg');
	if (!svg) return;
	const container = svg.parentElement;
	const width = container.clientWidth;
	const height = container.clientHeight;
	const minDimension = Math.min(width, height);
	const a = minDimension / 2;
	const b = minDimension / 2;
	const n = 6; // параметр суперэллипса, который определяет его форму
	const pathData = generateSuperellipsePath(a, b, n);

	svg.setAttribute('viewBox', `0 0 ${minDimension} ${minDimension}`);
	svg.innerHTML = `<path d="${pathData}" />`;


}

function initSquircle() {
	for (let evt of ['resise', 'load']) {
		window.addEventListener(evt, updateSuperellipse);
	}
}


initSquircle();