import HatDraw from "../js_modules/HatDraw.mjs";
import PGM from "../PointingGameModule.mjs";

function setup(loader, lloader) {
	var CLASSROOM_PLACES = [
		{"src": "classroom_blackboard.png", "text": "blackboard"},
		{"src": "classroom_broom_closet.png", "text": "closet"},
		{"src": "classroom_calendar_bu_w5q3l.png", "text": "calendar"},
		{"src": "classroom_computer_1rl8gni3.png", "text": "computer"},
		{"src": "classroom_cubby.png", "text": "cubby"},
		{"src": "classroom_desk.png", "text": "desk"},
		{"src": "classroom_door.png", "text": "door"},
		{"src": "classroom_pencil_sharpener_electric.png", "text": "pencil sharpener"},
		{"src": "classroom_teacher.png", "text": "teacher"},
		{"src": "classroom_wastebasket_ixlmznbp.png", "text": "wastebasket"},
		{"src": "classroom_water_bottle.png", "text": "water bottle"},
		{"src": "classroom_whiteboard.jpeg", "text": "whiteboard"},
		{"src": "classroom_window.png", "text": "window"}
	];
	var hints = [];
	CLASSROOM_PLACES.forEach(function (t) {
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
