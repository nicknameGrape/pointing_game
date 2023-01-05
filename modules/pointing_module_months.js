define(["image_library/images", "HatDraw"], function (il, HatDraw) {
	var MONTHS = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];
	var hints = [];
	MONTHS.forEach(function (m) {
		var ilo = il.find(function (o) {
			return o.text === m && o.tags.includes("month");
		});
		var img = loader.newImageAsset(ilo.src);
		img.value = ilo.text;
		img.classList.add("choice");
		hints.push(img);
	});
	var module = {
		"hints": hints,
		"hd": new HatDraw(hints),
		//"columns": MONTHS.length
		"columns": 6
	};
	return module;
});
