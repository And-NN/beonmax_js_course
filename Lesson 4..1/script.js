let options = {
	width: 1366,
	height: 768,
	background: 'red',
	font: {
		sze: '16px',
		color: 'white'
	}
};

console.log(JSON.stringify(options));
console.log(JSON.parse(JSON.stringify(options)));
