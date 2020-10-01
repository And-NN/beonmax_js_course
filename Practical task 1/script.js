'use strict';

let money = +prompt("Ваш бюджет на месяц?", "0");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2020-10-01");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

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

appData.moneyPerDay = appData.budget / 30;
if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}
alert("Ежедневный бюджет: " + appData.moneyPerDay);
