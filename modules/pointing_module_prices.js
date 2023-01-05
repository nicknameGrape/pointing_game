define(["fitText", "HatDraw", "numberToWords.min"], function (fitText, HatDraw, n2w) {
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
	var module = {
		"hints": hints,
		"hd": new HatDraw(hints),
		"columns": 8
	};
	return module;
});
