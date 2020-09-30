'use strict';

// alert("Hello world!");

console.log(leftBorderWidth);  // объявлена но не определена
var leftBorderWidth = 1;
console.log(leftBorderWidth);

{
  let second = 2;
}
console.log(second); // за пределами видимости

const pi = 3.14;
