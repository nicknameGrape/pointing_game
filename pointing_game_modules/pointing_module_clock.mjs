import n2w from "../js_modules/numberToWords.min.js";
import fitText from "../js_modules/fitText.mjs";
import HatDraw from "../js_modules/HatDraw.mjs";
import PGM from "../PointingGameModule.mjs";
function setup() {
	var prices = [];
	for (var i=1; i<=12; i++) { //hour string
		for (var j=0; j<=11; j++) { //minutes string
			prices.push(i.toString().padStart(2, "0")+":"+(j*5).toString().padStart(2, "0"));
		}
	}
	var choices = [];
	while (choices.length < 16) {
		choices.push(prices.splice(Math.floor(Math.random()*prices.length), 1)[0]);
	}
	var sorted = choices.sort(function (a, b) {
		return a.localeCompare(b);
	});
	console.log(choices, sorted)
	var hints = [];
	sorted.forEach(function (c) {
		var hintCanvas = document.createElement("canvas");
		var hintContext = hintCanvas.getContext("2d");
		fitText(hintContext, c);
		let words = c.split(":")
		words = words.map(function (str) {
			let word = numberToWords.toWords(parseInt(str));
			if (word === "zero") {
				word = "o'clock";
			}
			return word;
		});
		if (words[1] === "five") {
			words[1] = "oh five";
		}
		console.log(words);
		hintCanvas.value = words.join(" ");
		hintCanvas.classList.add("choice");
		hints.push(hintCanvas);
	});
	this.hints = hints;
	this.hd = new HatDraw(hints);
	this.columns = 8;
}
export default new PGM(setup);
