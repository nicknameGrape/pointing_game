import fitText from "../js_modules/fitText.mjs";
import HatDraw from "../js_modules/HatDraw.mjs";
import PGM from "../PointingGameModule.mjs";
function setup() {
	var NUMBERS = {
		"A": "A",
		"B": "B",
		"C": "C",
		"D": "D",
		"E": "E",
		"F": "F",
		"G": "G",
		"H": "H",
		"I": "I",
		"J": "J",
		"K": "K",
		"L": "L",
		"M": "M",
		"N": "N",
		"O": "O",
		"P": "P",
		"Q": "Q",
		"R": "R",
		"S": "S",
		"T": "T",
		"U": "U",
		"V": "V",
		"W": "W",
		"X": "X",
		"Y": "Y",
		"Z": "Z"
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
