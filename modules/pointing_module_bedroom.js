define(["image_library/images", "HatDraw", "pointing_game/PointingGameModule"], function (il, HatDraw, PGM) {
	function setup() {
		var WORDS = ["chair", "desk", "table", "bed", "box", "ball", "pencil", "watch", "bat", "glove", "cap", "pen", "book", "ruler"];
		var hints = [];
		WORDS.forEach(function (w) {
			var ilo = il.find(function (o) {
				return o.text === w;
			});
			var img = loader.newImageAsset(ilo.src);
			img.value = ilo.text;
			img.classList.add("choice");
			hints.push(img);
		});
		this.hints = hints;
		this.hd = new HatDraw(hints);
		this.columns = 7;
	}
	return new PGM(setup);
});
