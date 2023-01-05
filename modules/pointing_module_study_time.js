define(["image_library/images", "HatDraw"], function (il, HatDraw) {

	var TIMES = [
		{"text": "wake up time", "src": "wakeuptime.png"},
		{"text": "breakfast time", "src": "breakfasttime.png"},
		{"text": "study time", "src": "studytime.png"},
		{"text": "lunch time", "src": "lunchtime.png"},
		{"text": "snack time", "src": "snacktime.png"},
		{"text": "homework time", "src": "homeworktime.png"},
		{"text": "dinner time", "src": "dinnertime.png"},
		{"text": "bath time", "src": "bathtime.png"},
		{"text": "bed time", "src": "bedtime.png"},
		{"text": "dream time", "src": "dreamtime.png"}
	];
	var hints = [];
	TIMES.forEach(function (t) {
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
