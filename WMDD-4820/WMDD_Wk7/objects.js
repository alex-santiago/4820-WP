"use strict";
function dw(line){ return document.write(line+"<br />");}

(function() {

	// variable declaration
	var dialtone = new Song('dialtone', 'Plaid', 'The Digging Remedy');
	var henderson = new Song('Henderson Wrench', 'Clark', 'Iradelphic');
	var sw = new Movie('Star Wars', 'George Lucas', '5');

	dw(dialtone.band);
    dw(henderson.album);
    dw(sw.title);
    dw(sw.director);
    dw(sw.rating);

    function Song (title, band, album) {
    	this.title = title;
    	this.band = band;
    	this.album = album;
    }

    function Movie (title, director, rating) {
    	this.title = title;
    	this.director = director;
    	this.rating = rating;
    }


})();
