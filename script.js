$(document).ready(function() {
	console.log('site built by Stef Kors');
	console.log('http://www.stefkors.com');

	$('.list_projects').click(function() {
		$(this).toggleClass('top');
		$('.arrow').toggleClass('img_flip');
	});

	var joost = 'Joost Kors, aged 27, is a designer with an interest in concrete buildings, landscape art and unconventional spacitial planning. With a background in ceramics as building material Joost explores heritage and innovation. Now as a recent graduate, he is available for work.';

	var binck = '';

	var binck = '';

	var aho = '';

	var hybrid = '';

	var nai = '';

	var expo = '';

	var dsm = '';

	$('h1').mouseover(function() {
		$('.project_img').attr("src", 'img/' + this.id + '.jpg');

		$('.paragraph').html(eval(this.id));
	}).mouseleave(function() {
		$('.project_img').attr("src", '');

		$('.paragraph').html('');
	});
});
