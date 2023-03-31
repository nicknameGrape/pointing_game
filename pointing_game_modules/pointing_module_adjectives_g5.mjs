import HatDraw from "../js_modules/HatDraw.mjs";
import PGM from "../PointingGameModule.mjs";
function setup(loader, lloader) {
	var ADJECTIVES = [
		{"text": "big", "src": "adjective_g5_big.png"},
		{"text": "fast", "src": "adjective_g5_fast.png"},
		{"text": "hot", "src": "adjective_g5_hot.png"},
		{"text": "light", "src": "adjective_g5_light.png"},
		{"text": "new", "src": "adjective_g5_new.png"},
		{"text": "old", "src": "adjective_g5_old.png"},
		{"text": "slow", "src": "adjective_g5_slow.png"},
		{"text": "cold", "src": "adjective_g5_cold.png"},
		{"text": "hard", "src": "adjective_g5_hard.png"},
		{"text": "heavy", "src": "adjective_g5_heavy.png"},
		{"text": "long", "src": "adjective_g5_long.png"},
		{"text": "short", "src": "adjective_g5_short.png"},
		{"text": "small", "src": "adjective_g5_small.png"},
		{"text": "soft", "src": "adjective_g5_soft.png"}
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
	this.columns = 7;
}
export default new PGM(setup);
