'use strict';

let btn = document.querySelector(".button"),
	elem = document.querySelector(".blue-square");

function myAnimation() {
	let pos = 0;

	let idTimer = setInterval(frame, 10);

	function frame() {
		if (pos == 300) {
			clearInterval(idTimer);
		} else {
			pos++;
			elem.style.top = pos + "px";
			elem.style.left = pos + "px";
		}
	}
}


btn.addEventListener('click', myAnimation);

let brnBlock = document.querySelector(".btn-block"),
	btns = document.getElementsByTagName("button");

brnBlock.addEventListener('click', function(event) {
	// if(event.target && event.target.tagName == "BUTTON") {
	// if (event.target && event.target.classList.contains("first")) {
	if (event.target && event.target.matches("button.first")) {
		console.log("Hello!");
	}
});