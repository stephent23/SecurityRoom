var interval;

var counter = 3;

var images = [];
images[0] = "static/images/homeRotate/badminton.jpg";
images[1] = "static/images/homeRotate/ball.jpg";
images[2] = "static/images/homeRotate/beer.jpg";

function displayNextImage() {
	$("#homeImageRotate").fadeOut(function() { 
  		$(this).load(function() { $(this).fadeIn(); }); 
  		$(this).attr("src", images[counter]); 
	});
	clearInterval(displayNextImage);
	startTimer()
}

function startTimer() {
	if (counter < 2) {
		counter++;
	}
	else {
		clearInterval(interval);
		counter = 0;
		interval = setInterval(displayNextImage, 7000);
	}
	
}

