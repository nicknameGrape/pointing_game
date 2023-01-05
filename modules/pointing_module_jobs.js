define(["Loader", "image_library/jobs/jobs", "HatDraw"], function (Loader, jobs, HatDraw) {
	var WORDS = ["illustrator", "designer", "baseball player", "basketball player", "teacher", "soccer player", "doctor", "police officer", "florist", "game creator"];
	var jloader = new Loader("./image_library/jobs/img/");
	var hints = [];
	var entries = Object.entries(jobs);
	entries.forEach(function (e) {
		var img = jloader.newImageAsset(e[1]);
		img.value = e[0];
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
