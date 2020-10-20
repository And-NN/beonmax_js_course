function makeArray() {
	var items = [];

	for (var i = 0; i < 10; i++) { // если объявить var i = 0 то переменная будет создана только один раз 
		var item = function() {
			console.log(i);
		};
		items.push(item);
	}
	return items;
}

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();
