"use strict"

requirejs.config({
baseUrl: './js',
paths: {
	"pointing_game": "../",
	"image_library": '../image_library'
}
});

var loader, lloader;
requirejs(["Loader"], function (Loader) {
	loader = new Loader("../image_library/images/");
	lloader = new Loader("./modules/img/");
});

requirejs(["pointing_game/pointing_game_modules", "image_library/images", "HatDraw"], function (modules, il, HatDraw) {
	function animateToAdd() {
		var now = performance.now();
		var elapsed = now  - startTime;
		toAdd = Math.max(Math.floor(MAX_POINTS*Math.pow(.8, tries)*(1 - elapsed/(TIME_LIMIT*1000))), 100);
		toAddDiv.innerHTML = toAdd;
		animationRequest = requestAnimationFrame(animateToAdd);
	}

	function newQuiz() {
		if (!countingDown) {
			var module = modulesHd.drawOne().module;
			console.log
			quiz = module.hd.drawOne();
			hintDiv.innerHTML = quiz.value;
			while (buttonsDiv.firstChild) {
				buttonsDiv.removeChild(buttonsDiv.firstChild);
			}
			buttonsDiv.style.gridTemplateColumns = "repeat(" + module.columns + ", 1fr)";
			module.hints.forEach(function (q, index) {
				console.log(q);
				q.style.background = "";
				q.onclick = onclick;
				buttonsDiv.appendChild(q);
			});
			countingDown = true;
			toAddDiv.style.color = ""
			toAdd = 1000;
			toAddDiv.innerHTML = toAdd;
			tries = 0;
			startTime = performance.now();
			animationRequest = requestAnimationFrame(animateToAdd);
			resize();
		}
	}

	function resize() {
		titleDiv.style.fontSize = titleDiv.offsetHeight*.8;
		modulesDiv.style.fontSize = Math.min(modulesDiv.offsetHeight/modules.length*1.5, titleDiv.offsetHeight*.6);
		avgDiv.style.fontSize = avgDiv.offsetHeight*.2;
		totalDiv.style.fontSize = totalDiv.offsetHeight*.85;
		toAddDiv.style.fontSize = toAddDiv.offsetHeight*.85;
		hintDiv.style.fontSize = hintDiv.offsetHeight*.5;
	}

	function start() {
		var selectedTitles = [];
		var toCheck = modulesDiv.getElementsByTagName("input");
		for (let i=0; i<toCheck.length; i++) {
			if (toCheck[i].checked) {
				selectedTitles.push(toCheck[i].id);
			}
		}
		modulesHd = new HatDraw(modules.filter(function (m) {
			console.log(m);
			return selectedTitles.includes(m.title);
		}));
		menuDiv.style.display = "none";
		gameDiv.style.display = "block";
		resize();
	}

	function onclick() {
		console.log(this.data);
		if (countingDown) {
			if (this.value === quiz.value) {
				console.log("correct!");
				cancelAnimationFrame(animationRequest);
				wrong.pause();
				correct.pause();
				correct.currentTime = 0;
				correct.play();
				this.style.background = "lime";
				toAddDiv.style.color = "lime"
				toAddDiv.innerHTML = "+" + toAdd;
				total += toAdd;
				totalDiv.innerHTML = total;
				attempts += 1;
				avgDiv.innerHTML = "<br>ATTEMPTS: " + attempts + "<br>AVG: " + Math.round(total/attempts);
				countingDown = false;
			} else {
				if (this.style.background !== "red") {
					this.style.background = "red";
					wrong.pause();
					wrong.currentTime = .7;
					wrong.play();
					tries += 1;
					toAdd = Math.max(toAdd*.75, 100);
				}
				if (tries === 3) {
					cancelAnimationFrame(animationRequest);
					attempts += 1;
					avgDiv.innerHTML = "<br>ATTEMPTS: " + attempts + "<br>AVG: " + Math.round(total/attempts);
					toAdd = 0;
					toAddDiv.innerHTML = toAdd;
					countingDown = false;
				}
			}
		}
	}

	var TIME_LIMIT = 10;
	var MAX_POINTS = 1000;
	var modulesHd;
	var quiz;
	var menuDiv  = document.getElementById("menu");
	var titleDiv  = document.getElementById("title");
	var modulesDiv  = document.getElementById("modules");
	var gameDiv  = document.getElementById("game");
	var attemptsDiv = document.getElementById("attempts");
	var avgDiv = document.getElementById("avg");
	var totalDiv  = document.getElementById("total");
	var toAddDiv  = document.getElementById("toAdd");
	var hintDiv = document.getElementById("hint");
	var buttonsDiv = document.getElementById("buttons");
	hintDiv.onclick = newQuiz;
	var countingDown = false;
	var tries = 0;
	var attempts = 0;
	var total = 0;
	var toAdd;
	var animationRequest, startTime;
	var wrong = document.createElement("audio");
	var correct = document.createElement("audio");
	titleDiv.innerHTML = "Pointing Game";
	titleDiv.onclick = start;
	modules.forEach(function (m) {
		var unit = document.createElement("div");
		var input = document.createElement("input");
		var label = document.createElement("label");
		input.type = "checkbox";
		input.id = m.title;
		label.htmlFor = m.title;
		label.innerHTML = m.title;
		modulesDiv.appendChild(unit);
		unit.appendChild(input);
		unit.appendChild(label);
	});
	wrong.src = "wrong.mp3";
	correct.src = "correct.mp3";
	document.addEventListener('contextmenu', event => event.preventDefault());
	window.addEventListener('resize', resize);
	resize();
	document.addEventListener("contextmenu", function (e) {
		e.preventDefault();
	});
});
