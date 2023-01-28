define(["image_library/images", "HatDraw", "pointing_game/PointingGameModule"], function (il, HatDraw, PGM) {
	function setup() {
		var WORDS = ["pen", "pencil", "pencil case", "pencil sharpener", "notebook", "calendar", "stapler", "glue stick", "magnet", "marker", "ruler", "eraser"];
		var hints = [];
		WORDS.forEach(function (w) {
			var ilo = il.find(function (o) {
				return o.text === w && o.tags.includes("stationery");
			});
			var img = loader.newImageAsset(ilo.src);
			img.value = ilo.text;
			img.classList.add("choice");
			hints.push(img);
		});
		this.hints = hints;
		this.hd = new HatDraw(hints);
		this.columns = 6;
	}
	return new PGM(setup);
});
