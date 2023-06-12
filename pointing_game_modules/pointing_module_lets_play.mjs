import HatDraw from "../js_modules/HatDraw.mjs";
import PGM from "../PointingGameModule.mjs";
function setup(loader, lloader) {
	var ATTRACTIONS = [
 {
  "src": "lets_dodgeball.png",
  "text": "Let's play dodgeball."
 },
 {
  "src": "lets_dodgebee.png",
  "text": "Let's play dodgebee."
 },
 {
  "src": "lets_hide_and_seek.png",
  "text": "Let's play hide and seek."
 },
 {
  "src": "lets_hunt_bugs.png",
  "text": "Let's catch bugs."
 },
 {
  "src": "lets_jungle_gym.png",
  "text": "Let's play on the jungle gym."
 },
 {
  "src": "lets_playground_soccer.png",
  "text": "Let's play soccer."
 },
 {
  "src": "lets_snowman.gif",
  "text": "Let's make a snowman."
 },
 {
  "src": "lets_unicycle_buddies.png",
  "text": "Let's ride unicycles."
 },
 {
  "src": "lets_video_games.png",
  "text": "Let's play video games."
 },
 {
  "src": "lets_cards.png",
  "text": "Let's play cards."
 },
 {
  "src": "lets_cops_and_robbers.png",
  "text": "Let's play cops and robbers."
 },
 {
  "src": "lets_draw.png",
  "text": "Let's draw pictures."
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
	this.columns = 6;
}
export default new PGM(setup);
