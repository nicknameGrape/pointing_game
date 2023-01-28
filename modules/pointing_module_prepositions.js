define(["Loader", "image_library/jobs/jobs", "HatDraw", "pointing_game/PointingGameModule"], function (Loader, jobs, HatDraw, PGM) {
	function setup() {
		var WORDS = ["on", "in", "under", "by"];
		var lloader = new Loader("./modules/img/");
		var hints = [];
		WORDS.forEach(function (w) {
			var img = lloader.newImageAsset("cat_" + w + ".png");
			img.value = w;
			img.classList.add("choice");
			hints.push(img);
		});
		this.hints = hints;
		this.hd = new HatDraw(hints);
		this.columns = WORDS.length;
	}
	return new PGM(setup);
});
