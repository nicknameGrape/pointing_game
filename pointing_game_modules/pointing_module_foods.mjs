import HatDraw from "../js_modules/HatDraw.mjs";
import image_library from "../image_library/image_library.mjs";
import PGM from "../PointingGameModule.mjs";
function setup(loader) {
	var WORDS = ["tea", "fish", "rice", "hot dog", "pizza", "salad", "chicken", "french fries", "orange juice", "cheeseburger", "sandwich", "water", "steak", "soup", "green tea", "coffee", "spaghetti", "milk", "soda", "bread"];
	var hints = [];
	WORDS.forEach(function (w) {
		var ilo = image_library.find(function (o) {
			return o.text === w;
		});
		var img = loader.newImageAsset(ilo.src);
		img.value = ilo.text;
		img.classList.add("choice");
		hints.push(img);
	});
	this.hints = hints;
	this.hd = new HatDraw(hints);
	this.columns = 10;
}
export default new PGM(setup);
