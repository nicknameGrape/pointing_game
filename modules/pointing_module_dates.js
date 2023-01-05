define(["fitText", "HatDraw"], function (fitText, HatDraw) {
	var NUMBERS = {
		"first": "1st",
		"second": "2nd",
		"third": "3rd",
		"fourth": "4th",
		"fifth": "5th",
		"sixth": "6th",
		"seventh": "7th",
		"eighth": "8th",
		"ninth": "9th",
		"tenth": "10th",
		"eleventh": "11th",
		"twelfth": "12th",
		"thirteenth": "13th",
		"fourteenth": "14th",
		"fifteenth": "15th",
		"sixteenth": "16th",
		"seventeenth": "17th",
		"eighteenth": "18th",
		"nineteenth": "19th",
		"twentieth": "20th",
		"twenty-first": "21st",
		"twenty-second": "22nd",
		"twenty-third": "23rd",
		"twenty-fourth": "24th",
		"twenty-fifth": "25th",
		"twenty-sixth": "26th",
		"twenty-seventh": "27th",
		"twenty-eighth": "28th",
		"twenty-ninth": "29th",
		"thirtieth": "30th",
		"thirty-first": "31st"
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
