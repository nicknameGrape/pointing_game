define(["image_library/images", "HatDraw", "drawShapes", "pointing_game/PointingGameModule"], function (il, HatDraw, draw, PGM) {
	function setup() {
		var SHAPES = {
			"circle": [{"x":25,"y":50},{"x":75,"y":50}],
			"ellipse": [{"x":0,"y":50},{"x":50,"y":25},{"x":100,"y":50}],
			"rectangle": [{"x":0,"y":25},{"x":100,"y":25},{"x":100,"y":75}],
			"triangle": [{"x":0,"y":90},{"x":50,"y":10},{"x":100,"y":90}],
			"square": [{"x":25,"y":25},{"x":75,"y":75}],
			"heart": [{"x":50,"y":25},{"x":50,"y":75}],
			"star": [{"x":50,"y":0},{"x":50,"y":75}],
			"diamond": [{"x":50,"y":0},{"x":50,"y":100}]
		};
		var COLORS = {
			"black": "black",
			"white": "white",
			"gray": "gray",
			"red": "red",
			"pink": "hotpink",
			"orange": "orange",
			"yellow": "gold",
			"purple": "purple",
			"blue": "blue",
			"light blue": "deepskyblue",
			"brown": "sienna",
			"light brown": "tan",
			"green": "forestgreen",
			"light green": "chartreuse"
		};
		var hdShapes = new HatDraw(Object.entries(SHAPES));
		var hdColors = new HatDraw(Object.entries(COLORS));
		var hints = [];
		while (hints.length < 18) {
			var canvas = document.createElement("canvas");
			var context = canvas.getContext("2d");
			var shape = hdShapes.drawOne();
			var color = hdColors.drawOne();
			canvas.width = 100; canvas.height = 100;
			context.fillStyle = color[1];
			draw[shape[0]](context, ...shape[1])
			//context.fillRect(0, 0, 100, 100);
			canvas.classList.add("choice");
			canvas.value = color[0] + " " + shape[0];
			hints.push(canvas);
		}
		this.hints = hints;
		this.hd = new HatDraw(hints);
		this.columns = 9;
	}
	return new PGM(setup);
});
