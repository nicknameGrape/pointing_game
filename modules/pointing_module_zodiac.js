define(["image_library/images", "HatDraw", "pointing_game/PointingGameModule"], function (il, HatDraw, PGM) {
	function setup() {
		var WORDS = ["ox", "tiger", "rabbit", "dragon", "snake", "horse", "sheep", "monkey", "rooster", "dog", "boar"];
		var RAT = {"src": "rat.png", "value": "rat"};
		var hints = [];
		var rat =lloader.newImageAsset(RAT.src)
		rat.value = RAT.value;
		rat.classList.add("choice");
		hints.push(rat);
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
		this.columns = 6;
	}
	return new PGM(setup);
});
