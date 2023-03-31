import HatDraw from "../js_modules/HatDraw.mjs";
import PGM from "../PointingGameModule.mjs";
function setup(loader, lloader) {
	var VERBS = [
		{
		"src": "go_to_the_sea.png",
		"text": "I want to go to the sea."
		},
		{
		"src": "go_to_the_zoo.png",
		"text": "I want to go to the zoo."
		},
		{
		"src": "go_to_nara.png",
		"text": "I want to go to Nara."
		},
		{
		"src": "see_pandas.png",
		"text": "I want to see pandas."
		},
		{
		"src": "see_fireworks.png",
		"text": "I want to see fireworks."
		},
		{
		"src": "see_the_milky_way.png",
		"text": "I want to see the Milky Way."
		},
		{
		"src": "eat_ice_cream.png",
		"text": "I want to eat ice cream."
		},
		{
		"src": "eat_sushi.png",
		"text": "I want to eat sushi."
		},
		{
		"src": "play_soccer.png",
		"text": "I want to play soccer."
		},
		{
		"src": "play_baseball.png",
		"text": "I want to play baseball."
		},
		{
		"src": "read_books.png",
		"text": "I want to read books."
		},
		{
		"src": "enjoy_camping.png",
		"text": "I want to enjoy camping."
		},
		{
		"src": "enjoy_barbecuing.png",
		"text": "I want to enjoy barbecuing."
		},
		{
		"src": "see_a_movie.png",
		"text": "I want to see a movie."
		}
	];
	var hints = [];
	VERBS.forEach(function (t) {
		var img = lloader.newImageAsset(t.src);
		img.value = t.text;
		img.classList.add("choice");
		hints.push(img);
	});
	this.hints = hints;
	this.hd = new HatDraw(hints);
	this.columns = 5;
}
export default new PGM(setup);
