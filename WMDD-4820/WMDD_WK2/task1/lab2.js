"use strict";


(function() {
	document.write("LAB 2");

	// lab exercise 1
	for (var x = 0; x < 3; x++) {
		if (x === 0){
			console.log('part one');
		} else if (x === 1) {
				console.log('part two');
				} else if (x === 2) {
					console.log('part three');
		};
	};

	// lab exercise 2
	// generates a random number for age
	var age = Math.floor(Math.random() * 100); // returns the largest integer less than or equal to a given number

	// test the age to vote and write the result
	console.log('AGE:'+age);
	if (age > 18) {
		console.log('Old enough');
	} else {
		console.log('Too young');
	};

	// lab exercise 3
	// Count to 10
	var i = 0;
	while (i<=10){
		console.log('count of '+i);
		i += 1;
	}

	// Count odds and evens to 20
	var i = 0;
	while (i<=20){
		if (i % 2 === 0 ){
			console.log(i + ' is even');
		} else {
			console.log(i + ' is odd');
		}
		i += 1;
	}

	// Multiply by 9
	var i = 0;
	while (i<=10){
		console.log(i + ' * 9 = ' + (i*9));
		i += 1;
	}

})();