$(document).ready(function() {
	console.log('site built by Stef Kors');
	console.log('http://www.stefkors.com');

	$('.list_projects').click(function() {
		$(this).toggleClass('top');
		$('.arrow').toggleClass('img_flip');
	});

	var joost = 'Joost Kors, aged 27, is a designer with an interest in concrete buildings, landscape art and unconventional spacitial planning. With a background in ceramics as building material Joost explores heritage and innovation. Now as a recent graduate, he is available for work.';

	var aho = 'The Fake News Data Sprint is pleased to have Jayson Harsin (The ... teaching, design and participation formats for the creation and use of';

	var nai = 'Dance is a performing art form consisting of purposefully selected sequences of human movement. This movement has aesthetic and symbolic value, and is acknowledged as dance by performers and observers within a particular culture. ';

	var pavilion = 'Dance is a performing art form consisting of purposefully selected sequences of human movement. This movement has aesthetic and symbolic value, and is acknowledged as dance by performers and observers within a particular culture. ';

	var transits = 'The potato is a starchy, tuberous crop from the perennial nightshade Solanum tuberosum. The word "potato" may refer either to the plant itself or to the edible tuber.';

	var binckhorst = 'Dance Dance Revolution, abbreviated DDR and also known as Dancing Stage in earlier games in Europe and Australasia, and some other games in Japan, is a music video game series produced by Konami.';

	var hybrid = 'Maize, also known as corn, is a large grain plant first domesticated by indigenous peoples in southern Mexico about 10,000 years ago.';

	var dsm = 'Mar hoe zit het noow mae de twedde vörm die zö duk vurkumt ien het Rivierengebied? Volgens t Rheinisches Wörterbuch kumt pieper van de ';

	changeimg('joost');

	$('h1').mouseover(function() {
		var this_one = this.id;
		// check if url is same as current url
		changeimg(this_one);
	});

	$(window).on('scroll', function() {
		scrollPosition = $(this).scrollTop();
		if (scrollPosition >= 50) {
			$("#back").addClass('fixed');
		} else {
			$("#back").removeClass('fixed');
		}
	});

	function changeimg(this_one) {
		if ($('.project_img').attr("src") != 'img/' + this_one + '.jpg') {
			// if not same change img
			// fadeout current image
			$('.project_img').fadeOut(200, function() {
				console.log(this);
				// fade in new image
				$('.project_img').attr("src", 'img/' + this_one + '.jpg').fadeIn(200);
			});

			// do same thing with the text
			$('.paragraph').fadeOut(200, function() {
				$('.paragraph').html(eval(this_one)).fadeIn(200);
			});
		}
	}
});
