'use strict';

let arr = [1, 2, 3, 4, 5];
console.log(arr);

arr.pop(); // удаляем элемент с конца
console.log(arr);
arr.push("5"); // добавляем элемент (строку) в конец
console.log(arr);

arr.shift(); // удаляем элемент с начала
console.log(arr);
arr.unshift("1"); // добавляем элемент (строку) в начало
console.log(arr);


for(let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

let arr2 = [1, 2, 3, 4, 5];
arr2[99] = 99;
console.log(arr2);
console.log(arr2.length);


let arr3 = ["first", 2, 3, "four", 5];
arr3.forEach(function(item, i, mass) { // callback-функция
				console.log(i + ": " + item + " (массив: " + mass + ")");
			}
)


let mass = [1, 3, 4, 6, 7];
for (let key in mass) { // выведутся ключи
	console.log(key);
}
console.log("");
for (let key of mass) { // выведутся значения
	console.log(key);
}



let ans = prompt("", ""),
	ar1= [];
ar1 = ans.split(","); // разделитель элементов массива - запятая
console.log(ar1 + " это " + typeof (ar1)); // это object

let ar2 = ["12412", "dhq", "jad", "6r90786"],
	tmp = ar2.join(" ");
console.log(tmp + " это " + typeof (tmp)); //это string

let ar3 = [4, 9, 0, 22, -2];
tmp = ar3.sort(); // [ -2, 0, 22, 4, 9 ] - сортируются строки!
console.log(tmp);

// чтобы можно ыло сортировать числа правильно, надо передать функцию-калбэк в сорт:
function compareNum(a,b) {
	return a - b;
}
tmp = ar3.sort(compareNum);
console.log(tmp);

//еще короче с помощью стрелочной функции:
tmp = ar3.sort((a, b) => a - b);
console.log(tmp);
