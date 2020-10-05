'use strict';

start_btn = document.getElementById("start");

budget_value = document.getElementsByClassName("budget-value")[0];
daybudget_value = document.getElementsByClassName("daybudget-value")[0];
level_value = document.getElementsByClassName("level-value")[0];
expenses_value = document.getElementsByClassName("expenses-value"))[0];
optionalexpenses_value = document.getElementsByClassName("optionalexpenses-value")[0];
income_value = document.getElementsByClassName("income-value")[0];
monthsavings_value = document.getElementsByClassName("monthsavings-value")[0];
yearsavings_value = document.getElementsByClassName("yearsavings-value")[0];

expenses_item_input = document.getElementsByClassName("expenses-item");

expenses_item_btn = document.getElementsByTagName("button")[0];
optionalexpenses_btn = document.getElementsByTagName("button")[1];
count_budget_btn = document.getElementsByTagName("button")[2];

for (i = 1; i < document.getElementsByClassName("optionalexpenses-item").length + 1; i++) {
	optionalexpenses_item = document.querySelectorAll(`#optionalexpenses_${i}`);
}

choose_income = document.querySelectorAll("#income");
checksavings = document.querySelectorAll("#savings");
choose_sum = document.querySelectorAll("#sum");
choose_percent = document.querySelectorAll("#percent");

year_value = document.querySelectorAll(".year-value");
month_value = document.querySelectorAll(".month-value");
day_value = document.querySelectorAll(".day-value");
