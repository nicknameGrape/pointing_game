import HatDraw from "../js_modules/HatDraw.mjs";
import PGM from "../PointingGameModule.mjs";
function setup(loader, lloader) {
	var WX = [
		{
		"src": "sunny.png",
		"text": "sunny"
		},
		{
		"src": "cloudy.png",
		"text": "cloudy"
		},
		{
		"src": "windy.png",
		"text": "windy"
		},
		{
		"src": "rainy.png",
		"text": "rainy"
		},
		{
		"src": "snowy.png",
		"text": "snowy"
		},
		{
			"src": "hot.png",
			"text": "hot"
		},
		{
			"src": "cold.png",
			"text": "cold"
		},
		{
			"src": "stormy.png",
			"text": "stormy"
		}
	];
	var hints = [];
	WX.forEach(function (t) {
		var img = lloader.newImageAsset(t.src);
		img.value = t.text;
		img.classList.add("choice");
		hints.push(img);
	});
	this.hints = hints;
	this.hd = new HatDraw(hints);
	this.columns = 8;
}
export default new PGM(setup);
