'use strict';

let soldier = {
	health: 400,
	armor: 200
};

jhon = {
	health: 100
};

jhon.__proto__ = soldier;

console.log(jhon);
console.log(jhon.armor);
