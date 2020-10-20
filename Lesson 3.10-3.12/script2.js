let fun = () => {
	console.log(this);
}

fun();

// функция анонимна
// нельзя навесить обработчики событий
// нельзя запустить функцию внутри себя (рекурсия)
// нет своего контекста вызова: внутри функий-стрелок тот же контекст, что и снаружи


let obj = {
	number: 5,
	sayNumber: function() {
		let say = () => {
			console.log(this); // нет контекста вызова - унаследован контекст родителя (объект obj)
		}
		say();
	}
}

obj.sayNumber();



let btn = document.querySelector('button');
btn.addEventListener('click', function() {
	let show = () => {
		console.log(this);
	}
	show();
})