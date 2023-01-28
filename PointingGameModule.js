define(["HatDraw", "Loader", "fitText"], function (HatDraw, Loader, fitText) {
	var defaultHintCanvas = document.createElement("canvas");
	var defaultHintContext = defaultHintCanvas.getContext("2d");
	fitText(defaultHintContext, "default");
	defaultHintCanvas.value = "default";
	defaultHintCanvas.classList.add("choice");
	return function Module(setup) {
		this.setup = setup;
		this.hints = [defaultHintCanvas];
		this.hd = new HatDraw([defaultHintCanvas]);
		}
});

