
let inputRub = document.getElementById('rub'),
	inputUsd = document.getElementById('usd'),
	data = {};
	
	
function inputCurrency(currency) {
	return new Promise(
		function(reject) {
			currency.addEventListener('input', () => {
				let request = new XMLHttpRequest();
				request.open('GET', 'js/current.json');
				request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
				request.onreadystatechange = function () {
					if (request.readyState === 4 && request.status == 200) {
						data = JSON.parse(request.response);
						inputUsd.value = inputRub.value / data.usd;
					} else {
						reject();
					}
				}
				request.send();
			});
		}
	)
}

inputCurrency(inputRub)
	.catch(() => inputUsd.value = "Что-то пошло не так!")
