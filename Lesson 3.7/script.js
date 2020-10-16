'use strict';

function showThis(a, b) {
	console.log(this);
	function sum() {
		console.log(this);
		return a + b; // замыкание
	}
	console.log(sum());
}
showThis(4, 5);
showThis(5, 5);

let obj = {
	a: 20,
	b: 15,
	sum: function() {
		console.log(this);
	}
}
obj.sum();



let user = {
	name: "Jhon"
};

function sayName(surname) {
	console.log(this);
	console.log(this.name + " " + surname);
}
console.log(sayName.call(user, 'Do')); // первый аргумент call становится её this, а остальные передаются «как есть».
console.log(sayName.apply(user, ['Smith', 'Snow'])); // метод позволяет передать МАССИВ параметров


function count(number) {
	return this * number;
}
let double = count.bind(2) // двойка заменит this в контексте вызова
console.log(double(3)); // передаётся number
console.log(double(10));


let btn = document.querySelector('button');
btn.addEventListener('click', function() {
	console.log(this);  // контекст вызова - сам элемент
	this.style.backgroundColor = 'red'
});