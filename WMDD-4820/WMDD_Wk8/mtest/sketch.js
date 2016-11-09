var x = 120
var y = 60
var rad = 12

function setup() {
  createCanvas(240, 120)
  ellipseMode(RADIUS)
}

function draw() {
  background(200)
  var d = dist(mouseX, mouseY, x, y)
  if (d < rad) {
    rad++
    fill(20)
  } else {
    fill(200)
    rad = 12
  }
  ellipse(x, y, rad, rad)
}