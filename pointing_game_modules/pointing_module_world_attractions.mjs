import HatDraw from "../js_modules/HatDraw.mjs";
import PGM from "../PointingGameModule.mjs";
function setup(loader, lloader) {
	var ATTRACTIONS = [
	{
		"src": "world_alps_by_train.png",
			"text": "You can see the Alps by train."
	},
	{
		"src": "world_animals.png",
		"text": "You can see many wild animals."
	},
	{
		"src": "world_kangaroo_koala.png",
		"text": "You can see kangaroos and koalas."
	},
	{
		"src": "world_pyramids.png",
		"text": "You can see the Great Pyramids."
	},
	{
		"src": "world_curry.png",
		"text": "You can eat curry."
	},
	{
		"src": "world_fuji.png",
		"text": "You can see Mt. Fuji."
	},
	{
		"src": "world_great_wall.png",
		"text": "You can see the Great Wall."
	},
	{
		"src": "world_kimchi.png",
		"text": "You can eat kimchi."
	},
	{
		"src": "world_pizza.png",
		"text": "You can eat pizza."
	},
	{
		"src": "world_neuschwanstein.png",
		"text": "You can see Castle Neuschwanstein."
	},
	{
		"src": "world_big_ben.png",
		"text": "You can see Big Ben."
	},
	{
		"src": "world_carnival.png",
		"text": "You can see Rio Carnival."
	},
	{
		"src": "world_eiffel_tower.png",
		"text": "You can see the Eiffel Tower."
	},
	{
		"src": "world_grand_canyon.png",
		"text": "You can see the Grand Canyon."
	},
	{
		"src": "world_hamburger.png",
		"text": "You can eat big hamburgers."
	},
	{
		"src": "world_taj_mahal.png",
		"text": "You can see the Taj Mahal."
	}
];
	var hints = [];
	ATTRACTIONS.forEach(function (t) {
		var img = lloader.newImageAsset(t.src);
		img.value = t.text;
		img.classList.add("choice");
		hints.push(img);
	});
	this.hints = hints;
	this.hd = new HatDraw(hints);
	this.columns = 8;
}
export default new PGM(setup);
