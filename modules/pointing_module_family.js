define(["image_library/images", "HatDraw"], function (il, HatDraw) {
	var WORDS = ["grandmother", "grandfather", "mother", "father", "sister", "brother", "baby"];
	var hints = [];
	WORDS.forEach(function (w) {
		var ilo = il.find(function (o) {
			return o.text === w;
		});
		var img = loader.newImageAsset(ilo.src);
		img.value = ilo.text;
		img.classList.add("choice");
		hints.push(img);
	});
	var module = {
		"hints": hints,
		"hd": new HatDraw(hints),
		"columns": WORDS.length
	};
	return module;
});
