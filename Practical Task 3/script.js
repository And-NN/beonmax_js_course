$(document).ready(function () {

	$('.main_btna').on('click', function() {
		$('.overlay').animate(
			{
				opacity:'show'
			}, 1500
		);
		$('.modal').animate(
			{
				opacity: 'show',
				height: 'show'
			}, 1500
		);
	});

	$('.main_btn').on('click', function() {
		$('.overlay').animate(
			{
				opacity: 'show'
			}, 1500
		);
		$('.modal').animate(
			{
				opacity: 'show',
				height: 'show'
			}, 1500
		);
	});

	$('.close').on('click', function() {
		$('.overlay').animate(
			{
				opacity: 'hide'
			}, 1500
		);
		$('.modal').animate(
			{
				opacity: 'hide',
				height: 'hide'
			}, 1500
		);
	});


});