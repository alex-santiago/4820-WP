//closures

var counter = 0;
function cherries(){
  counter++;
  return counter;
}

function limes(){
  counter++;
  return counter;
}

function fruit0(){
  var counter = 0;
  counter++;
  return counter;
}


function fruit1(){
  var counter = 0;
  return function(){
    counter += 1;
    return counter;
  }
}

//our final fruit counter which can be used to count any fruit
function fruitCounter(fruit) {
  var count = 0;
  return function(){
    count += 1;
    return count + ' ' + fruit;
  }
}