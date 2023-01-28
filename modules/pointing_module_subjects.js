define(["image_library/images", "HatDraw", "pointing_game/PointingGameModule"], function (il, HatDraw, PGM) {
	function setup() {
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
		this.hints = hints;
		this.hd = new HatDraw(hints);
		this.columns = 5;
	}
	return new PGM(setup);
});
