// new RegExp('pattern', 'flags');
// or
// /pattern/flags;
// флаги:
// i - регистр
// g - глобальность (не только первое но и все остальные вхожления)
// m - многострочность
// классы:
// \d - цифры \D - не цифра
// \w - буквы \W - не буква
// \s - пробелы \S - не пробел

'use strict';

let ans = prompt("Введите ваше имя");
let reg = /n/ig;
console.log(reg.test(ans));  // true на найденное выражение

// console.log(ans.search(reg)); // метод search ищет только первое вхождение
console.log(ans.match(reg));  // теперь доступен глобальный поиск

let pass = prompt("Введите пароль:");
console.log(pass.replace(/./g, "*")); // . - любые символы
alert("12-34-56".replace(/-/g, ":"));

let num = prompt("Введите число:");
let reg2 = /\d/g;
console.log(num.match(reg2));

let str = "My name is $R2D2";
console.log(str.match(/\w\d\w\d/i));
console.log(str.match(/\$/i));
