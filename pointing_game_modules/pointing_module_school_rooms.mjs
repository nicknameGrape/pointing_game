import HatDraw from "../js_modules/HatDraw.mjs";
import PGM from "../PointingGameModule.mjs";
function setup(loader, lloader) {
	var ROOMS = [
		{"src": "school_room_entrance.png", "text": "entrance"},
		{"src": "school_room_art.png", "text": "art room"},
		{"src": "school_room_classroom.png", "text": "classroom"},
		{"src": "school_room_computer.png", "text": "computer room"},
		{"src": "school_room_cooking.png", "text": "cooking room"},
		{"src": "school_room_gym.png", "text": "gym"},
		{"src": "school_room_library.png", "text": "library"},
		{"src": "school_room_music.png", "text": "music room"},
		{"src": "school_room_nurse.png", "text": "school nurse's office"},
		{"src": "school_room_principals_office.png", "text": "principals office"},
		{"src": "school_room_restroom.png", "text": "restroom"},
		{"src": "school_room_science.png", "text": "science room "},
		{"src": "school_room_teachers_room.png", "text": "teacher's office"},
		{"src": "school_room_playground.png", "text": "playground"}
	];
	var hints = [];
	ROOMS.forEach(function (t) {
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
