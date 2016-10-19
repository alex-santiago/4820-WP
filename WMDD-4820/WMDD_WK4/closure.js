function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(2);
console.log(twice(5));

var trice = multiplier(3);
console.log(trice(6));

console.log();




function greetclient(name) {
	var hour = new Date().getHours();
	var daypart = "";

	// hour = 19;

	if ((hour >= 0) && (hour <=11)) {
		daypart = "mornnig";
	} else if ((hour >= 12) && (hour<=17)) {
			daypart = "evening";
			} else if ((hour >= 18) && (hour <= 23)) {
				daypart = "night";
			};
	return function() {
		return ("Have a nice " + daypart + " " + name);
	};
}

var g = greetclient("Alex");
console.log(g());


class greeter {

	constructor() {
		var hour = new Date().getHours();

		if ((hour >= 0) && (hour <=11)) {
			this.daypart = "mornnig";
		} else if ((hour >= 12) && (hour<=17)) {
				this.daypart = "evening";
				} else if ((hour >= 18) && (hour <= 23)) {
					this.daypart = "night";
				};		
	}	

	greet(name){
		return ("Have a nice " + this.daypart + " " + name);		
	};
}

var p = new greeter();
console.log(p.greet("Alex"));



