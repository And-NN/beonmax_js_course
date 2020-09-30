'use strict';

/* if (!2) {
  console.log("Верно")
} else {
  console.log("Неверно")
}; */

let num = 50;
while (num < 55) {
  console.log(num);
  num++;
}

do {
  console.log(num);
  num--
} while (num > 50)

for (let i = 1; i < 8; i++) {
  if (i == 6) {
    break; // выведет только до 5 включительно
  }
    console.log(i);
}

for (let i = 1; i < 8; i++) {
  if (i == 6) {
    continue; // не введет 6
  }
  console.log(i);
}
