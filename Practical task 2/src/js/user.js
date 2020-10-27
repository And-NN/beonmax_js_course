let age = document.getElementById('age');
// let user = {
// 	surname: "Petrov",
// 	name: "Ivan",
// 	value: age.defaultValue
// };

function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUser.apply(age, ["Petrov", "Ivan"]);
