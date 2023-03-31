import HatDraw from "../js_modules/HatDraw.mjs";
import Loader from "../js_modules/Loader.mjs";
import PGM from "../PointingGameModule.mjs";
import jobs from "../image_library/jobs/jobs.mjs";
function setup() {
	var WORDS = ["illustrator", "designer", "baseball player", "basketball player", "teacher", "soccer player", "doctor", "police officer", "florist", "game creator"];
	var jloader = new Loader("./image_library/jobs/img/");
	var hints = [];
	var entries = Object.entries(jobs);
	entries.forEach(function (e) {
		var img = jloader.newImageAsset(e[1]);
		img.value = e[0];
		img.classList.add("choice");
		hints.push(img);
	});
	this.hints = hints;
	this.hd = new HatDraw(hints);
	this.columns = 5;
}
export default new PGM(setup);
