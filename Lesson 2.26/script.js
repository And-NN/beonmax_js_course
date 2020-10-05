'use strict';

// Второй способ обратобать событие
let btn = document.getElementsByTagName("button");
btn[1].onclick = function() {
	alert("Вы нажали вторую кнопку");
}

// Третий и более универсальный способ обратобать событие
btn[2].addEventListener('click', function() {
	alert("Вы нажали третью кнопку");
});

btn[3].addEventListener('mouseenter', function(){
	alert("Вы навели на четвертую кнопку");
});

btn[4].onclick = function (event) {
	console.log(event);
	let target = event.target;
	console.log("Произошло событие: " + event.type + " на элементе " + event.target);
	target.style.display = "none";
}

// Всплытие событий: от потомка к родителю и выше:
let wrap = document.querySelector('.wrapper');
wrap.addEventListener('click', function(){
	console.log("Произошло событие: " + event.type + " на элементе " + event.target);
});


let link = document.querySelector('p');
link.addEventListener('click', function(event) {
	event.preventDefault(); // Отменяем стандартное поведение браузера, чтобы увидеть консоль лог
	console.log("Произошло событие: " + event.type + " на элементе " + event.target);
});


let buttons = document.querySelectorAll("button");
buttons.forEach(function(item) {
	item.addEventListener('mouseleave', function() {
		console.log("Вышли");
	});
	
});