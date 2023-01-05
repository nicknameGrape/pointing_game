define(["image_library/images", "HatDraw"], function (il, HatDraw) {

	var EVENTS = [
		{"text": "entrance ceremony", "src": "entrance_ceremony.png"},
		{"text": "sports day", "src": "sports_day.png"},
		{"text": "summer camp", "src": "summer_camp.png"},
		{"text": "school trip", "src": "school_trip.png"},
		{"text": "music festival", "src": "music_festival.png"},
		{"text": "volunteer day", "src": "volunteer_day.png"},
		{"text": "hiking", "src": "hiking.png"},
		{"text": "drama festival", "src": "drama_festival.png"},
		{"text": "mochi making festival", "src": "mochi_making_festival.png"},
		{"text": "graduation ceremony", "src": "graduation.png"}

	];
	var hints = [];
	EVENTS.forEach(function (t) {
		var img = lloader.newImageAsset(t.src);
		img.value = t.text;
		img.classList.add("choice");
		hints.push(img);
	});
	var module = {
		"hints": hints,
		"hd": new HatDraw(hints),
		//"columns": TIMES.length
		"columns": 5
	};
	return module;
});
