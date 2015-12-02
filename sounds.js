//Geluiden plaatsen in het spel

var GameOver_Audio = new Audio('sounds/overworld.wav');

function overworld(){ 
	GameOver_Audio.volume = 0.8;
	GameOver_Audio.loop = true;
	GameOver_Audio.play();
}


function Sword_Sound(){
	var audio = new Audio('sounds/Sword.wav');
	audio.volume = 1; //Kan verandert worden indien nodig
	audio.play();
}

function Hit_Sound(){
	var audio = new Audio('sounds/Hit.wav');
	audio.volume = 1; 
	audio.play();
}

function Kill_Sound(){
	var audio = new Audio('sounds/Kill.wav');
	audio.volume = 1;
	audio.play();
}

function Rupee_get(){
    var audio = new Audio('sounds/Rupee.wav');
	audio.volume = 1;
	audio.play();
}

function Hurt_Sound(){
	var audio = new Audio('sounds/Hurt.wav');
	audio.volume = 1; 
	audio.play();
}

function Die_Sound(){
	var audio = new Audio('sounds/Die.wav');
	audio.volume = 1; 
	audio.play();
}

var Intro_Audio = new Audio('sounds/Intro.wav');

function Intro_Sound(){
	Intro_Audio.volume = 1; 
    Intro_Audio.loop = true;
	Intro_Audio.play();
}

function Start_Sound(){
	var audio = new Audio('sounds/PressStart.wav');
	audio.volume = 1; 
	audio.play();
}

function GameOver_Sound(){
	var audio = new Audio('sounds/GameOver.wav');
	audio.volume = 0.8; 
	audio.play();
}

function Item_get(){
    var audio = new Audio('sounds/Item.wav');
	audio.volume = 1;
	audio.play();
}

function Ending(){
    var audio = new Audio('sounds/Ending.wav');
	audio.volume = 1;
	audio.play();
    audio.loop = true;
}

