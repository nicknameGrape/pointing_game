define(["image_library/images", "HatDraw"], function (il, HatDraw) {

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
	var module = {
		"hints": hints,
		"hd": new HatDraw(hints),
		"columns": 6
	};
	return module;
});
