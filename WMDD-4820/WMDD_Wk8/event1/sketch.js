var x
var offset = 10

function setup() {
  createCanvas(400, 150)
  x = width/2
}

function draw() {
  background(100)
  stroke(180, 150, 120)
  if (mouseX > x) {
    x += 0.5
    offset = -10
  }

  if (mouseX < x){
    x -= 0.5
    offset = 10
  }
  line(x, 0, x, height)
  line(mouseX, mouseY, mouseX + offset, mouseY - 10)
  line(mouseX, mouseY, mouseX + offset, mouseY + 10)
  line(mouseX, mouseY, mouseX + offset * 3, mouseY)
}