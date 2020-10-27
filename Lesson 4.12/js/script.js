// создание модулей
// 1 метод

let number = 1;

(function() {
	let number = 2;
	console.log(number);
	return console.log(number + 3)
}()); // самовызываемая анонимная функция

console.log(number)


// 2 метод

let user = (function() {
	let privat = function() {
		console.log('I\'m private');
	};
	return {
		sayHello: function() {
			console.log('Hello!');
		}
	}
}());

console.log(user);
console.log(user.sayHello());


// 3 метод

let user = (function () {
	let privat = function () {
		console.log('I\'m private');
	};
	let sayHello = function () {
		console.log('Hello!');
}
	return {
		sayHello
	}
}());

console.log(user);
console.log(user.sayHello());