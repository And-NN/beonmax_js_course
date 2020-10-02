let menu = document.getElementsByClassName("menu")[0],
	menuItem = document.getElementsByClassName("menu-item"),
	menuItemLi = document.createElement("li"),
	title = document.getElementById("title"),
	adv = document.getElementsByClassName("adv")[0],
	interview_place = document.querySelector("#prompt");

console.log(menu);
console.log(menuItem);
console.log(menuItemLi);
console.log(title);
console.log(adv);
console.log(interview_place);

menu.insertBefore(menuItem[2], menuItem[1]);	// Поменяли местами два элемента
menuItemLi.classList.add("menu-item");			// Добавляем новый li, с классом и текстом
menuItemLi.textContent = "Пятый элемент";
menu.appendChild(menuItemLi);

document.body.style.backgroundImage = 'url("img/apple_true.jpg")';	// Меняем фон

title.textContent = "Мы продаем только подлинную технику Apple"    // Заменить текст

adv.remove();		// Удалить рекламу со страницы

let answer = prompt("Ваше отношение к технике Apple?");   // Отношение к технике Apple
interview_place.textContent = answer;
