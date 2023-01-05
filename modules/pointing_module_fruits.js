define(["image_library/images", "HatDraw"], function (il, HatDraw) {
	var WORDS = ["apple", "peach", "orange", "grapes", "banana", "pineapple", "lemon", "melon", "watermelon", "cherry", "kiwi", "strawberry"];
	var hints = [];
	WORDS.forEach(function (w) {
		var ilo = il.find(function (o) {
			return o.text === w && o.tags.includes("fruit");
		});
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
