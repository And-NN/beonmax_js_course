'use strict';

function first() {
	// working
	setTimeout( function() {
					console.log(1);
				}, 
				500
	);
}

function second() {
	console.log(2);
}


first();
second();

// вывод:
// 2
// 1

// делаем вывод в нужной последовательности:
function learnJS(lang, callback_func) {
	console.log("Я учу " + lang);
	callback_func();
}

function done() {
	console.log("Я прошел 3-й урок");
}

learnJS("Java Script", done);