define(["image_library/images", "HatDraw", "pointing_game/PointingGameModule"], function (il, HatDraw, PGM) {
	function setup() {
		var WORDS = ["tea", "fish", "rice", "hot dog", "pizza", "salad", "chicken", "french fries", "orange juice", "cheeseburger", "sandwich", "water", "steak", "soup", "green tea", "coffee", "spaghetti", "milk", "soda", "bread"];
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
		this.columns = 10;
	}
	return new PGM(setup);
});
