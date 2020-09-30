'use strict';

/* if (!2) {
  console.log("Верно")
} else {
  console.log("Неверно")
}; */


num = 50;
if (num < 49) {
  console.log("Мало!")
} else if (num > 100) {
    console.log("Много!")
} else {
    console.log("Верно!")
};

num = 23;
// тернарный оператор:
(num == 50) ? console.log("Верно!"): console.log("Неверно!");

num = 50;
switch (num) {
  case num < 49: 
    console.log("Мало!");
    break;
  case num > 100:
    console.log("Много!");
    break;
  case num > 80:
    console.log("Неверно!");
    break;
  case 50:
    console.log("Верно!"); // сработает
    break;
  default:
    console.log("Что-то пошло не так!");
    break;
}