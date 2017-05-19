$(document).ready(function() {
	console.log('site built by Stef Kors');
	console.log('http://www.stefkors.com');

	$('.list_projects').click(function() {
		$(this).toggleClass('top');
		$('.arrow').toggleClass('img_flip');
	});

});
