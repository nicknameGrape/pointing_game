define(["image_library/images", "HatDraw"], function (il, HatDraw) {
	var WORDS = ["ox", "tiger", "rabbit", "dragon", "snake", "horse", "sheep", "monkey", "rooster", "dog", "boar"];
	var RAT = {"src": "rat.png", "value": "rat"};
	var hints = [];
	var rat =lloader.newImageAsset(RAT.src)
	rat.value = RAT.value;
	rat.classList.add("choice");
	hints.push(rat);
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
		"columns": WORDS.length + 1
	};
	return module;
});
