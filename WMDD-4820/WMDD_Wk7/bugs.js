var bug;
var bug2;

function setup() {
	createCanvas(800,200);
	background(204);
	// Create object pass in parameters
	bug = new JitterBug(width/2, height/2, 20);
	bug2 = new JitterBug(100, 100, 2);
}

function draw(){
	stroke(234, 134, 154);
	bug.move();
	bug.display();
	bug2.move();
	bug2.display();	
}

function JitterBug(tempX, tempY, tempDiameter) {
	this.x = tempX;
	this.y = tempY;
	this.diameter = tempDiameter;
	this.speed = 2.5;

	this.move = function() {
		this.x += random(-this.speed, this.speed);
		this.y += random(-this.speed, this.speed);
	}

	this.display = function() {
		ellipse(this.x, this.y, this.diameter, this.diameter);
	}
}
