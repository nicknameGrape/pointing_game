import HatDraw from "../js_modules/HatDraw.mjs";
import PGM from "../PointingGameModule.mjs";
function setup(loader, lloader) {
	var MEIBUTSU = [
		{"text": "Toyama crab", "src": "meibutsu_crab.png"},
		{"text": "Yamanashi grapes", "src": "meibutsu_grapes.png"},
		{"text": "Shizuoka green tea", "src": "meibutsu_green_tea.png"},
		{"text": "Hiroshima lemons", "src": "meibutsu_lemons.png"},
		{"text": "Mie lobster", "src": "meibutsu_lobster.png"},
		{"text": "Miyazaki mango", "src": "meibutsu_mango.png"},
		{"text": "Ibaraki natto", "src": "meibutsu_natto.png"},
		{"text": "Ehime iyokan", "src": "meibutsu_oranges_iyokan.png"},
		{"text": "Fukushima peach", "src": "meibutsu_peach.png"},
		{"text": "Chiba peanuts", "src": "meibutsu_peanuts.png"},
		{"text": "Tottori pears", "src": "meibutsu_pears.png"},
		{"text": "Okinawa pineapple", "src": "meibutsu_pineapple.png"},
		{"text": "Niigata rice", "src": "meibutsu_rice.png"},
		{"text": "Kagoshima sweet potato", "src": "meibutsu_sweet_potato.png"},
		{"text": "Osaka takoyaki", "src": "meibutsu_takoyaki.png"},
		{"text": "Aomori apple", "src": "meibutsu_apple.png"},
		{"text": "Nagasaki castella", "src": "meibutsu_castella.png"},
		{"text": "Yamagata cherries", "src": "meibutsu_cherries.png"},
		{"text": "Hokkaido corn", "src": "meibutsu_corn.png"}
	];
	var hints = [];
	MEIBUTSU.forEach(function (t) {
		var img = lloader.newImageAsset(t.src);
		img.value = t.text;
		img.classList.add("choice");
		hints.push(img);
	});
	this.hints = hints;
	this.hd = new HatDraw(hints);
	this.columns = 10;
}
export default new PGM(setup);
