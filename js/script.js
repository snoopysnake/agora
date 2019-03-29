$('.button').on('click',function() {
	console.log('Added to cart.');
	$('.button-text').toggleClass('button-text-animate');
	$('.button-text').toggleClass('button-text-after');
	$('.button-text').toggleClass('button-text-current');
	$('.button-text').html('ADDED!');
	window.setTimeout(function() {
		if ($('.button-text-current').text() == 'ADDED!') {
			console.log('change');
			$('.button-text-current').html('ADD TO CART');
		}
	}, 3000);
});