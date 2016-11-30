function bgColor (color) {
  document.body.style.background = color
}

function styleDiv (height, color) {
  document.getElementById('div1').style.background = color
  document.getElementById('div1').style.height = height
}

function insertText (text) {
  document.getElementById('pt1').innerHTML = text
}

function addListItem (item) {
  let listItem = document.createElement('li')
  let textnode = document.createTextNode(item)
  listItem.appendChild(textnode)
  document.getElementById('list').appendChild(listItem)
}

///////////////////////////////////////////////
function makeGreen () {
  document.getElementById('color').style.color = 'green'
}

function makeRed () {
  document.getElementById('color').style.color = 'red'
}

function makeBlack () {
  document.getElementById('color').style.color = '#000'
}

document.getElementById('color').addEventListener('click', makeGreen)
document.getElementById('color').addEventListener('mouseover', makeRed)
document.getElementById('color').addEventListener('mouseout', makeBlack)