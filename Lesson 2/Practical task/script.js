'use strict';

let money = +prompt("Ваш бюджет на месяц?", "0");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2020-09-30");

let appData = {
  moneyData: money,
  timeData: time,
  expenses: {
    answer: costs
  },
  optionalExpenses: {},
  income: [],
  savings: false
};

var answer = prompt("Введите обязательную статью расходов в этом месяце: ", "");
var costs = +prompt("Во сколько обойдется? ", "0");

alert("Бюджет на один день: "+ (money - costs) / 30);
