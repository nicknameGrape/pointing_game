define(["Loader", "image_library/jobs/jobs", "HatDraw"], function (Loader, jobs, HatDraw) {
	var WORDS = ["on", "in", "under", "by"];
	var lloader = new Loader("./modules/img/");
	var hints = [];
	WORDS.forEach(function (w) {
		var img = lloader.newImageAsset("cat_" + w + ".png");
		img.value = w;
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
