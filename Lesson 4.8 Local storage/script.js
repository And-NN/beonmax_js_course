// localStorage приивязан к конкретному домену
// localStorage.setItem("number", 1);
// console.log(localStorage.getItem("number"));
// localStorage.removeItem("number");
// localStorage.clear();


document.addEventListener('DOMContentLoaded', function() {
	let checkbox = document.getElementById('rememberMe'),
		change = document.getElementById('change'),
		form = document.getElementsByTagName('form')[0];

	if (localStorage.getItem("isChecked") === "true") {
		checkbox.checked = true;
	}

	if (localStorage.getItem("br") === "changed") {
		form.style.backgroundColor = "#FF4766";
	}

	checkbox.addEventListener('click', function() {
		localStorage.setItem("isChecked", true);
	});

	change.addEventListener('click', function() {
		localStorage.setItem('br', 'changed');
		form.style.backgroundColor = "#FF4766";
	})

	let person = {
		name: "Alex",
		age: 25,
		tech: ["mobile", "notebook"]
	}

	let serialisedPerson = JSON.stringify(person);
	localStorage.setItem("Alex", serialisedPerson);
	console.log(JSON.parse(localStorage.getItem("Alex")));
});