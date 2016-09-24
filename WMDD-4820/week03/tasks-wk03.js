// Task 1

// Book Charpter 3 Exercises

// Exercise 1 - min

function min(arg1, arg2) {		// Declares a function called min that receives 2 arguments: arg1 and arg2
	if (arg1 <= arg2) 			// Checks if arg1 is less or equal then arg2
		return arg1;			// if arg1 is less or equal to arg2 returns arg1 as minimum
	else 
		return arg2;			// if not returns arg2 as minimum
};

// Exercise 2 - isEven

function isEven(value){				// Declares a function called isEven that receives a value as argument
	if (value===0){					// If the value equals zero it is even than it returns true
		return true;
	}
	else {
		if (value===1)				// If the value equals 1 it is odd than it returns false
			return false;
		else {
			return isEven(value-2); // Makes a recursive call to the fucntion subtracting 2 from value; Will execute until value equals 0 or 1;
        }
	};
};

// Exercise 3 - countBs

function countBs(str){				// Declares a function called countBs that receives a string as argument
	var count = 0;					// Initializes count with zero 

	for (i=0;i<str.length;i++){		// Loops the string until its end evaluating each char in position i
		if (str.charAt(i)==="B"){	// Compares if the character in the position i is equal to "B"
			count++;				// if the char is equal increments the counter
		}
	}
	return count;					// returns the counter value
}

function countChars(str, chr){		// Declares a function called countChars that receives a string as argument and a character 
	var count = 0;					// Initializes count with zero 

	for (i=0;i<str.length;i++){		// Loops the string until its end evaluating each char in position i
		if (str.charAt(i)===chr){	// Compares if the character in the position i is equal to the chr character argument
			count++;				// if the char is equal increments the counter
		}
	}
	return count;					// returns the counter value
}

function countBs2(str){				// Declares a modified function countsB that receives a string as an argument
	return countChars(str, "B");	// Calls the countChars function passing the string str and "B" as arguments returns the result
}

// EXECUTION
function main (){
	console.log("Exercise 1 - min"+"\n");
	console.log("Min 1 and 2: "+min(1,2)+"\n");
	console.log("Min 4 and 3: "+min(4,3)+"\n");
	console.log("Min 5 and 5: "+min(5,5)+"\n");
	console.log("Exercise 2 - isEven"+"\n");
	console.log("isEven 0: "+isEven(0)+"\n");
	console.log("isEven 1: "+isEven(1)+"\n");
	console.log("isEven 2: "+isEven(2)+"\n");
	console.log("isEven 3: "+isEven(3)+"\n");
	console.log("isEven 4: "+isEven(4)+"\n");
	console.log("Exercise 3 - countBs"+"\n");
	console.log("countBs ABCCBA: "+countBs("ABCCBA")+"\n");
	console.log("countBs DEF: "+countBs("DEF")+"\n");
	console.log("countBs abcCBA: "+countBs("abcCBA")+"\n");
	console.log("countChars ABCCBA: "+countChars("ABCCBA", "C")+"\n");
	console.log("countChars DEF: "+countChars("DEF", "C")+"\n");
	console.log("countChars abcCBA: "+countChars("abcCBA", "C")+"\n");
}

// Task 2

// javascript - Personal banking logic:

// You have an income of 1500 per month.
// You need to transfer 500 to an account that your rent comes out of.
// 	500 stays in your primary account for montly expenses,
// 	200 is transferred into one investment account,
// 	and the remaining 300 hundred to another account.

// Your program should make these trasnfers automatically when you get payed and keep track of the amount in all accounts.

// LOGIC:

		//when income is received:

		//reserves ammount due to rent
		//deducts 500 from income
		
		//reserves ammount due to montly expenses - adds the 500 to last saved balance of main account
		//deducts 500 from income
		
		//transfers 200 to investment account - adds the 200 to last saved balance of investment account
		//deducts 200 from income

		//transfers 300 to another account - adds the 300 to last saved balance of another account
		//deducts 300 from income

