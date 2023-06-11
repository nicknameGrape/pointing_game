import HatDraw from "../js_modules/HatDraw.mjs";
import PGM from "../PointingGameModule.mjs";
function setup(loader, lloader) {
	var FEELINGS = [
		{
			"src": "japanese_beach_91yvvz93.png",
				"text": "beaches"
		},
		{
			"src": "japanese_mountain_t9fae8_e.png",
			"text": "mountains"
		},
		{
			"src": "japanese_temple_4ztnf976.png",
			"text": "temples"
		},
		{
			"src": "japanese_island_u65232_w.png",
			"text": "islands"
		},
		{
			"src": "japanese_fireworks_d6cl6kzw.png",
			"text": "fireworks"
		},
		{
			"src": "japanese_snow_uj37xs3o.png",
			"text": "snow"
		},
		{
			"src": "japanese_sushi.png",
			"text": "sushi"
		},
		{
			"src": "japanese_wagashi.png",
			"text": "Japanese sweets"
		},
		{
			"src": "japanese_sashimi.png",
			"text": "sashimi"
		},
		{
			"src": "japanese_natto.png",
			"text": "natto"
		},
		{
			"src": "japanese_tempura.png",
			"text": "tempura"
		},
		{
			"src": "japanese_udon.png",
			"text": "udon"
		},
		{
			"src": "japanese_japanese_garden.png",
			"text": "Japanese gardens"
		},
		{
			"src": "japanese_onsen.png",
			"text": "hot springs"
		},
		{
			"src": "japanese_snow_festival.png",
			"text": "the Snow Festival"
		},
		{
			"src": "japanese_star_festival.png",
			"text": "the Star Festival"
		},
		{
			"src": "japanese_bon_odori.png",
			"text": "the Bon Festival"
		},
		{
			"src": "japanese_hanami.png",
			"text": "hanami"
		},
		{
			"src": "japanese_autumn_festival.png",
			"text": "the Autumn Festival"
		},
		{
			"src": "japanese_shrine.png",
			"text": "shrines"
		},
		{
			"src": "japanese_japanese_castle.png",
			"text": "castles"
		},
		{
			"src": "japanese_gassyo_house.jpeg",
			"text": "'gassho' style houses"
		},
		{
			"src": "japanese_peace_park.png",
			"text": "the Peace Park"
		}
	];
	var hints = [];
	FEELINGS.forEach(function (t) {
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
