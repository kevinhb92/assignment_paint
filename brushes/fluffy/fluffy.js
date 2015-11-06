////////////////////////////////////////////////////////////////////
// fluffy.js
//
// fluffy tool: draws a fluffy random stroke
// author: Lee Hyeon Beom



////////////////////////////////////////////////////////////////////
// create and install brush

var fluffy = new Brush("fluffy", "./brushes/fluffy/fluffy.svg");
brushes.push(fluffy);


//verify the speed  distance = how fast it moved from Point to mouse X,Y
var speed = 1;
var Point = {
	x: 0,
	y: 0
};


////////////////////////////////////////////////////////////////////
// define brush behavior

fluffy.mouseDragged = function() {

	//decide the color for the brush
	stroke(red(forecolor), green(forecolor), blue(forecolor), 20);

	//give a style to the brush
	strokeCap(ROUND);

	//define speed
	speed = dist(Point.x, Point.y, mouseX, mouseY);

	//stroke weight(fluffiness) reacts to speed
	//if (speed < 1) {
	//	strokeWeight(speed * 0.01);
	//	} else {
	//		strokeWeight(speed * 0.1);
	//	}


	//draw a fluffy brush
	if (mouseIsPressed) {
		for (var i = 0; i < 150; i++) {
			line(pmouseX - random(-30, 30), pmouseY - random(-30, 30), mouseX, mouseY,
				50);
			line(pmouseX - random(-30, 30), pmouseY - random(-30, 30), mouseX, mouseY,
				50);
			line(pmouseX - random(-30, 30), pmouseY - random(-30, 30), mouseX, mouseY,
				50);


			Point = {
				x: mouseX,
				y: mouseY
			};
		}


		fluffy.mousePressed = function() {
			speed = 1;
			Point = {
				x: mouseX,
				y: mouseY
			};
		};
	}
};
