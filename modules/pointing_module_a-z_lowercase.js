define(["fitText", "HatDraw"], function (fitText, HatDraw) {
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
	var module = {
		"hints": hints,
		"hd": new HatDraw(hints),
		"columns": 7
	};
	return module;
});
