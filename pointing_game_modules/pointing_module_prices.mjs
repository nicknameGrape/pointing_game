import n2w from "../js_modules/numberToWords.min.js";
import fitText from "../js_modules/fitText.mjs";
import HatDraw from "../js_modules/HatDraw.mjs";
import PGM from "../PointingGameModule.mjs";
function setup() {
	var prices = [];
	for (var i=0; i<=9; i++) {
		for (var j=0; j<=9; j++) {
			prices.push(i*100+j*10);
		}
	}
	var choices = [];
	while (choices.length < 16) {
		choices.push(prices.splice(Math.floor(Math.random()*prices.length), 1)[0]);
	}
	var sorted = choices.sort(function (a, b) {
		return a-b;
	});
	var hints = [];
	sorted.forEach(function (c) {
		var hintCanvas = document.createElement("canvas");
		var hintContext = hintCanvas.getContext("2d");
		fitText(hintContext, "¥" + c);
		hintCanvas.value = numberToWords.toWords(c) + " yen";
		hintCanvas.classList.add("choice");
		hints.push(hintCanvas);
	});
	this.hints = hints;
	this.hd = new HatDraw(hints);
	this.columns = 8;
}
export default new PGM(setup);
