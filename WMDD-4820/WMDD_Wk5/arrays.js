"use strict";

function dw(line){ return document.write(line+"<br />");}

(function() {

	// variable declaration
	var myArray = [1,2,3];

	dw(myArray);

	myArray.pop();

	dw(myArray);

	myArray.push(3);

	dw(myArray);

	// splice (index, number of elements to remove, elements to add)

	myArray.push(23);

	dw(myArray);

	myArray.splice(0,0,23);

	dw(myArray);

	myArray.splice(0,1);

	dw(myArray);

	myArray.splice(myArray.length-1, 1);

	dw(myArray.join('@'));



})();
