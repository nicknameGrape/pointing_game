import HatDraw from "../js_modules/HatDraw.mjs";
import image_library from "../image_library/image_library.mjs";
import PGM from "../PointingGameModule.mjs";
function setup(loader, lloader) {
	var WORDS = ["ox", "tiger", "rabbit", "dragon", "snake", "horse", "sheep", "monkey", "rooster", "dog", "boar"];
	var RAT = {"src": "rat.png", "value": "rat"};
	var hints = [];
	var rat =lloader.newImageAsset(RAT.src)
	rat.value = RAT.value;
	rat.classList.add("choice");
	hints.push(rat);
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
	this.columns = 6;
}
export default new PGM(setup);
