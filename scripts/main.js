$(document).ready(function() {

	// do some stuff

	var wiggle = function() {

		// every half second (500ms), toggle the wiggle class
		setInterval(function() {

			// target the t-shirt images
			$('.tshirt').toggleClass('wiggle');

		}, 500);
	}

	wiggle();

});