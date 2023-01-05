define(["image_library/images", "HatDraw"], function (il, HatDraw) {
	var WORDS = ["pen", "pencil", "pencil case", "pencil sharpener", "notebook", "calendar", "stapler", "glue stick", "magnet", "marker", "ruler", "eraser"];
	var hints = [];
	WORDS.forEach(function (w) {
		var ilo = il.find(function (o) {
			return o.text === w && o.tags.includes("stationery");
		});
		console.log(w, ilo);
		var img = loader.newImageAsset(ilo.src);
		img.value = ilo.text;
		img.classList.add("choice");
		hints.push(img);
	});
	var module = {
		"hints": hints,
		"hd": new HatDraw(hints),
		//"columns": WORDS.length
		"columns": 6
	};
	return module;
});
