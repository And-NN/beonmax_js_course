function CalcOrDouble(number, basis=2) {
	// basis = basis || 2; // старая недокументрованная проверка на существование второго аргумента (ES5)
	console.log(number * basis);
}

CalcOrDouble(3, 5);
CalcOrDouble(6);
