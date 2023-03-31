import HatDraw from "./js_modules/HatDraw.mjs";
import Loader from "./js_modules/Loader.mjs";
import fitText from "./js_modules/fitText.mjs";
var defaultHintCanvas = document.createElement("canvas");
var defaultHintContext = defaultHintCanvas.getContext("2d");
fitText(defaultHintContext, "default");
defaultHintCanvas.value = "default";
defaultHintCanvas.classList.add("choice");
function Module(setup) {
	this.setup = setup;
	this.hints = [defaultHintCanvas];
	this.hd = new HatDraw([defaultHintCanvas]);
	}
export default Module;
