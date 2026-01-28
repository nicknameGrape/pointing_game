import HatDraw from "./js_modules/HatDraw.mjs";
import Loader from "./js_modules/Loader.mjs";
import modules from "./pointing_game_modules.mjs";
import image_library from "./image_library/image_library.mjs";

function setup() {
	wrong.src = "wrong.mp3";
	correct.src = "correct.mp3";
	console.log(modules);
	updateLevelAndProgress();
	newQuiz();
}

function newQuiz() {
	let moduleTitle = modulesHd.drawOne();
	let module = modules.find(o => o.title === moduleTitle).module;
	module.setup(loader, lloader);
	quiz = module.hd.drawOne();
	spanHintText.innerHTML = quiz.value;
	//speak(quiz.value);
	while (divButtons.firstChild) {
		divButtons.removeChild(divButtons.firstChild);
	}
	divButtons.style.gridTemplateColumns = "repeat(" + module.columns + ", 1fr)";
	module.hints.forEach(function (q, index) {
		q.style.background = "";
		q.onclick = onclick;
		divButtons.appendChild(q);
	});
	canGuess = true;
}

function onclick() {
	if (canGuess) {
		if (this.value === quiz.value) {
			canGuess = false;
			console.log("correct!");
			synth.cancel();
			wrong.pause();
			correct.pause();
			correct.currentTime = 0;
			//correct.play();
			this.style.background = "lime";
			nextLevel += 1;
			updateLevelAndProgress();
			setTimeout(function () {
				newQuiz();
			}, 1500);
		} else {
			if (this.style.background !== "red") {
				this.style.background = "red";
				synth.cancel();
				wrong.pause();
				wrong.currentTime = .7;
				//wrong.play();
				nextLevel = Math.max(nextLevel - 1, 0);
				updateLevelAndProgress();
			}
		}
	}
}

function updateLevelAndProgress () {
	if (nextLevel === 5) {
		level += 1;
		nextLevel = 0;
	}
	let levelString = "Level: " + level.toString();
	let nextLevelString = "Next Level: ";
	for (let i=0;i<5;i++) {
		console.log(i<nextLevel);
		if (i<nextLevel) {
			nextLevelString = nextLevelString.concat("○");
		} else {
			nextLevelString = nextLevelString.concat("-");
		}
	}
	console.log(levelString, nextLevelString);
	spanLevel.innerHTML = levelString;
	spanNextLevel.innerHTML = nextLevelString;
}

function speak(text) {
	synth.cancel();
	const utterThis = new SpeechSynthesisUtterance(text);
	console.log(hdVoices);
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

const TIME_LIMIT = 10;
const MAX_POINTS = 1000;
const GENERAL = ["Fruits", "Vegetables", "Foods", "How are you?", "Body Parts", "Colors", "Colorful Fruits", "ABC → ABC", "abc → ABC", "ABC → abc", "1-12", "1-20", "100-9900", "Weather", "Days", "Months", "Dates", "Digital Clock", "Classroom", "Stationery", "My Room", "Subjects", "Buildings", "Jobs", "Countries", "Opposites", "Personality: Strong, Shy, Kind"];
//const LETS_TRY_2 = ["Greetings", "Weather", "Let's play!", "Days", "Study Time", "Stationery", "abc -> ABC", "Vegetables", "At the Market", "School Rooms"];
const LETS_TRY_2 = ["Days", "Study Time", "Stationery", "abc → ABC", "Fruits", "Vegetables", "School Rooms", "My Day"];
const loader = new Loader("./image_library/images/");
const lloader = new Loader("./pointing_game_modules/img/");
const wrong = document.createElement("audio");
const correct = document.createElement("audio");
const modulesHd = new HatDraw(LETS_TRY_2);
const spanHintText = document.getElementById("hintText");
const divButtons = document.getElementById("buttons");
const spanLevel = document.getElementById("level");
const spanNextLevel = document.getElementById("nextLevel");
let quiz = null;
let canGuess = true;
let hdVoices;
let level = 1;
let nextLevel = 0;
//speech
const synth = window.speechSynthesis;
createHdVoices();
if (synth.getVoices().length == 0) {
	console.log("CHROME");
	synth.addEventListener("voiceschanged", createHdVoices);
} else {
	createHdVoices();
}
setup();

document.addEventListener("contextmenu", function (e) {
	e.preventDefault();
});

document.getElementById("hint").addEventListener("pointerdown", function () {
	speak(quiz.value);
});

