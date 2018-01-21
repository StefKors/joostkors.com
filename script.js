$(document).ready(function() {
	console.log('site built by Stef Kors');
	console.log('http://www.stefkors.com');

	$('.list_projects').click(function() {
		$(this).toggleClass('top');
		$('.arrow').toggleClass('img_flip');
	});

	var joost =
		'Joost Kors, aged 27, is a designer with an interest in concrete buildings, landscape art and unconventional spacitial planning. With a background in ceramics as building material Joost explores heritage and innovation. Now as a recent graduate, he is available for work.';

	var aho =
		'An exploration of material, with a hands-on approach. The result is a public environment discussing meaning of hearth, fire and place.';

	var nai =
		'How can we adapt climate design for a building with an unknown future. I propose a decentralized modular climate system.';

	var pavilion =
		'This building aims to spark the imagination for the possibilities in architecture, and function as a testbed for new facade systems developed by the university.';

	var transits =
		'Graphic work for an exhibition by Neil Forrest. Proud adventures of men trapped in ice are intersected with relics of Norwegian history.';

	var binckhorst =
		'Four weeks to produce a masterplan with 14 people! This urban challenge focusses on bottom-up strategies for large scale redevelopment.';

	var hybrid =
		'Exciting and innovative combinations in use are what hybrids are all about. Full of interesting social and spatial schemes, this building aims to develop a lively urban landscape.';

	changeimg('joost');

	$('h1').mouseover(function() {
		var this_one = this.id;
		// check if url is same as current url
		changeimg(this_one);
	});

	$(window).on('scroll', function() {
		scrollPosition = $(this).scrollTop();
		if (scrollPosition >= 50) {
			$('#back').addClass('fixed');
		} else {
			$('#back').removeClass('fixed');
		}
	});

	function changeimg(this_one) {
		if ($('.project_img').attr('src') != 'img/' + this_one + '.jpg') {
			// if not same change img
			// fadeout current image
			$('.project_img').fadeOut(200, function() {
				console.log(this);
				// fade in new image
				$('.project_img')
					.attr('src', 'img/' + this_one + '.jpg')
					.fadeIn(200);
			});

			// do same thing with the text
			$('.paragraph').fadeOut(200, function() {
				$('.paragraph')
					.html(eval(this_one))
					.fadeIn(200);
			});
		}
	}
});
