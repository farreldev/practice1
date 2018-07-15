let mobile = [
	{ nama: 'Brio', merk: 'Honda' },
	{ nama: 'Expander', merk: 'Toyota' },
	{ nama: 'Rush', merk: 'Toyota' },
	{ nama: 'Ertiga', merk: 'Suzuki' },
	{ nama: 'Panther', merk: 'Suzuki' },
	{ nama: 'Vios', merk: 'Toyota' },
	{ nama: 'Agya', merk: 'Toyota' },
	{ nama: 'BRV', merk: 'Honda' },
	{ nama: 'Freed', merk: 'Honda' },
	{ nama: 'Avanza', merk: 'Toyota' },
	{ nama: 'Xenia', merk: 'Daihatsu' },
	{ nama: 'All New Sirion', merk: 'Daihatsu' }
];

let app = document.querySelector('#app'),
	pil = document.querySelector('#pil'),
	makeUl = document.createElement('UL'),
	list = app.appendChild(makeUl);

let fnPil = mobile.map(c => `<option>${c.merk}</option>`);

// use this function to trim array if use es5
// if you use es6 use 'Set Object' Ex: * Array.from(new Set(dirtyArray)) *

let trimArr = arrays => {
	// With Reduce
	// return arrays.reduce((x, y) => (x.includes(y) ? x : [...x, y]), []);

	// With Filter
	return arrays.filter((el, i, a) => a.indexOf(el) === i);
};

// function trimArr(arr) {
// 	let idx = [];
// 	arr.forEach((i, j) => {
// 		if (idx.indexOf(arr[j]) === -1) {
// 			idx.push(arr[j]);
// 		}
// 	});
// 	return idx;
// }

let fnFilter = (merk = 'Suzuki') => {
	return mobile
		.filter(x => x.merk === merk)
		.map(n => `<li>Name Car ${n.nama} Brand ${n.merk}`)
		.join('');
};

// pil.innerHTML = Array.from(new Set(fnPil));
pil.innerHTML = trimArr(fnPil);

pil.addEventListener('change', function(e) {
	let car = e.target.value;
	list.innerHTML = fnFilter(car);
});

list.innerHTML = fnFilter();
// console.log(fnPil)
