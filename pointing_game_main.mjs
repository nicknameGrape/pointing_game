import HatDraw from "./js_modules/HatDraw.mjs";
import Loader from "./js_modules/Loader.mjs";
import modules from "./pointing_game_modules.mjs";
import image_library from "./image_library/image_library.mjs";

function animateToAdd() {
	var now = performance.now();
	var elapsed = now  - startTime;
	toAdd = Math.max(Math.floor(MAX_POINTS*Math.pow(.8, tries)*(1 - elapsed/(TIME_LIMIT*1000))), 100);
	toAddDiv.children[0].innerHTML = toAdd;
	animationRequest = requestAnimationFrame(animateToAdd);
}

function newQuiz() {
	if (!countingDown) {
		clearTimeout(againTimeout);
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
		toAddDiv.children[0].innerHTML = toAdd;
		tries = 0;
		startTime = performance.now();
		animationRequest = requestAnimationFrame(animateToAdd);
	}
}

function start() {
	var selectedTitles = [];
	//var toCheck = modulesDiv.getElementsByTagName("input");
	var toCheck = Array.from(document.getElementsByTagName("input"));
	for (let i=0; i<toCheck.length; i++) {
		if (toCheck[i].checked) {
			selectedTitles.push(toCheck[i].mid);
		}
	}
	console.log(selectedModules);
	var selectedModules = modules.filter(function (m) {
		return selectedTitles.includes(m.title);
	})
	selectedModules.forEach(function (m) {
		console.log(m);
		m.module.setup(loader, lloader);
	});
	modulesHd = new HatDraw(selectedModules);
	menuDiv.style.display = "none";
	gameDiv.style.display = "block";
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
			toAddDiv.children[0].innerHTML = "+" + toAdd;
			total += toAdd;
			grandTotal += toAdd;
			totalDiv.children[1].innerHTML = grandTotal;
			attempts += 1;
			avgDiv.children[0].innerHTML = "ATTEMPTS: " + attempts + "<br>AVG: " + Math.round(total/attempts);
			countingDown = false;
			againTimeout = setTimeout(function () {
				hintDiv.innerHTML = "Again!";
			}, 3000);
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
				avgDiv.innerHTML = "ATTEMPTS: " + attempts + "<br>AVG: " + Math.round(total/attempts);
				toAdd = 0;
				toAddDiv.children[0].innerHTML = toAdd;
				countingDown = false;
				setTimeout(function () {
					hintDiv.innerHTML = "Again!";
				}, 3000);
			}
		}
	}
}


var TIME_LIMIT = 10;
var MAX_POINTS = 1000;
var GENERAL = ["Fruits", "Vegetables", "Foods", "Body Parts", "Colors", "ABC -> ABC", "abc -> ABC", "1-12", "1-20", "100-9900", "Weather", "Days", "Months", "Dates", "Stationery", "My Room", "Subjects", "Buildings", "Jobs", "Countries", "Opposites"];
var LETS_TRY_1 = ["Greetings", "How are you?", "1-20", "Colors", "Categories", "ABC -> ABC", "Colored Shapes", "White Rabbit"];
var LETS_TRY_2 = ["Greetings", "Weather", "Let's Play", "Days", "Time", "Study Time", "Stationery", "abc -> ABC", "Vegetables", "At the Market", "School Rooms"];
var loader = new Loader("./image_library/images/");
var lloader = new Loader("./pointing_game_modules/img/");
var modulesHd;
var quiz;
var menuDiv  = document.getElementById("menu");
var titleDiv  = document.getElementById("title");
var instructionsDiv  = document.getElementById("instructions");
var modulesDiv  = document.getElementById("modules");
var generalDiv  = document.getElementById("general");
var letsTry1Div  = document.getElementById("lets_try_1");
var letsTry2Div  = document.getElementById("lets_try_2");
var startDiv  = document.getElementById("start");
var gameDiv  = document.getElementById("game");
var backDiv  = document.getElementById("back");
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
var grandTotal = 0;
var toAdd;
var animationRequest, startTime;
var wrong = document.createElement("audio");
var correct = document.createElement("audio");
var againTimeout;
titleDiv.innerHTML = "Pointing Game";
startDiv.onclick = start;
GENERAL.sort(function (oa, ob) {
	var titlea = oa.toUpperCase();
	var titleb = ob.toUpperCase();
	if (titlea < titleb) {
		return -1;
	}
	if (titlea > titleb) {
		return 1;
	}
	return 0;
});
//modules.forEach(function (m) {
//	var unit = document.createElement("div");
//	var input = document.createElement("input");
//	var label = document.createElement("label");
//	input.type = "checkbox";
//	input.id = m.title;
//	label.htmlFor = m.title;
//	label.innerHTML = m.title;
//	unit.appendChild(input);
//	unit.appendChild(label);
//	if (GENERAL.includes(m.title)) {
//		generalDiv.children[1].appendChild(unit.cloneNode(true));
//	}
//});
GENERAL.forEach(function (title) {
	var unit = document.createElement("div");
	var input = document.createElement("input");
	var label = document.createElement("label");
	input.type = "checkbox";
	input.id = "general_" + title;
	input.mid = title;
	label.htmlFor = "general_" + title;
	label.innerHTML = title;
	unit.appendChild(input);
	unit.appendChild(label);
	generalDiv.children[1].appendChild(unit);
});
LETS_TRY_1.forEach(function (title) {
	if (modules.map(function (o) {return o.title;}).includes(title)) {
		var unit = document.createElement("div");
		var input = document.createElement("input");
		var label = document.createElement("label");
		input.type = "checkbox";
		input.id = "lt1_" + title;
		input.mid = title;
		label.htmlFor = "lt1_" + title;
		label.innerHTML = title;
		unit.appendChild(input);
		unit.appendChild(label);
		letsTry1Div.children[1].appendChild(unit);
	}
});
LETS_TRY_2.forEach(function (title) {
	if (modules.map(function (o) {return o.title;}).includes(title)) {
		var unit = document.createElement("div");
		var input = document.createElement("input");
		var label = document.createElement("label");
		input.type = "checkbox";
		input.id = "lt2_" + title;
		input.mid = title;
		label.htmlFor = "lt2_" + title;
		label.innerHTML = title;
		unit.appendChild(input);
		unit.appendChild(label);
		letsTry2Div.children[1].appendChild(unit);
	}
});
wrong.src = "wrong.mp3";
correct.src = "correct.mp3";
document.addEventListener('contextmenu', event => event.preventDefault());
backDiv.addEventListener('pointerup', function (ev) {
	gameDiv.style.display = "none";
	setTimeout(function delayShowMenu() {
		menuDiv.style.display = "block";
	}, 1);
});
Array.from(document.getElementsByClassName("invert")).forEach(function (el) {
	el.addEventListener('pointerdown', function (ev) {
		var inputs = Array.from(el.parentNode.parentNode.getElementsByTagName("input"));
		inputs.forEach(function (inp) {
			inp.checked = !inp.checked;
		});
	});
});
avgDiv.addEventListener('pointerdown', function (ev) {
	total = 0;
	attempts = 0;
	avgDiv.children[0].innerHTML = "ATTEMPTS:<br>AVG: ";
});
document.addEventListener("contextmenu", function (e) {
	e.preventDefault();
});
