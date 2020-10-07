let box = document.querySelector('.box'),
	btn = document.querySelector('button');

let width = box.clientWidth,
	height = box.clientHeight;

// let width = box.offsetWidth,
// 	height = box.offsetHeight;

// let width = box.scrollWidth,
// 	height = box.scrollHeight;

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().left);

console.log(document.documentElement.clientWidth); // ширина документа
console.log(document.documentElement.clientHeight); // высота документа
console.log(document.documentElement.scrollTop); // сколько проскролена страница
// можно вернуться в начало по document.documentElement.scrollTop = 0;

btn.addEventListener('click', function() {
	// box.style.height = box.scrollHeight + "px";
	// console.log(box.scrollTop);
	box.scrollTop = 0;
});

scrollBy(0, 200); // Прокручивает документ на указанные величины.
scrollTo(0, 200); // Прокрутка документа до указанных координат.