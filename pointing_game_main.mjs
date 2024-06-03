import HatDraw from "./js_modules/HatDraw.mjs";
import Loader from "./js_modules/Loader.mjs";
import modules from "./pointing_game_modules.mjs";
import image_library from "./image_library/image_library.mjs";

function setup() {
	wrong.src = "wrong.mp3";
	correct.src = "correct.mp3";
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
		generalDiv.appendChild(unit);
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
			letsTry1Div.appendChild(unit);
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
			letsTry2Div.appendChild(unit);
		}
	});
	JUNIOR_SUNSHINE_5.forEach(function (title) {
		if (modules.map(function (o) {return o.title;}).includes(title)) {
			var unit = document.createElement("div");
			var input = document.createElement("input");
			var label = document.createElement("label");
			input.type = "checkbox";
			input.id = "js5_" + title;
			input.mid = title;
			label.htmlFor = "js5_" + title;
			label.innerHTML = title;
			unit.appendChild(input);
			unit.appendChild(label);
			juniorSunshine5Div.appendChild(unit);
		}
	});
	JUNIOR_SUNSHINE_6.forEach(function (title) {
		if (modules.map(function (o) {return o.title;}).includes(title)) {
			var unit = document.createElement("div");
			var input = document.createElement("input");
			var label = document.createElement("label");
			input.type = "checkbox";
			input.id = "js6_" + title;
			input.mid = title;
			label.htmlFor = "js6_" + title;
			label.innerHTML = title;
			unit.appendChild(input);
			unit.appendChild(label);
			juniorSunshine6Div.appendChild(unit);
		}
	});
	if (localStorage.getItem("activeTab") !== null) {
		storage.activeTab = localStorage.getItem("activeTab");
	}
	if (localStorage.getItem("checkboxes") !== null) {
		storage.checkboxes = JSON.parse(localStorage.getItem("checkboxes"));
	} else {
		Array.from(document.getElementsByTagName("input")).forEach(function (el) {
			storage.checkboxes[el.id] = el.checked;
		});
		localStorage.setItem("checkboxes", JSON.stringify(storage.checkboxes));
	}
	console.log(storage, localStorage);
	if (storage.activeTab !== null) {
		setActiveTab(document.getElementById(storage.activeTab));
	}
	if (storage.checkboxes !== null) {
		Object.entries(storage.checkboxes).forEach(function (entry) {
			let el = document.getElementById(entry[0]);
			el.checked = entry[1];
		});
	}
}

function setActiveTab(tab) {
	var showMe = document.getElementById(tab.id.slice(4));
	var invertBtn = tab.children[0];
	Array.from(tab.parentElement.children).forEach(function (sn) {
		var hideMe = document.getElementById(sn.id.slice(4));
		var invertBtn = sn.children[0];
		hideMe.style.display = "none";
		invertBtn.style.visibility = "hidden";
	});
	showMe.style.display = "flex";
	invertBtn.style.visibility = "visible";
	storage.activeTab = tab.id;
	localStorage.setItem("activeTab", tab.id);
}

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
		quiz = module.hd.drawOne();
		hintDiv.innerHTML = quiz.value;
		if (inputSpeak.checked) {
			speak(quiz.value);
		}
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
	} else {
		if (quiz !== null && inputSpeak.checked) {
			speak(quiz.value);
		}
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
			synth.cancel();
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
			console.log(avgDiv);
			avgDiv.children[0].innerHTML = "ATTEMPTS: " + attempts + "<br>AVG: " + Math.round(total/attempts);
			countingDown = false;
			againTimeout = setTimeout(function () {
				hintDiv.innerHTML = "Again!";
			}, 3000);
		} else {
			if (this.style.background !== "red") {
				this.style.background = "red";
				synth.cancel();
				wrong.pause();
				wrong.currentTime = .7;
				wrong.play();
				tries += 1;
				toAdd = Math.max(toAdd*.75, 100);
			}
			if (tries === 3) {
				cancelAnimationFrame(animationRequest);
				attempts += 1;
				avgDiv.children[0].innerHTML = "ATTEMPTS: " + attempts + "<br>AVG: " + Math.round(total/attempts);
				//avgDiv.innerHTML = "ATTEMPTS: " + attempts + "<br>AVG: " + Math.round(total/attempts);
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

function speak(text) {
	synth.cancel();
	const utterThis = new SpeechSynthesisUtterance(text);
	utterThis.voice = hdVoices.drawOne();
	//utterThis.lang = "en-US";
	synth.speak(utterThis);
	console.log(synth, utterThis);
}

function createHdVoices() {
	let voices = synth.getVoices();
	let voiceChoices = voices.filter(v => v.lang.includes("en"));
	console.log(voiceChoices);
	hdVoices = new HatDraw(voiceChoices);
}

var TIME_LIMIT = 10;
var MAX_POINTS = 1000;
var GENERAL = ["Fruits", "Vegetables", "Foods", "How are you?", "Body Parts", "Colors", "Colorful Fruits", "ABC → ABC", "abc → ABC", "ABC → abc", "1-12", "1-20", "100-9900", "Weather", "Days", "Months", "Dates", "Digital Clock", "Classroom", "Stationery", "My Room", "Subjects", "Buildings", "Jobs", "Countries", "Opposites"];
var LETS_TRY_1 = ["Greetings", "How are you?", "1-20", "Colors", "Categories", "ABC -> ABC", "Colored Shapes", "White Rabbit"];
var LETS_TRY_2 = ["Greetings", "Weather", "Let's play!", "Days", "Time", "Study Time", "Stationery", "abc -> ABC", "Vegetables", "At the Market", "School Rooms"];
var JUNIOR_SUNSHINE_5 = ["Months", "Dates", "Days", "Subjects", "Action Verbs", "Buildings", "My Room", "on in under by", "Countries", "He is, She is", "Zodiac", "Foods", "Prices", "Famous Foods of Japan", "100-9900"];
var JUNIOR_SUNSHINE_6 = ["Digital Clock", "Study Time", "Countries", "World Wonders", "Welcome to Japan", "Summer Vacation Plan", "Jobs", "School Events"];
var loader = new Loader("./image_library/images/");
var lloader = new Loader("./pointing_game_modules/img/");
var modulesHd;
var quiz = null;
var menuDiv  = document.getElementById("menu");
var titleDiv  = document.getElementById("title");
var instructionsDiv  = document.getElementById("instructions");
var modulesDiv  = document.getElementById("modules");
var generalDiv  = document.getElementById("general");
var letsTry1Div  = document.getElementById("lets_try_1");
var letsTry2Div  = document.getElementById("lets_try_2");
var juniorSunshine5Div  = document.getElementById("junior_sunshine_5");
var juniorSunshine6Div  = document.getElementById("junior_sunshine_6");
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
var storage = {
	"activeTab": null,
	"checkboxes": {}
}
let inputSpeak = document.getElementById("inputSpeak");
let hdVoices;
setup();
//speech
const synth = window.speechSynthesis;
if (synth.getVoices().length == 0) {
	console.log("CHROME");
	synth.addEventListener("voiceschanged", createHdVoices);
} else {
	createHdVoices();
}
startDiv.onclick = start;
document.addEventListener('contextmenu', event => event.preventDefault());
backDiv.addEventListener('pointerup', function (ev) {
	gameDiv.style.display = "none";
	setTimeout(function delayShowMenu() {
		menuDiv.style.display = "block";
	}, 1);
});
Array.from(document.getElementsByClassName("setName")).forEach(function (el) {
	el.addEventListener('pointerdown', function (ev) {setActiveTab(ev.target);});
});
Array.from(document.getElementsByClassName("invert")).forEach(function (el) {
	el.addEventListener('pointerdown', function (ev) {
		var mySet = document.getElementById(this.parentNode.id.slice(4));
		var inputs = Array.from(mySet.getElementsByTagName("input"));
		inputs.forEach(function (inp) {
			inp.checked = !inp.checked;
			storage.checkboxes[inp.id] = inp.checked;
			localStorage.setItem("checkboxes", JSON.stringify(storage.checkboxes));
		});
	});
});
Array.from(document.getElementsByTagName("input")).forEach(function (el) {
	el.addEventListener('change', function (ev) {
		let t = ev.target;
		storage.checkboxes[t.id] = t.checked;
		localStorage.setItem("checkboxes", JSON.stringify(storage.checkboxes));
	});
});
totalDiv.addEventListener('pointerdown', function (ev) {
	grandTotal = 0;
	totalDiv.children[1].innerHTML = grandTotal;
});
avgDiv.addEventListener('pointerdown', function (ev) {
	total = 0;
	attempts = 0;
	avgDiv.children[0].innerHTML = "ATTEMPTS:<br>AVG: ";
});
document.addEventListener("contextmenu", function (e) {
	e.preventDefault();
});
