function form() {
	// Form

	let message = {
		loading: 'Загрузка...',
		success: 'Спасибо, скоро мы с вами свяжемся!',
		failure: 'Что-то пошло не так...'
	}

	let form = document.querySelector('.main-form'),
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div');
	statusMessage.classList.add('status');

	form.addEventListener('submit', function (event) { //обработчик события на форме а не на кнопке отправки!
		event.preventDefault();
		form.appendChild(statusMessage); // при событии submit

		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');
		request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

		let formData = new FormData(form);
		request.send(formData);

		request.addEventListener('readystatechange', function () {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4 && request.status === 200) {
				statusMessage.innerHTML = message.success;
			} else {
				statusMessage.innerHTML = message.failure;
			}
		});

		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		}

	});
}

module.exports = form;
