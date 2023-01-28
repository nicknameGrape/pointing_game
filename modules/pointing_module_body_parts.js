define(["image_library/images", "HatDraw", "pointing_game/PointingGameModule"], function (il, HatDraw, PGM) {
	function setup() {
		var EVENTS = [
			//{"text": "hands", "src": "hands.png"},
			//{"text": "arms", "src": "arms.png"},
			//{"text": "chest", "src": "chest.png"},
			//{"text": "face", "src": "face.png"},
			//{"text": "feet", "src": "feet.png"},
			//{"text": "hair", "src": "hair.png"},
			//{"text": "legs", "src": "legs.png"},
			{"text": "head", "src": "head.png"},
			{"text": "shoulders", "src": "shoulders.png"},
			{"text": "knees", "src": "knees.png"},
			{"text": "toes", "src": "toes.png"},
			{"text": "eyes", "src": "eyes.png"},
			{"text": "ears", "src": "ears.png"},
			{"text": "mouth", "src": "mouth.png"},
			{"text": "nose", "src": "nose.png"}
		];
		var hints = [];
		EVENTS.forEach(function (t) {
			var img = lloader.newImageAsset(t.src);
			img.value = t.text;
			img.classList.add("choice");
			hints.push(img);
		});
		this.hints = hints;
		this.hd = new HatDraw(hints);
		this.columns = 4;
	}
	return new PGM(setup);
});
