define(["image_library/images", "HatDraw"], function (il, HatDraw) {
	var CATS = ["fruit", "vegetable", "color", "food", "drink", "sport", "animal"];
	var hints = [];
	CATS.forEach(function (w) {
		var filtered = il.filter(function (o) {
			return o.tags.includes(w);
		});
		var choice = filtered[Math.floor(Math.random()*filtered.length)];
		var img = loader.newImageAsset(choice.src);
		img.value = w;
		img.classList.add("choice");
		hints.push(img);
	});
	var module = {
		"hints": hints,
		"hd": new HatDraw(hints),
		//"columns": WORDS.length
		"columns": 7
	};
	return module;
});
