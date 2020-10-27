function calc() {
	// Calc

	let persons = document.querySelectorAll('.counter-block-input')[0],
		restDays = document.querySelectorAll('.counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;

	totalValue.innerHTML = 0;
	// или totalValue.textContent = 0;
	persons.addEventListener('change', function () {
		personsSum = +this.value;
		if (daysSum != 0 && personsSum != 0) {
			total = (daysSum + personsSum) * 4000; // 4000 - стоимость одного дня для одного человека
		} else total = 0;
		if (restDays.value == '') {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
		}
	});

	restDays.addEventListener('change', function () {
		daysSum = +this.value;
		if (daysSum != 0 && personsSum != 0) {
			total = (daysSum + personsSum) * 4000; // 4000 - стоимость одного дня для одного человека
		} else total = 0;
		if (persons.value == '') {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
		}
	});

	place.addEventListener('change', function () {
		if (restDays.value == '' || persons.value == '') {
			total = 0;
			totalValue.innerHTML = 0;
		} else {
			let tmp = total;
			totalValue.innerHTML = tmp * this.options[this.selectedIndex].value; // выбор базы
		}
	});
}

module.exports = calc;
