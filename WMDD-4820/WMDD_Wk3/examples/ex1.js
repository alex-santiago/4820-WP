//function declaration

function add(a, b){
  return a + b;
}

add(2, 3);

console.log(add(3, 4));

//function expression
var add2 = function(a, b){
  return a + b;
}

console.log(add2(5, 3));

var number = add(2, 3);

console.log(number);