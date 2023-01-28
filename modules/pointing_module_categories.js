define(["image_library/images", "HatDraw", "pointing_game/PointingGameModule"], function (il, HatDraw, PGM) {
	function setup() {
		var CATS = ["fruit", "vegetable", "color", "food", "drink", "sport", "animal"];
		var hints = [];
		CATS.forEach(function (w) {
			var filtered = il.filter(function (o) {
				return o.tags.includes(w);
			});
			var choice = filtered[Math.floor(Math.random()*filtered.length)];
			var img = loader.newImageAsset(choice.src);
			img.value = w;
			img.classList.add("choice");
			hints.push(img);
		});
		this.hints = hints;
		this.hd = new HatDraw(hints);
		this.columns = 7;
	}
	return new PGM(setup);
});
