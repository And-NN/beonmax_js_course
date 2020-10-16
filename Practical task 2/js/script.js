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

	info.addEventListener('click', function(event) {
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

		let	seconds = Math.floor((tmp / 1000) % 60),
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

	more.addEventListener('click', function() {
		overlay.style.display = 'block';
		this.classList.add('more-splash');
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', function() {
		overlay.style.display = 'none';
		close.classList.remove('more-splash');
		document.body.style.overflow = '';
	});
});

