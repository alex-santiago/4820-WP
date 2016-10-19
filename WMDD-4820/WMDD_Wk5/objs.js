"use strict";

function dw(line){ return document.write(line+"<br />");}

(function() {

	// variable declaration
	var a = {one: 1, two: 2};

	a.three = 3;

	dw(a.one);
	dw(a.two);
	dw(a.three);
	dw("");

	// var people = [
	// 				{name:"max", age:"20", job:"cop"},
	// 				{name:"tim", age:"25", job:"accountant"},
	// 				{name:"joe", age:"30", job:"bell boy"},
	// 			];

	var people = [];

	people.push({name:"max", age:"20", job:"cop"});
	people.push({name:"tim", age:"25", job:"accountant"});
	people.push({name:"joe", age:"30", job:"bell boy"});


	var newguy = {name:"marcus", age:"45", job:"gladiator"};

	people.push(newguy);

	for (var person in people) {
		for (var att in people[person]){
			dw(att+"="+people[person][att]);
		}
		dw("");
	}

	var marray = [];

	marray.push(1);

	dw(marray);

})();
