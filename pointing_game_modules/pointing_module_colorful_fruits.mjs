import fitText from "../js_modules/fitText.mjs";
import HatDraw from "../js_modules/HatDraw.mjs";
import PGM from "../PointingGameModule.mjs";
function setup(loader, lloader) {
	let combos = [];
	let hints = [];
	function makeHints() {
		if (lloader.assetsLoaded) {
			hints.forEach(function (canvas, index) {
				let c = combos[index];
				let context = canvas.getContext("2d");
				canvas.value = c.color + " " + c.text;
				if (c.color === "skyBlue") {
					canvas.value = "sky blue " + c.text;
				}
				canvas.width = c.blank.width;
				canvas.height = c.blank.height;
				context.fillStyle = c.color;
				if (c.color === "black") {
					context.fillStyle = "#333333";
				}
				if (c.color === "yellow") {
					context.fillStyle = "#ffff99";
				}
				context.fillRect(0, 0, canvas.width, canvas.height);
				context.globalCompositeOperation = "destination-in";
				context.drawImage(c.mask, 0, 0);
				context.globalCompositeOperation = "source-over";
				context.drawImage(c.blank, 0, 0);
				console.log(c, canvas.value);
				hints.push(canvas);
			});
			let tmp = [];
			while (hints.length > 0) {
				tmp.push(hints.splice(Math.floor(Math.random()*hints.length), 1)[0]);
			}
			while (tmp.length > 0) {
				hints.push(tmp.splice(Math.floor(Math.random()*tmp.length), 1)[0]);
			}
		}
	}
	var COLORS = ["red", "pink", "yellow", "purple", "blue", "skyBlue", "black", "white", "orange", "brown", "green", "gray"];
	var FRUITS = [
		{"text": "apple", "blank": "apple_blank.png", "mask": "apple_mask.png"},
		{"text": "peach", "blank": "peach_blank.png", "mask": "peach_mask.png"},
		{"text": "orange", "blank": "orange_blank.png", "mask": "orange_mask.png"},
		{"text": "grapes", "blank": "grapes_blank.png", "mask": "grapes_mask.png"},
		{"text": "banana", "blank": "banana_blank.png", "mask": "banana_mask.png"}
	];
	let hdFruits = new HatDraw(FRUITS);
	let hdColors = new HatDraw(COLORS);
	let rFruits = [];
	let rColors = [];
	for (var i=0; i<4; i++) {
		rFruits.push(hdFruits.drawOne());
	}
	for (var i=0; i<3; i++) {
		rColors.push(hdColors.drawOne());
	}
	console.log(rFruits, rColors);
	rFruits.forEach(function (f) {
		rColors.forEach(function (c) {
			let canvas = document.createElement("canvas");
			let obj = {};
			canvas.classList.add("choice");
			obj.text = f.text;
			obj.blank = lloader.newImageAsset(f.blank, makeHints);
			obj.mask = lloader.newImageAsset(f.mask, makeHints);
			obj.color = c;
			combos.push(obj);
			hints.push(canvas);
		});
	});
	this.hints = hints;
	this.hd = new HatDraw(hints);
	this.columns = 6;
}
export default new PGM(setup);
