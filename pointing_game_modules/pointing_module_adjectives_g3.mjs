import HatDraw from "../js_modules/HatDraw.mjs";
import PGM from "../PointingGameModule.mjs";
function setup(loader, lloader) {
	var ADJECTIVES = [
		{"text": "square cow", "src": "adj_g3_square.png"},
		{"text": "white rabbit", "src": "adj_g3_white.png"},
		{"text": "round boar nose", "src": "adj_g3_round.png"},
		{"text": "furry sheep", "src": "adj_g3_furry.png"},
		{"text": "red chicken comb", "src": "adj_g3_red.png"},
		{"text": "scary tiger", "src": "adj_g3_scary.png"},
		{"text": "shiny horse teeth", "src": "adj_g3_shiny.png"},
		{"text": "small mouse", "src": "adj_g3_small.png"},
		{"text": "black monkey eyes", "src": "adj_g3_black.png"},
		{"text": "long snake", "src": "adj_g3_long.png"}
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
export default new PGM(setup);
