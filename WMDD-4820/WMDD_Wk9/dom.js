//DOM example used in class
//
//change the color of the body background
function bgColor (color) {
  document.body.style.background = color
}

//change the height and color of a div
function styleDiv (height, color) {
  document.getElementById('div1').style.background = color
  document.getElementById('div1').style.height = height
}

//inster text into a p tag
function insertText (text) {
  document.getElementById('pt1').innerHTML = text
}

//add a li to a list
function addListItem (item) {
  let listItem = document.createElement('li')
  let textnode = document.createTextNode(item)
  listItem.appendChild(textnode)
  document.getElementById('list').appendChild(listItem)
}
