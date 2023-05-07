import HatDraw from "../js_modules/HatDraw.mjs";
import PGM from "../PointingGameModule.mjs";
function setup(loader, lloader) {
	var FEELINGS = [
		{"text": "happy", "src": "feelings_happy.png"},
		{"text": "hungry", "src": "feelings_hungry.png"},
		{"text": "sleepy", "src": "feelings_sleepy.png"},
		{"text": "sad", "src": "feelings_sad.png"},
		{"text": "tired", "src": "feelings_tired.png"},
		{"text": "fine", "src": "feelings_fine.png"}
	];
	var hints = [];
	FEELINGS.forEach(function (t) {
		var img = lloader.newImageAsset(t.src);
		img.value = t.text;
		img.classList.add("choice");
		hints.push(img);
	});
	this.hints = hints;
	this.hd = new HatDraw(hints);
	this.columns = 6;
}
export default new PGM(setup);
