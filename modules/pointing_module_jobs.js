define(["Loader", "image_library/jobs/jobs", "HatDraw", "pointing_game/PointingGameModule"], function (Loader, jobs, HatDraw, PGM) {
	function setup() {
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
		this.hints = hints;
		this.hd = new HatDraw(hints);
		this.columns = 5;
	}
	return new PGM(setup);
});
