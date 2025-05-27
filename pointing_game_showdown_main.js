"use strict"

import HatDraw from "./js_modules/HatDraw.mjs";
import Loader from "./js_modules/Loader.mjs";
import modules from "./pointing_game_modules.mjs";
import image_library from "./image_library/image_library.mjs";
import fitText from "./js_modules/fitText.mjs";

let loader = new Loader("../image_library/images/");
let lloader = new Loader("./pointing_game_modules/img/");

function areReady() {
	return p1.isReady && p2.isReady;
}

function checkGuess(e) {
	console.log(e);
	e.preventDefault();
	var elapsed = performance.now() - this.player.lastMistakeAt;
	console.log("CHECKGUESS", this, this.value, round.answer.value, elapsed, this.player);
	if (performance.now() - this.player.lastMistakeAt > 3000 && !round.finished) {
		if (this.value === round.answer.value) {
			console.log("correct!");
			this.style.background = "lime";
			round.finished = true;
			console.log(stageDiv.width, stageDiv.height, this.player.number);
			fitText(stageContext, "WIN", stageDiv.width/2*(this.player.number-1), 0, stageDiv.width/2, stageDiv.height);
//				fitText(stageContext, "WIN", 0, 0, 100, 100);
			round = null;
		} else {
			if (this.style.background !== "red") {
				this.style.background = "red";
				this.player.lastMistakeAt = performance.now();
				this.player.buttonsDiv.style.opacity = .5;
				setTimeout(function () {
					this.player.buttonsDiv.style.opacity = "";
				}.bind(this), 3000);
			}
		}
	}
}

function Player(div, number) {
	this.number = number;
	this.hintDiv = div.firstElementChild;
	this.hintContext = this.hintDiv.getContext("2d");
	this.buttonsDiv = div.children[1];
	this.isReady = false;
	this.lastMistakeAt = null;
	this.buttonDown = function () {
		this.isReady = true;
		this.hintDiv.style.background = "green";
		console.log("ROUND", round);
		if (areReady() && round === null) {
			round = new Round();
			console.log("FIGHT");
		}
	}
	this.buttonUp = function () {
		this.isReady = false;
		this.hintDiv.style.background = "yellow";
	}
	this.hintDiv.addEventListener("touchstart", this.buttonDown.bind(this));
	this.hintDiv.addEventListener("touchend", this.buttonUp.bind(this));
}

function Round() {
	this.module = modulesHd.drawOne().module;
	//this.module.setup();
	this.answer = this.module.hd.drawOne();
	this.finished = false;
	resize();
	console.log(this.answer.value, p1.buttonsDiv.style, this.module.columns);
	fitText(p1.hintContext, this.answer.value);
	fitText(p2.hintContext, this.answer.value);
	p1.buttonsDiv.style.gridTemplateColumns = "repeat(" + this.module.columns + ", 1fr)";
	p2.buttonsDiv.style.gridTemplateColumns = "repeat(" + this.module.columns + ", 1fr)";
	while (p1.buttonsDiv.firstChild) {
		p1.buttonsDiv.removeChild(p1.buttonsDiv.firstChild);
	}
	while (p2.buttonsDiv.firstChild) {
		p2.buttonsDiv.removeChild(p2.buttonsDiv.firstChild);
	}
	this.module.hints.forEach(function (q, index, array) {
		console.log(array.length);
		var clone = document.createElement("canvas");
		var cloneContext = clone.getContext("2d");
		console.log(q);
		q.style.background = "";
		q.player = p1;
		q.onclick = checkGuess;
		q.addEventListener("touchstart", checkGuess);
		clone.width = q.width;
		clone.height = q.height;
		clone.value = q.value;
		clone.player = p2;
		cloneContext.drawImage(q, 0, 0);
		clone.classList.add("choice");
		clone.onclick = checkGuess;
		clone.addEventListener("touchstart", checkGuess);
		p1.buttonsDiv.appendChild(q);
		p2.buttonsDiv.appendChild(clone);
	});
}

function resize() {
	titleDiv.style.fontSize = titleDiv.offsetHeight*.8;
	modulesDiv.style.fontSize = Math.min(modulesDiv.offsetHeight/modules.length*1.5, titleDiv.offsetHeight*.6);
	p1.hintDiv.width = p1.hintDiv.clientWidth;
	p1.hintDiv.height = p1.hintDiv.clientHeight;
	p2.hintDiv.width = p2.hintDiv.clientWidth;
	p2.hintDiv.height = p2.hintDiv.clientHeight;
	if (round !== null) {
		fitText(p1.hintContext, round.answer.value);
		fitText(p2.hintContext, round.answer.value);
	}
	stageDiv.height = stageDiv.clientHeight;
	stageDiv.width = stageDiv.clientWidth;
}

function start() {
	var selectedTitles = [];
	var toCheck = modulesDiv.getElementsByTagName("input");
	for (let i=0; i<toCheck.length; i++) {
		if (toCheck[i].checked) {
			selectedTitles.push(toCheck[i].id);
		}
	}
	var selectedModules = modules.filter(function (m) {
		return selectedTitles.includes(m.title);
	})
	selectedModules.forEach(function (m) {
		console.log(m);
		m.module.setup(loader, lloader);
	});
	//modulesHd = new HatDraw(modules.filter(function (m) {
	//	console.log(m);
	//	return selectedTitles.includes(m.title);
	//}));
	modulesHd = new HatDraw(selectedModules);
	menuDiv.style.display = "none";
	gameDiv.style.display = "flex";
	resize();
}

var round = null;
var p1 = new Player(document.getElementById("p1"), 1);
var p2 = new Player(document.getElementById("p2"), 2);
var modulesHd;
var menuDiv  = document.getElementById("menu");
var titleDiv  = document.getElementById("title");
var modulesDiv  = document.getElementById("modules");
var gameDiv  = document.getElementById("game");
var stageDiv  = document.getElementById("stage");
var stageContext  = stageDiv.getContext("2d");
var wrong = document.createElement("audio");
var correct = document.createElement("audio");
titleDiv.innerHTML = "Pointing Game Showdown";
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
window.addEventListener("keydown", function (ev) {
	if (ev.key === "m") {p1.buttonDown();}
	if (ev.key === "l") {p2.buttonDown();}
});
window.addEventListener("keyup", function (ev) {
	if (ev.key === "m") {p1.buttonUp();}
	if (ev.key === "l") {p2.buttonUp();}
});
