// window.addEventListener('load'); // ждать полной загрузки страницы и только потом выполнять скрипт
window.addEventListener('DOMContentLoaded', function () { // ждать только загрузки структуры DOM

	'use strict';

	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function (event) {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});

	// Timer
	let deadline = '2020-11-01';
	// let deadline = '2020-10-10';

	function getTimeReminding(endtime) {
		let tmp = Date.parse(endtime) - Date.parse(new Date());
		if (tmp <= 0) {
			return {
				'total': 0,
				'hours': 0,
				'minutes': 0,
				'seconds': 0
			}
		}

		let seconds = Math.floor((tmp / 1000) % 60),
			minutes = Math.floor((tmp / 100 / 60) % 60),
			hours = Math.floor((tmp / (1000 * 60 * 60)));
		// hours = Math.floor((tmp / 1000 / 60 / 60) % 24),
		// days = Math.floor(tmp / (1000 * 60 * 60 * 24));
		return {
			'total': tmp,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		}
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let tmp = getTimeReminding(endtime);

			if (tmp.hours == 0) {
				hours.textContent = tmp.hours + '0';
			} else {
				hours.textContent = tmp.hours;
			}
			if (tmp.minutes == 0) {
				minutes.textContent = tmp.minutes + '0';
			} else {
				minutes.textContent = tmp.minutes;
			}
			if (tmp.seconds == 0) {
				seconds.textContent = tmp.seconds + '0';
			} else {
				seconds.textContent = tmp.seconds;
			}

			if (tmp.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setClock('timer', deadline);


	// Modal

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');

	more.addEventListener('click', function () {
		overlay.style.display = 'block';
		this.classList.add('more-splash');
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', function () {
		overlay.style.display = 'none';
		close.classList.remove('more-splash');
		document.body.style.overflow = '';
	});


	// Form

	let message = {
		loading: 'Загрузка...',
		success: 'Спасибо, скоро мы с вами свяжемся!',
		failure: 'Что-то пошло не так...'
	}

	let form = document.querySelector('.main-form'),
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div');
	statusMessage.classList.add('status');

	form.addEventListener('submit', function (event) { //обработчик события на форме а не на кнопке отправки!
		event.preventDefault();
		form.appendChild(statusMessage); // при событии submit

		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');
		request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

		let formData = new FormData(form);
		request.send(formData);

		request.addEventListener('readystatechange', function () {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4 && request.status === 200) {
				statusMessage.innerHTML = message.success;
			} else {
				statusMessage.innerHTML = message.failure;
			}
		});

		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		}

	});


	//Slider

	let slideIndex = 1, // параметр текущего слайда
		slides = document.querySelectorAll('.slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.querySelectorAll('.dot');

	function showSlides(n) { // номер слайда
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}
		slides.forEach((item) => item.style.display = 'none');
		// for (let i = 0; i < slides.length; i++) { // старый стиль записи
		// 	slides[i].style.display = 'none';
		// }
		dots.forEach((item) => item.classList.remove('dot-active'));
		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
	}

	showSlides(slideIndex);

	function plusSlides(n) { // увеличивает/уменьшает slideIndex в зависимости от того, в какуб сторону листаем слайды
		showSlides(slideIndex += n);
	}

	function currentSlide(n) { // для показа слайда при клике на соотв. точку
		showSlides(slideIndex = n);
	}

	prev.addEventListener('click', function () {
		plusSlides(-1);
	});

	next.addEventListener('click', function () {
		plusSlides(1);
	});

	dotsWrap.addEventListener('click', function () {
		for (let i = 0; i < dots.length + 1; i++) {
			if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
				currentSlide(i);
			}
		}
	});


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

});

