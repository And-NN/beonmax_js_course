let app = {
	data: 45
};
console.log(app);


function User(name, age) {
	this.name = name;
	//this.age = age;
	let userAge = age;
	this.say = function() {
		console.log(`Имя пользователя ${this.name}, возраст ${userAge}`);
	}
	this.getAge = function() { // геттер
		return userAge;
	}
	this.setAge = function(age) { // сеттер
		if (typeof age === 'number' && age > 0 && age < 110) { // дополнительная проверка
			userAge = age;
		} else {
			console.log('Недопустимое значение');
		}
		
	}
}

let ivan = new User('Ivan', 25);
console.log(ivan.name);
// console.log(ivan.age);
console.log(ivan.userAge);
console.log(ivan.getAge());

ivan.name = 'Alex';
// ivan.age = 30;
ivan.userAge = 30;
ivan.setAge(30);

console.log(ivan.name);
console.log(ivan.age);
console.log(ivan.getAge());

ivan.say();
