import HatDraw from "../js_modules/HatDraw.mjs";
import PGM from "../PointingGameModule.mjs";
function setup(loader, lloader) {
	var TIMES = [
		{"text": "I wake up.", "src": "my_day_i_wake_up.png"},
		{"text": "I wash my face.", "src": "my_day_i_wash_my_face.png"},
		{"text": "I brush my teeth.", "src": "my_day_i_brush_my_teeth.png"},
		{"text": "I put away my futon.", "src": "my_day_i_put_away_my_futon.png"},
		{"text": "I have my breakfast.", "src": "my_day_i_eat_my_breakfast.png"},
		{"text": "I check my school bag.", "src": "my_day_i_check_my_school_bag.png"},
		{"text": "I take out the garbage.", "src": "my_day_i_take_out_the_garbage.png"},
		{"text": "I go home.", "src": "my_day_i_go_home.png"},
		{"text": "I do my homework.", "src": "my_day_i_do_my_homework.png"},
		{"text": "I dream a wonderful dream.", "src": "my_day_i_dream_a_wonderful_dream.png"}
	];
	var hints = [];
	TIMES.forEach(function (t) {
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
