'use strict';

let money = +prompt("Ваш бюджет на месяц?", "0");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2020-09-30");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

var answer1 = prompt("Введите обязательную статью расходов в этом месяце: ", "");
var costs1 = +prompt("Во сколько обойдется? ", 0);
var answer2 = prompt("Введите обязательную статью расходов в этом месяце: ", "");
var costs2 = +prompt("Во сколько обойдется? ", 0);

appData.expenses.answer1 = costs1;
appData.expenses.answer2 = costs2;

alert("Бюджет на один день: " + appData.budget / 30);
