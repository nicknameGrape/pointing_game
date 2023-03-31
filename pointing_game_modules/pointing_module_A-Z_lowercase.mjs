import fitText from "../js_modules/fitText.mjs";
import HatDraw from "../js_modules/HatDraw.mjs";
import PGM from "../PointingGameModule.mjs";
function setup() {
	var NUMBERS = {
		"a": "A",
		"b": "B",
		"c": "C",
		"d": "D",
		"e": "E",
		"f": "F",
		"g": "G",
		"h": "H",
		"i": "I",
		"j": "J",
		"k": "K",
		"l": "L",
		"m": "M",
		"n": "N",
		"o": "O",
		"p": "P",
		"q": "Q",
		"r": "R",
		"s": "S",
		"t": "T",
		"u": "U",
		"v": "V",
		"w": "W",
		"x": "X",
		"y": "Y",
		"z": "Z"
	};
	var hints = [];
	Object.entries(NUMBERS).forEach(function (e) {
		var hintCanvas = document.createElement("canvas");
		var hintContext = hintCanvas.getContext("2d");
		fitText(hintContext, e[1]);
		hintCanvas.value = e[0];
		hintCanvas.classList.add("choice");
		hints.push(hintCanvas);
	});
	this.hints = hints;
	this.hd = new HatDraw(hints);
	this.columns = 7;
}
export default new PGM(setup);
