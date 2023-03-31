import HatDraw from "../js_modules/HatDraw.mjs";
import Loader from "../js_modules/Loader.mjs";
import flags from "../image_library/flags/flags.mjs";
import PGM from "../PointingGameModule.mjs";
function setup() {
	var WORDS = ["us", "br", "gb", "fr", "de", "it", "jp", "kr", "ch", "in", "cn", "au", "eg", "ke"];
	var cloader = new Loader("../image_library/flags/img/");
	var hints = [];
	//var entries = Object.entries(flags);
	WORDS.forEach(function (e) {
		var img = cloader.newImageAsset(e + ".png");
		img.value = flags[e];
		img.classList.add("choice");
		hints.push(img);
	});
	this.hints = hints;
	this.hd = new HatDraw(hints);
	this.columns = 7;
}
export default new PGM(setup);
