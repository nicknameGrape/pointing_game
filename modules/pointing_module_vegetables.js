define(["image_library/images", "HatDraw"], function (il, HatDraw) {
	var WORDS = ["onion", "mushroom", "green pepper", "tomato", "potato", "cucumber", "cabbage", "carrot", "corn", "broccoli"];
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
		"columns": 5
	};
	return module;
});
