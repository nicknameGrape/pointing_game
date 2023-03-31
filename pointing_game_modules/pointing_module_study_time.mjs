import HatDraw from "../js_modules/HatDraw.mjs";
import PGM from "../PointingGameModule.mjs";
function setup(loader, lloader) {
	var TIMES = [
		{"text": "wake up time", "src": "wakeuptime.png"},
		{"text": "breakfast time", "src": "breakfasttime.png"},
		{"text": "study time", "src": "studytime.png"},
		{"text": "lunch time", "src": "lunchtime.png"},
		{"text": "snack time", "src": "snacktime.png"},
		{"text": "homework time", "src": "homeworktime.png"},
		{"text": "dinner time", "src": "dinnertime.png"},
		{"text": "bath time", "src": "bathtime.png"},
		{"text": "bed time", "src": "bedtime.png"},
		{"text": "dream time", "src": "dreamtime.png"}
	];
	var hints = [];
	TIMES.forEach(function (t) {
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
