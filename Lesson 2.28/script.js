'use strict';

window.addEventListener('DOMContentLoaded', function() {
	let box = document.querySelector(".box");
	
	box.addEventListener('touchstart', function(event) {
		event.preventDefault();
		console.log("Red box: touchstart");
		console.log(event.target);
		console.log(event.touches); // все пальцы, прикоснувшиеся к сенсору
		console.log(event.touches[0].target);
		console.log(event.changedTouches); // список пальцев
		console.log(event.targetTouches); // тап на зарегистрированном объекте
	});

	box.addEventListener('touchmove', function (event) {
		event.preventDefault();
		console.log("Red box: touchmove: " + event.touches[0].pageX);
	});

	box.addEventListener('touchend', function (event) {
		event.preventDefault();
		console.log("Red box: touchend");
	});
});