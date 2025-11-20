import HatDraw from "../js_modules/HatDraw.mjs";
import PGM from "../PointingGameModule.mjs";
function setup(loader, lloader) {
	var PEOPLE = [
		{
			"src": "personality_01_active.png",
			"text": "She is active."
		},
		{
			"src": "personality_02_brave.png",
			"text": "He is brave."
		},
		{
			"src": "personality_03_friendly.png",
			"text": "He is friendly."
		},
		{
			"src": "personality_04_funny.png",
			"text": "He is funny."
		},
		{
			"src": "personality_05_kind.png",
			"text": "She is kind."
		},
		{
			"src": "personality_06_shy.png",
			"text": "She is shy."
		},
		{
			"src": "personality_07_smart.png",
			"text": "He is smart."
		},
		{
			"src": "personality_08_strong.png",
			"text": "He is strong."
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
	this.columns = 4;
}
export default new PGM(setup);
