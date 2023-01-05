define(["image_library/images", "HatDraw"], function (il, HatDraw) {
	var WORDS = ["tea", "fish", "rice", "hot dog", "pizza", "salad", "chicken", "french fries", "orange juice", "cheeseburger", "sandwich", "water", "steak", "soup", "green tea", "coffee", "spaghetti", "milk", "soda", "bread"];
	var hints = [];
	WORDS.forEach(function (w) {
		var ilo = il.find(function (o) {
			return o.text === w;
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
		"columns": 10
	};
	return module;
});
