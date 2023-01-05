define(["image_library/images", "HatDraw"], function (il, HatDraw) {
	var WORDS = ["red", "pink", "yellow", "purple", "blue", "black", "white", "orange", "brown", "green"];//, "light blue", "silver", "gold", 
	var hints = [];
	WORDS.forEach(function (w) {
		var ilo = il.find(function (o) {
			return o.text === w && o.tags.includes("color");
		});
		var img = loader.newImageAsset(ilo.src);
		img.value = ilo.text;
		img.classList.add("choice");
		hints.push(img);
	});
	var module = {
		"hints": hints,
		"hd": new HatDraw(hints),
		"columns": 5
	};
	return module;
});
