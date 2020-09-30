'use strict';

/* ТИПЫ ДАННЫХ */

// 1) Число
console.log(4 / 0); // Infinity
console.log("string" * 9); // NaN
let integer = 275;
let float = 3.14;

// 2) Строка
let string = "Строка"

// 3) Символ
let sym = Symbol();

// 4) Логический
let boolean = true

// 5) Нуль
null; // ссылка на несуществующую сущность
// console.log(something);

// 6) Неопределено
undefined; // сущность есть, но не имеет никакого пределенного значения
let something;
console.log(something);

// 7) Объект
let object = {}; // коллекция данных
let persone = {
  name: "Jhon",
  age: 25,
  isMarried: false
};

console.log(persone.name);
console.log(persone["age"]);

// Массив - частный случай объекта


// не всё можно запустить во встроенном выводе:
// alert("Hello world!");

let answer = confirm("Are you here?");
console.log(answer);

let answer2 = prompt("Are you 18 years old?", "Yes");
console.log(typeof(answer2));

console.log(typeof(null)); // object - официальная ошибка языка


/* ОПЕРАТОРЫ */

console.log("arr" + " - object");
console.log(4 + +"string"); // нематематическая операция - получили NaN

let incr = 10,
    decr = 10;
// префиксная форма возвращает уже изменённое значение:
console.log(++incr);
console.log(--decr);
incr = 10;
decr = 10;
// постфиксная форма сначала передаёт данные, а затем уже изменяет значение:
console.log(incr++);
console.log(decr--);

console.log(5 % 2);
console.log(5 / 2);

console.log("2" == 2); // true
console.log("2" === 2); // false

let isChecked = true,
    isClose = true;
console.log(isChecked && isClose); // true
console.log(isChecked || isClose); // true
isClose = false;
console.log(isChecked && isClose); // false
console.log(isChecked || isClose); // true
console.log(!isClose); // снова true ! - оператор отрицания
