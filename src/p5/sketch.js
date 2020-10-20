/**
	* ABOUT THIS FILE
	* You can use this file to play with learning commands that are used for drawing in code .
	* Lines that begin with //, and appear grey are 'commented' out, this means that the line of code will not be executed.
	* This code is written using p5.js see https://p5js.org/
**/

const { transform } = require("async");

//the code inside these curly brackets runs once when you first load the sketch
function setup() {
	//this line creates the canvas and sets its width and height at 400px
	var canvas = createCanvas(400, 400);
	//this is not so important for you, just leave as it is!
	canvas.parent('sketch-holder');
}

// the code inside these curly brackets runs over and over again
function draw() {

	if (mouseIsPressed) {
		background(194, 0, 13);
		resetMatrix();
		translate(200, 200)
		angleMode(DEGREES);
		noStroke();


		const point_heights = [10, 12, 9, 12.5, 8.5, 10, 7, 11, 8, 12.5, 7.5]

		var scale = 35
		fill(color(245, 83, 20)) //red
		for (let i = 0; i < 11; i++) {
			translate(scale * 5)
			rotate((360 / 11))
			triangle(-2 * scale, 0, 2 * scale, 0, 0, scale * point_heights[i])
			translate(-scale * 5)

		}

		var scale = 22
		fill(color(252, 142, 38)) // orange
		for (let i = 0; i < 11; i++) {
			translate(scale * 5)
			rotate((360 / 11))
			triangle(-2 * scale, 0, 2 * scale, 0, 0, scale * point_heights[i])
			translate(-scale * 5)

		}

		var scale = 14
		fill(color(245, 223, 20))
		for (let i = 0; i < 11; i++){
			translate(scale*5)
			rotate( (360 / 11))
			triangle(-2*scale,0,2*scale,0,0,scale*point_heights[i])
			translate(-scale * 5)

		}

		var scale = 8
		fill(color(255))
		for (let i = 0; i < 11; i++) {
			translate(scale * 5)
			rotate((360 / 11))
			triangle(-2 * scale, 0, 2 * scale, 0, 0, scale * point_heights[i])
			translate(-scale * 5)

		}

	} else {
		background(219, 235, 218);
		resetMatrix();
		translate(0, 15);
		//main part of bomb
		noStroke();
		let from = color(155, 167, 189);
		let to = color(88, 98, 115);
		for (var i = 100; i >= 1; i--) {
			fill(lerpColor(from, to, i / 100))
			ellipse(200, 200, 1.5 * i, 1.5 * i);
		}

		translate(width / 2, height / 2);
		rotate(22.5);
		angleMode(DEGREES);
		
		//fuse
		fill(color(181, 135, 92))
		for (var i = 0; i < 35; i++) {
			ellipse(4-3*sin(i*360/40), -85-i, 10, 5)
		}
		
		// cylinder
		for (var i = 0; i < 30; i++){
			fill(lerpColor(to, from, i / 30))
			rect(-12.5+i, -85, 2, 15);
		}

		//spark
		rotate(-22.5);
		translate(52, -110);
		rotate(25)
		fill(color(245, 223, 20)) //yellow
		for (var i = 0; i < 5; i++) {
			rotate(-60);
			rect(0, 15, 5, 15);
			
		}
		
		rotate(-45)
		fill(color(252, 142, 38)) // orange
		for (var i = 0; i < 5; i++) {
			rotate(-60);
			rect(0, 8, 5, 15);

		}

		rotate(-90)
		fill(color(245, 83, 20)) //red
		for (var i = 0; i < 5; i++) {
			rotate(-60);
			rect(0, 12, 5, 15);

		}


	}

}
