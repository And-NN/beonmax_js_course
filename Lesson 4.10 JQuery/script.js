$(document).ready(function() {
	$('.list-item:first').hover(function () { // :first - первая кнопка
		$(this).toggleClass('active');
	});
	$('.list-item:eq(2)').on('click', function () { // :eq(2) - третья кнопка
		$('.image:even').fadeToggle('slow'); // :even - четная картинка
	});
	$('.list-item:eq(4)').on('click', function () { // :eq(4) - пятая кнопка
		$('.image:odd').animate(  // :odd - нечетная картинка
			{
				opacity: 'toggle',
				height: 'toggle'
			}, 3000
		);
	})
});