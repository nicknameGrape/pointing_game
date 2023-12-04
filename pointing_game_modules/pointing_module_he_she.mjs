import HatDraw from "../js_modules/HatDraw.mjs";
import PGM from "../PointingGameModule.mjs";
function setup(loader, lloader) {
	var PEOPLE = [
		{
			"src": "he_she_ono_miki.png",
			"text": "She is Miki."
		},
		{
			"src": "he_she_seki_kazuya.png",
			"text": "He is Kazuya."
		},
		{
			"src": "he_she_yan_jim.png",
			"text": "He is Jim."
		},
		{
			"src": "he_she_clark_hanna.png",
			"text": "She is Hanna."
		},
		{
			"src": "he_she_brown_amy.png",
			"text": "She is Ms. Brown."
		},
		{
			"src": "he_she_shindo_junichi.png",
			"text": "He is Mr. Shindo."
		},
		{
			"src": "he_she_davis_bob.png",
			"text": "He is Mr. Davis."
		}
	];
	var hints = [];
	PEOPLE.forEach(function (t) {
		var img = lloader.newImageAsset(t.src);
		img.value = t.text;
		img.classList.add("choice");
		hints.push(img);
	});
	this.hints = hints;
	this.hd = new HatDraw(hints);
	this.columns = 7;
}
export default new PGM(setup);
