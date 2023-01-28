define(["image_library/images", "HatDraw", "pointing_game/PointingGameModule"], function (il, HatDraw, PGM) {
	function setup() {
		var ADJECTIVES = [
			{"text": "square", "src": "adj_g3_square.png"},
			{"text": "white", "src": "adj_g3_white.png"},
			{"text": "round", "src": "adj_g3_round.png"},
			{"text": "furry", "src": "adj_g3_furry.png"},
			{"text": "red", "src": "adj_g3_red.png"},
			{"text": "scary", "src": "adj_g3_scary.png"},
			{"text": "shiny", "src": "adj_g3_shiny.png"},
			{"text": "small", "src": "adj_g3_small.png"},
			{"text": "black", "src": "adj_g3_black.png"},
			{"text": "long", "src": "adj_g3_long.png"}
		];
		var hints = [];
		ADJECTIVES.forEach(function (t) {
			var img = lloader.newImageAsset(t.src);
			img.value = t.text;
			img.classList.add("choice");
			hints.push(img);
		});
		this.hints = hints;
		this.hd = new HatDraw(hints);
		this.columns = 5;
	}
	return new PGM(setup);
});
