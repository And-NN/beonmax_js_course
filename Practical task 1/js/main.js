//'use strict';

let money, time;

let startBtn = document.getElementById("start"), // кнопка "Начать расчёт"
	budgetValue = document.getElementsByClassName("budget-value")[0],
	daybudgetValue = document.getElementsByClassName("daybudget-value")[0],
	levelValue = document.getElementsByClassName("level-value")[0],
	expensesValue = document.getElementsByClassName("expenses-value")[0],
	optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
	incomeValue = document.getElementsByClassName("income-value")[0],
	monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
	yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

	expensesItemInput = document.getElementsByClassName("expenses-item"),
	expensesBtn = document.getElementsByClassName('expenses-item-btn')[0],  // 1 кнопка "Утвердить"

	expensesItemBtn = document.getElementsByTagName("button")[0],
	optionalexpensesBtn = document.getElementsByTagName("button")[1], // 2 кнопка "Утвердить";
	countBudgetBtn = document.getElementsByTagName("button")[2],
	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

	chooseIncome = document.querySelector("#income"),
	checkSavings = document.querySelector("#savings"),
	sumValue = document.querySelector("#sum"),
	percentValue = document.querySelector("#percent"),

	yearValue = document.querySelector(".year-value"),
	monthValue = document.querySelector(".month-value"),
	dayValue = document.querySelector(".day-value");


startBtn.addEventListener('click', function() {
	money = +prompt("Ваш бюджет на месяц?", "0");
	time = prompt("Введите дату в формате YYYY-MM-DD", "2020-10-06");
	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", "0");
	}
	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed(2);
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function() {
	let sum = 0; // пойдёт в обязательные расходы
	for (let i = 0; i < expensesItemInput.length; i++) {
		let name = expensesItemInput[i].value, // левая колонка
			costs = expensesItemInput[++i].value; // правая колонка
		if (typeof (name) === "string" && typeof (name) != null && typeof (costs) != null
			&& name != "" && costs != "" && name.length < 50) {
			console.log("done");
			appData.expenses[name] = costs;
			sum += +costs;
		} else {
			i--;
		}
	}
	expensesValue.textContent = sum;
});

optionalexpensesBtn.addEventListener('click', function() {
	for (let i = 0; i < optionalExpensesItem.length; i++) {
		let costs = optionalExpensesItem[i].value;
		appData.optionalExpenses[i] = costs;
			optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
	}
});

countBudgetBtn.addEventListener('click', function() {
	if (appData.budget != undefined) {
		appData.moneyPerDay = (appData.budget / 30).toFixed(2);
		daybudgetValue.textContent = appData.moneyPerDay;
		if (appData.moneyPerDay < 100) {
		} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
			levelValue.textContent = "Минимальный уровень достатка";
			levelValue.textContent = "Средний уровень достатка";
		} else if (appData.moneyPerDay > 2000) {
			levelValue.textContent = "Высокий уровень достатка";
		} else {
			levelValue.textContent = "Произошла ошибка";
		}
	} else {
		daybudgetValue.textContent = "Произошла ошибка";
	}
	
});

chooseIncome.addEventListener('input' /*'change'*/, function() {
	let items = chooseIncome.value;
	appData.income = items.split(", ");
	incomeValue.textContent = appData.income;
})

checkSavings.addEventListener('click', function() {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

sumValue.addEventListener('input', function() {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;
		appData.monthIncome = sum / 100 / 12 * percent; // Накопления за 1 месяц
		appData.yearIncome = sum / 100 * percent; // Накопления за 1 год
		monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
	}
});

percentValue.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;
		appData.monthIncome = sum / 100 / 12 * percent; // Накопления за 1 месяц
		appData.yearIncome = sum / 100 * percent; // Накопления за 1 год
		monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
	}
});


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
	savings: false
};

console.log("Наша программа включает в себя данные:\n");
for(let obj in appData) {
	// console.log(obj + ": " + appData[obj]);
	console.log(obj);
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