"use strict";

(function() {

	// TASK 1
	// variable declaration
	var t;

	t = "This a test for the command"

	// console.log
    console.log(t + "-console.log");
    // document.write
    document.write("TASK1: <br>" + t + "-document.write"+ "\n"+"<br>");
    // alert
    alert(t + "-alert"+ "\n"+"<br>");


    // TASK 2
    //variable declaration
    var n1;
    var n2;

    n1 = 5;
    n2 = 4;

    // sum 
    document.write("TASK2:<br>");
    document.write("Sum example: " + n1 + " + " + n2 + "<br>");
    document.write("Equals:");
    document.write(n1 + n2);
    document.write("<br>");

    // multiplication 
    document.write("Multiplication example: " + n1 + " * " + n2 + "<br>");
    document.write("Equals:" + n1 * n2);
    document.write("<br>");

    // modulus
    alert("Modulus example: " + n1 + " + " + n2);
    alert("Equals:" + n1 % n2);

})();
