




let t = 0;
let epicycles;
const coords = [];
let record = []

function setup() {
	createCanvas(600, 600)

	for (let i = 0; i < 50; ++i) coords.push([0, i])
	for (let i = 0; i < 50; ++i) coords.push([i, 50])
	for (let i = 0; i < 50; ++i) coords.push([50, 50 - i])
	for (let i = 0; i < 50; ++i) coords.push([50 - i, 0])


	epicycles = dft(coords)
}


function draw() {
	background(40)
	stroke(100);
	translate(300, 300)

	let pastPos = [0, 0]

	for (const epicycle of epicycles) {

		const freq = epicycle.frequency
		const radius = epicycle.amplitude
		const phase = epicycle.phase + PI / 2

		const x = pastPos[0] + radius * cos(freq * t + phase)
		const y = pastPos[1] + radius * sin(freq * t + phase)

		noFill();
		ellipse(pastPos[0], pastPos[1], radius * 2)
		fill(255);
		ellipse(x, y, 10)
		pastPos = [x, y]

	}

	record.push(pastPos)
	for (const coord of record) {
		ellipse(coord[0], coord[1], 5)
	}
	t += 2 * PI / epicycles.length
}

function dft(coords) {
	// coords.pop()
	let dataX = coords.map(n => n[0]);
	let dataY = coords.map(n => n[1]);
	fft(dataX, dataY)
	console.log(dataX, dataY)
	// let epicycles = []

	// const N = coords.length;

	// for (let k = 0; k < N; ++k) {

	// 	let real = 0;
	// 	let imag = 0;

	// 	for (let n = 0; n < N; ++n) {
	// 		const angle = 2 * PI * k * n / N
	// 		const [r, i] = complex.multiply(coords[n][0], coords[n][1], cos(angle), -sin(angle))
	// 		real += r
	// 		imag += i
	// 	}
	// 	real /= N
	// 	imag /= N

	// 	epicycles[k] = {
	// 		frequency: k,
	// 		amplitude: sqrt(real * real + imag * imag),
	// 		phase: atan2(imag, real),
	// 	}
	// }
	// return epicycles
}

function fft(x, y)
{
	const n = x.length;
	
	let i, j, k, n1, n2, a;
	let c, s, e, t1, t2;


	// Bit-reverse
	j = 0;
	n2 = n / 2;
	for (i = 1; i < n - 1; i++) {
		n1 = n2;
		while (j >= n1) {
			j = j - n1;
			n1 = n1 / 2;
		}
		j = j + n1;

		if (i < j) {
			t1 = x[i];
			x[i] = x[j];
			x[j] = t1;
			t1 = y[i];
			y[i] = y[j];
			y[j] = t1;
		}
	}

	// FFT
	n1 = 0;
	n2 = 1;

	for (i = 0; i < m; i++) {
		n1 = n2;
		n2 = n2 + n2;
		a = 0;

		for (j = 0; j < n1; j++) {
			c = cos[a];
			s = sin[a];
			a += 1 << (m - i - 1);

			for (k = j; k < n; k = k + n2) {
				t1 = c * x[k + n1] - s * y[k + n1];
				t2 = s * x[k + n1] + c * y[k + n1];
				x[k + n1] = x[k] - t1;
				y[k + n1] = y[k] - t2;
				x[k] = x[k] + t1;
				y[k] = y[k] + t2;
			}
		}
	}
}

const complex = {
	add: (a, b) => [a[0] + b[0], a[1] + b[1]],
	subtract: (a, b) => [a[0] - b[0], a[1] - b[1]],
	multiply: (a, b) => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]],
	magnitude: (v) => Math.sqrt(c[0] * c[0] + c[1] * c[1]),
}
