'use strict';

// setTimeout(func, delay)

function sayHello1() {
	alert("Hello world!");
}

let timerId1 = setTimeout(sayHello1, 3000); // 3 sec
// clearTimeout(timerId1); // отменяем таймаут


function sayHello() {
	console.log("Hello world!");
}

let timerId = setInterval(sayHello, 3000);

let timerId2 = setTimeout(function log() {
	console.log("Hello!");
	setTimeout(log, 2000);
});

