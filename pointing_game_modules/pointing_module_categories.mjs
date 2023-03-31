import HatDraw from "../js_modules/HatDraw.mjs";
import image_library from "../image_library/image_library.mjs";
import PGM from "../PointingGameModule.mjs";
function setup(loader) {
	var CATS = ["fruit", "vegetable", "color", "food", "drink", "sport", "animal"];
	var hints = [];
	var AMBIGUOUS = [
		"miso soup",
		"salad",
		"rice",
		"nuts",
		"jam",
		"fruit",
		"pie",
		"pickles",
		"pet"
	];
	CATS.forEach(function (w) {
		var filtered = image_library.filter(function (o) {
			return o.tags.includes(w) && !AMBIGUOUS.includes(o.text);
		});
		var choice = filtered[Math.floor(Math.random()*filtered.length)];
		var img = loader.newImageAsset(choice.src);
		img.value = w;
		img.classList.add("choice");
		hints.push(img);
	});
	this.hints = hints;
	this.hd = new HatDraw(hints);
	this.columns = 7;
}
export default new PGM(setup);
