import Loader from "../js_modules/Loader.mjs";
import HatDraw from "../js_modules/HatDraw.mjs";
import PGM from "../PointingGameModule.mjs";
function setup(loader, lloader) {
	var WORDS = ["on", "in", "under", "by"];
	var hints = [];
	WORDS.forEach(function (w) {
		var img = lloader.newImageAsset("cat_" + w + ".png");
		img.value = w;
		img.classList.add("choice");
		hints.push(img);
	});
	this.hints = hints;
	this.hd = new HatDraw(hints);
	this.columns = WORDS.length;
}
export default new PGM(setup);
