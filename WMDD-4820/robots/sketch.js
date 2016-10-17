
// set the parameters for things that are static and don't change during the execution like the size of the canvas
function setup() {
	
	var canvasW = 640;
	var canvasH = 480;

	createCanvas(canvasW, canvasH);


}

function setCanvas(){
	background(106,106,106); // sets the color of the background;
	// Border
	strokeWeight(10);
	stroke(0, 0, 0);
	noFill();
	rect(0,0, 640,480);
	strokeWeight(1);
}

function coordinates() {
	textSize(32);
	fill(0,0,0);
	text("X: "+ mouseX, 700, 50);
	text("Y: "+ mouseY, 700, 100);
}

function draw() {
	setCanvas();
	// coordinates();
	robot01();
	robot02();
}

function head1() {
	fill(172,192,224);
	rect(130, 20, 55, 45, 20);
	fill(122, 37, 29);
	arc(148, 35, 10, 10, 2*PI, 2*PI);
	arc(167, 35, 10, 10, 2*PI, 2*PI);
	line(148, 50, 167, 50);
	line(148, 55, 167, 55);	
	line(148, 60, 167, 60);	
}

function body1(){
	// rect(130, 65, 55, 145, 20, 20, 5, 5);

	fill(94, 120, 160);
	beginShape();
		vertex(135, 65);
		vertex(180, 65);
		vertex(200, 213);
		vertex(115, 213);
	endShape(CLOSE);
}

function wheels1(){
	fill(165, 162, 162);
	beginShape();
		vertex(130,	214);
		vertex(140, 214);
		vertex(150, 234);
		vertex(120, 234);
	endShape(CLOSE);	
	beginShape();
		vertex(180,	214);
		vertex(190, 214);
		vertex(200, 234);
		vertex(170, 234);
	endShape(CLOSE);	
	fill(0,0,0);
	rect(124, 234, 20, 7, 0, 0, 3, 3);
	rect(174, 234, 20, 7, 0, 0, 3, 3);
}

function arms1(){
	strokeWeight(4);
	line(128, 100, 90, 135);
	line(185, 100, 230, 65);
	strokeWeight(1);
	arc(90, 135, 17, 17, 0, 2*PI, 2*PI);
	arc(230, 60, 17, 17, 0, PI+QUARTER_PI, PIE);
}

function robot01() {
	head1();
	body1();
	wheels1();
	arms1();
}

function head2() {
	fill(122, 37, 29);
	stroke(255, 255, 255);
	arc(348, 175, 10, 10, 2*PI, 2*PI);
	arc(367, 175, 10, 10, 2*PI, 2*PI);
	strokeWeight(3);
	line(348, 190, 367, 190);
	line(348, 195, 367, 195);	
	line(348, 200, 367, 200);	
	stroke(0);
	strokeWeight(1);
}

function body2(){
	fill(0, 0, 0);
	beginShape();
		vertex(335, 165);
		vertex(380, 165);
		vertex(400, 213);
		vertex(315, 213);
	endShape(CLOSE);
}

function wheels2(){
	fill(165, 162, 162);
	beginShape();
		vertex(355,	214);
		vertex(375, 234);
		vertex(345, 234);
		vertex(365, 214);
	endShape(CLOSE);	
	fill(229, 137, 80);
	rect(344, 234, 31, 7, 0, 0, 3, 3);
}


function robot02() {
	body2();
	head2();
	wheels2();
}

