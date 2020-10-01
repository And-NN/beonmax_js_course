'use strict';

let money, time;

function start(){
	money = +prompt("Ваш бюджет на месяц?", "0");
	time = prompt("Введите дату в формате YYYY-MM-DD", "2020-10-01");
	while(isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", "0");
	}
}

start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function choseExpenses() {
	for (let i = 0; i < 2; i++) {
		let answer = prompt(`Введите обязательную статью расходов ${i + 1} в этом месяце: `, ""),
			costs = +prompt("Во сколько обойдется? ", 0);
		if (typeof (answer) === "string" && typeof (answer) != null && typeof (costs) != null
			&& answer != "" && costs != "" && answer.length < 50) {
			console.log("done");
			appData.expenses[answer] = costs;
		} else {
			i--;
		}
	} 
}

choseExpenses();



function chooseOptExpenses() {
	for (let i = 1; i < 4; i++) {
		let costs = +prompt(`Статья необязательных расходов ${i}?`, 0);
		if (typeof (costs) === "string" && typeof (costs) != null && costs != "") {
			console.log("done");
			appData.optionalExpenses[i] = costs;
		} else {
			i--;
		}
	}
}


/*let i = 0;
do {
  let answer = prompt(`Введите обязательную статью расходов ${i+1} в этом месяце: `, ""),
    costs = +prompt("Во сколько обойдется? ", 0);
  if (typeof (answer) === "string" && typeof (answer) != null && typeof (costs) != null &&
    answer != "" && costs != "" && answer.length < 50) {
    console.log("done");
    appData.expenses[answer] = costs;
  } else {
    i--;
  }
  i++
} while (i < 2)

while (i < 2) {
  let answer = prompt(`Введите обязательную статью расходов ${i+1} в этом месяце: `, ""),
    costs = +prompt("Во сколько обойдется? ", 0);
  if (typeof (answer) === "string" && typeof (answer) != null && typeof (costs) != null &&
    answer != "" && costs != "" && answer.length < 50) {
    console.log("done");
    appData.expenses[answer] = costs;
  } else {
    i--;
  }
  i++
} do*/


appData.moneyPerDay = +(appData.budget / 30).toFixed(2);


function detectLevel() {
	if (appData.moneyPerDay < 100) {
		console.log("Минимальный уровень достатка");
	} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
		console.log("Средний уровень достатка");
	} else if (appData.moneyPerDay > 2000) {
		console.log("Высокий уровень достатка");
	} else {
		console.log("Произошла ошибка");
	}
}


alert("Ежедневный бюджет: " + appData.moneyPerDay);


function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма накоплений?", ""),
			percent = +prompt("Под какой процент?", "");
			appData.monthIncome = save / 100 / 12 * percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome.toFixed(2));
	}
}

checkSavings();


function detectDayBudget() {
	return (appData.moneyPerDay - appData.expenses[1] / 30 - appData.expenses[2] / 30 + appData.monthIncome / 30).toFixed(2);
}

alert("Ваш ежедневный бюджет с учётом трат и накоплений: " + detectDayBudget());