define(["image_library/images", "HatDraw"], function (il, HatDraw) {
	var WORDS = ["Japanese", "social studies", "math", "science", "music", "art", "home economics", "P.E.", "English", "calligraphy"];
	var hints = [];
	WORDS.forEach(function (w) {
		var ilo = il.find(function (o) {
			return o.text === w && o.tags.includes("subject");
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
		"columns": 5
	};
	return module;
});
