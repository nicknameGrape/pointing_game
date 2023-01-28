define(["image_library/images", "HatDraw", "pointing_game/PointingGameModule"], function (il, HatDraw, PGM) {
	function setup() {
		var MONTHS = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		];
		var hints = [];
		MONTHS.forEach(function (m) {
			var ilo = il.find(function (o) {
				return o.text === m && o.tags.includes("month");
			});
			var img = loader.newImageAsset(ilo.src);
			img.value = ilo.text;
			img.classList.add("choice");
			hints.push(img);
		});
		this.hints = hints;
		this.hd = new HatDraw(hints);
		this.columns = 6;
	}
	return new PGM(setup);
});
