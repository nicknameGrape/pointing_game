define(["fitText", "HatDraw"], function (fitText, HatDraw) {
	var NUMBERS = {
		"one": "1",
		"two": "2",
		"three": "3",
		"four": "4",
		"five": "5",
		"six": "6",
		"seven": "7",
		"eight": "8",
		"nine": "9",
		"ten": "10",
		"eleven": "11",
		"twelve": "12",
		"thirteen": "13",
		"fourteen": "14",
		"fifteen": "15",
		"sixteen": "16",
		"seventeen": "17",
		"eighteen": "18",
		"nineteen": "19",
		"twenty": "20"
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
		"columns": 10
	};
	return module;
});
