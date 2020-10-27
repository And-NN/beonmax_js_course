require('es6-promise').polyfill();
require('nodelist-foreach-polyfill');
require('formdata-polyfill');

// window.addEventListener('load'); // ждать полной загрузки страницы и только потом выполнять скрипт
window.addEventListener('DOMContentLoaded', function () { // ждать только загрузки структуры DOM

	'use strict';

	let calc = require('./parts/calc'),
		form = require('./parts/form'),
		modal = require('./parts/modal'),
		slider = require('./parts/slider'),
		tabs = require('./parts/tabs'),
		timer = require('./parts/timer');

	calc();
	form();
	modal();
	slider();
	tabs();
	timer();

});

