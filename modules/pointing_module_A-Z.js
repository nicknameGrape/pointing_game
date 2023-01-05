define(["fitText", "HatDraw"], function (fitText, HatDraw) {
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
	var module = {
		"hints": hints,
		"hd": new HatDraw(hints),
		"columns": 7
	};
	return module;
});
