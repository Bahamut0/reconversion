"use strict";

var slides, slide, indexOfSlides, buttonLeft, buttonRight, interval, alea;

var indexOfSlides=0;
var buttonLeft= document.querySelector(".buttonLeft");
var buttonRight= document.querySelector(".buttonRight");
var buttonPlay= document.querySelector(".buttonPlay");
var image= document.querySelector("#funny_slider img");
var title= document.querySelector("#funny_slider figcaption");
var buttonRandom= document.querySelector(".random");
var icone= document.querySelector(".buttonPlay i");
var play= document.querySelector(".fa-play");
var pause= document.querySelector(".fa-pause");
var display= document.querySelector(".display");
var toggleHide= document.querySelector(".toggleHide");


slides= [
	{
		img: base_url+"/img/funny_slider/depressif.jpeg",
		titre: "J'ai toute ma tête !",
	},
	{
		img: base_url+"/img/funny_slider/drunkDog.jpeg",
		titre: "Après le boulot !",
	},

	{
		img: base_url+"/img/funny_slider/lostDog.jpeg",
		titre: "Il n'y a plus rien à faire pour ce chien !",
	},
	{
		img: base_url+"/img/funny_slider/surprisedDog.jpeg",
		titre: "Question: Qu'a vu ce chien ?",
	}

];


//function

function nextSlide(){
	
	if(indexOfSlides==slides.length-1){
		indexOfSlides=0;
	}
	else{
		indexOfSlides++;
	}	
	refreshSlider();

}
function previousSlide(){
	
	if(indexOfSlides==0){
		indexOfSlides=slides.length-1;
	}
	else{
		indexOfSlides--;
	}
	refreshSlider();
	
}
function refreshSlider(){
	slide= slides[indexOfSlides];
	image.src=slide.img;
	title.innerHTML=slide.titre;
	
	
}

function randomSlide(){
	 do{
		Math.floor(Math.random()*(indexOfSlides.length));
	}
	while(alea==indexOfSlides);
	 	refreshSlider();
}

function slide(){
	
	play.classList.toggle("fa-play");
	play.classList.toggle("fa-pause");
	if(interval){
		interval=clearInterval(interval);
	}
	else{
		interval=setInterval(nextSlide, 1500);
	}

}

function displayButton(){

	toggleHide.classList.toggle("toggleHide");
}
/*function onKeyDown(event){

	switch(event.which){
		case 39:
		nextSlide();
		break;

		case 37:
		previousSlide();
		break;

		case 32: 
		slide();
		break;

		case 8:
		displayButton();
		break;

		default:
	}
}*/
//Code
if(buttonLeft !=null) {
	buttonLeft.addEventListener("click", previousSlide);
}
if(buttonRight != null) {
	buttonRight.addEventListener("click", nextSlide);
}
if(buttonRandom != null) {
	buttonRandom.addEventListener("click", randomSlide);
}
if(buttonPlay != null) {
	buttonPlay.addEventListener("click", slide);
}
if(display != null) {
	display.addEventListener("click", displayButton);
}
/*
if(window.addEventListener) {
	window.addEventListener("keydown", onKeyDown);
}*/

