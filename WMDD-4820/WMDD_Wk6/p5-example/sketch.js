
// set the parameters for things that are static and don't change during the execution like the size of the canvas
function setup() {
	
	var canvasW = 640;
	var canvasH = 480;
	var vR, vG, vB;

	vR = 16;
	vG = 40;
	vB = 12;

	createCanvas(canvasW, canvasH);
	background(200); // sets the color of the background;
	fill(vR, vG, vB);
	noStroke();
}

function draw() {
	var vR, vG, vB;

	vR = 16;
	vG = 40;
	vB = 12;

	ellipse(100, 100, 50, 50);
	ellipse(250, 100, 50, 50);
	ellipse(175, 150, 50, 50);
	arc(175, 200, 150, 150, 0, PI);
	fill(200);
	arc(175, 200, 50, 50, 0, PI);


	noFill();
	stroke(vR, vG, vB)
	rect(50,50, 250,250);



}