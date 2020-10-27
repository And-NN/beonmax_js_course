function slider() {
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
}

module.exports = slider;
