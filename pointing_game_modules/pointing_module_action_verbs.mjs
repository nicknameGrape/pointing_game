import HatDraw from "../js_modules/HatDraw.mjs";
import PGM from "../PointingGameModule.mjs";
function setup(loader, lloader) {
	var VERBS = [
		{
		"src": "icon_fly.png",
		"text": "fly"
		},
		{
		"src": "icon_jump.png",
		"text": "jump"
		},
		{
		"src": "icon_jump_rope.png",
		"text": "jump rope"
		},
		{
		"src": "icon_play_badminton.png",
		"text": "badminton"
		},
		{
		"src": "icon_play_soccer.png",
		"text": "soccer"
		},
		{
			"src": "icon_play_the_piano.png",
			"text": "play the piano"
		},
		{
			"src": "icon_play_the_recorder.png",
			"text": "play the recorder"
		},
		{
			"src": "icon_read_a_book.png",
			"text": "read a book"
		},
		{
			"src": "icon_run.png",
			"text": "run"
		},
		{
			"src": "icon_sing.png",
			"text": "sing"
		},
		{
			"src": "icon_swim.png",
			"text": "swim"
		},
		{
			"src": "icon_walk.png",
			"text": "walk"
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
	this.columns = 6;
}
export default new PGM(setup);
