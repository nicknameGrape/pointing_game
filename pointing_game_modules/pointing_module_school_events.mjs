import HatDraw from "../js_modules/HatDraw.mjs";
import PGM from "../PointingGameModule.mjs";
function setup(loader, lloader) {
	var EVENTS = [
		{"text": "entrance ceremony", "src": "entrance_ceremony.png"},
		{"text": "sports day", "src": "sports_day.png"},
		{"text": "summer camp", "src": "summer_camp.png"},
		{"text": "school trip", "src": "school_trip.png"},
		{"text": "music festival", "src": "music_festival.png"},
		{"text": "volunteer day", "src": "volunteer_day.png"},
		{"text": "hiking", "src": "hiking.png"},
		{"text": "drama festival", "src": "drama_festival.png"},
		{"text": "mochi making festival", "src": "mochi_making_festival.png"},
		{"text": "graduation ceremony", "src": "graduation.png"}
	];
	var hints = [];
	EVENTS.forEach(function (t) {
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
