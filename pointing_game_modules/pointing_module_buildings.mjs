import HatDraw from "../js_modules/HatDraw.mjs";
import PGM from "../PointingGameModule.mjs";
function setup(loader, lloader) {
	var VERBS = [
		{"src": "building_bookstore_icon.png", "text": "bookstore"},
		{"src": "building_convenience_store_icon.png", "text": "convenience store"},
		{"src": "building_department_store_icon.png", "text": "department store"},
		{"src": "building_fire_icon.png", "text": "fire station"},
		{"src": "building_florist_icon.png", "text": "florist"},
		{"src": "building_hospital_icon.png", "text": "hospital"},
		{"src": "building_park_icon.png", "text": "park"},
		{"src": "building_pet_shop_icon.png", "text": "pet shop"},
		{"src": "building_police_icon.png", "text": "police"},
		{"src": "building_post_icon.png", "text": "post office"},
		{"src": "building_restaurant_icon.png", "text": "restaurant"},
		{"src": "building_school_icon.png", "text": "school"},
		{"src": "building_station_icon.png", "text": "station"},
		{"src": "building_supermarket_icon.png", "text": "supermarket"}
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
	this.columns = 7;
}
export default new PGM(setup);
