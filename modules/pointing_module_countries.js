define(["Loader", "image_library/flags/flags", "HatDraw"], function (Loader, flags, HatDraw) {
	var WORDS = ["us", "br", "gb", "fr", "de", "it", "jp", "kr", "ch", "in", "cn", "au", "eg", "ke"];
	var cloader = new Loader("./image_library/flags/img/");
	var hints = [];
	//var entries = Object.entries(flags);
	WORDS.forEach(function (e) {
		var img = cloader.newImageAsset(e + ".png");
		img.value = flags[e];
		img.classList.add("choice");
		hints.push(img);
	});
	var module = {
		"hints": hints,
		"hd": new HatDraw(hints),
		"columns": 7
	};
	return module;
});
