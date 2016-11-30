
"use strict";
function dw(line){ return document.write(line+"<br />");}

(function() {

	// variable declaration
	let pTags = document.querySelectorAll("p");

	for(var i=0;i<pTags.length;i++)
		pTags[i].style.color = "red";

	let pTag = document.querySelector("[title=pOne]");
	pTag.style.backgroundColor = "black";

})();
