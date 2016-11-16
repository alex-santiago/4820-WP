"use strict";
function dw(line){ return document.write(line+"<br />");}

(function() {

	// variable declaration
	let anArr = [1,2,3,4,5];

	anArr.forEach((x)=> dw(x));

	let secArr = [{name: "batman", age: 42}, {name: "martian manhunter", age: "?"}, {name: "supergirl", age: 23}];

	secArr.forEach((x) => dw(`${x.name} is ${x.age} years old.`));


})();
