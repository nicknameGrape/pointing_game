import HatDraw from "../js_modules/HatDraw.mjs";
import image_library from "../image_library/image_library.mjs";
import PGM from "../PointingGameModule.mjs";
function setup(loader) {
	var WORDS = ["pen", "pencil", "pencil case", "pencil sharpener", "notebook", "calendar", "stapler", "glue stick", "magnet", "marker", "ruler", "eraser"];
	var hints = [];
	WORDS.forEach(function (w) {
		var ilo = image_library.find(function (o) {
			return o.text === w && o.tags.includes("stationery");
		});
		var img = loader.newImageAsset(ilo.src);
		img.value = ilo.text;
		img.classList.add("choice");
		hints.push(img);
	});
	this.hints = hints;
	this.hd = new HatDraw(hints);
	this.columns = 6;
}
export default new PGM(setup);
