'use strict';

let num = 20;

// function declaration:
function showFirstMessage(text) {
	alert(text);
	let num = 10;
	console.log(num);
}
showFirstMessage("Hello world!");
console.log(num);


console.log(calc(3, 4));
function calc(a, b) {
	return (a + b);
}


function retVar() {
	let num = 50;
	return num;
}
let anotherNum = retVar();
console.log (anotherNum);


//function expression
let calc2 = function(a, b) {
	return (a + b);
}
console.log(calc2(5, 6));


// arrow function
let calc3 = (a, b) => a + b;  // в {} для многостраничных выражений
console.log(calc3(7, 9));



/* Методы и свойства у строк и чисел */

let str = "test";
console.log(str.length);
console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());

let twelve = 12.2;
console.log(Math.round(twelve));

let width = "12.2px"
console.log(parseInt(width) + " и " + parseFloat(width));
