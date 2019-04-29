"use strict";

var game, damagePoint, hpPlayer, hpDragon;

var hpDrago= document.querySelector(".hpDragon");
var hpXena= document.querySelector(".hpXena");
var difficulty=document.querySelector(".difficulte");
var levelDescription=document.querySelector(".levelDescription");
var sword=document.querySelector(".arme");
var armor=document.querySelector(".armure");
var swordEffect=document.querySelector(".effetArme");
var armorEffect=document.querySelector(".effetArmure");
var winny=document.querySelector(".winny");
var damageP=document.querySelector(".damageP");
var activationButton=document.querySelector(".activationButton");
var mancheButton=document.querySelector(".mancheButton");

var gameWinner=document.querySelector(".gameWinner");
var paraIni=document.querySelector(".paraIni");
var paraLooping=document.querySelector(".paraLooping");
var dbz=document.querySelector(".dbz");
var starwars=document.querySelector(".starwars");

var game_container= document.querySelector("#dragon");
var paraToBePushed= document.querySelector("#paraToBePushed");
var containerGifDragon= document.createElement("p");
paraLooping.insertBefore(containerGifDragon, paraToBePushed);
containerGifDragon.innerHTML="";

/*initialisation*/
function initializeGame(){
	game={
		difficulte:requestInteger("Choisissez un niveau de difficulté entre 1 et 3",1,3),
		armure: requestInteger("Choisissez le niveau de votre armure entre 1 et 3",1,3),
		epee: requestInteger("Choisissez le niveau de votre épée entre 1 et 3",1,3)
	};

	switch(game.difficulte){
		case 1:
		game.difficulteName= " facile.";
		game.descriptionNiveau= "  Quel lâche!";
		game.hpPlayer=getRandomInteger(200,250);
		game.hpDragon=getRandomInteger(100,200);
		levelDescription.innerHTML=game.descriptionNiveau;
		difficulty.innerHTML=game.difficulteName;
		hpXena.innerHTML=game.hpPlayer;
		hpDrago.innerHTML=game.hpDragon;
		break;

		case 2:
		game.difficulteName= " normal.";
		game.descriptionNiveau= " Comme les gens ennuyeux!";
		game.hpPlayer=getRandomInteger(200,250);
		game.hpDragon=getRandomInteger(200,250);
		levelDescription.innerHTML=game.descriptionNiveau;
		difficulty.innerHTML=game.difficulteName;
		hpXena.innerHTML=game.hpPlayer;
		hpDrago.innerHTML=game.hpDragon;
		break;

		case 3:
		game.difficulteName=" difficile.";
		game.descriptionNiveau= " Quel m'as-tu vu!";
		game.hpPlayer=getRandomInteger(150,200);
		game.hpDragon=getRandomInteger(200,250);
		levelDescription.innerHTML=game.descriptionNiveau;
		difficulty.innerHTML=game.difficulteName;
		hpXena.innerHTML=game.hpPlayer;
		hpDrago.innerHTML=game.hpDragon;
		break;

		default:

	}

	switch(game.epee){
		case 1:
		game.epeeName= "une épée en bois";
		game.ratioEpee=0.5;
		game.effetArme= " Vos attaques seront donc divisé par 2 : Cela risque de vous prendre un certain temps !";
		sword.innerHTML=game.epeeName;
		swordEffect.innerHTML=game.effetArme;

		break;
		case 2:
		game.epeeName="une épée de cuivre";
		game.ratioEpee=1;
		game.effetArme= " Vos attaques seront classiques. C'est d'un banal !"
		sword.innerHTML=game.epeeName;
		swordEffect.innerHTML=game.effetArme;
		break;
		case 3:
		game.epeeName= "Excalibur";
		game.ratioEpee=1.5;
		game.effetArme= " Vos attaques seront multiplié par 150% . N'oubliez pas de rendre Excalibur, ceci est un prêt!";
		sword.innerHTML=game.epeeName;
		swordEffect.innerHTML=game.effetArme;

		break;
		default:
	}

	switch(game.armure){
		case 1:
		game.armureName= "armure de cuivre";
		game.ratioArmure=1;
		game.effetArmure= " J'aimerai vous dire qu'elle vous protégera, mais en réalité: la porter ou non ne change rien!";
		armor.innerHTML=game.armureName;
		armorEffect.innerHTML=game.effetArmure;
		break;
		case 2:
		game.armureName= "armure de fer";
		game.ratioArmure=1.5;
		game.effetArmure= " Les dégâts subis sont divisés par 150%. C'est bien, mais je n'ai jamais testé cela contre les crocs d'un dragon!";
		armor.innerHTML=game.armureName;
		armorEffect.innerHTML=game.effetArmure;
		break;
		case 3:
		game.armureName= "armure magique";
		game.ratioArmure=2;
		game.effetArmure= " Les dégâts subis sont divisés par 2. Shame on you, si vous perdez quand même!";
		armor.innerHTML=game.armureName;
		armorEffect.innerHTML=game.effetArmure;
		break;
		default:

	}
	paraIni.classList.remove("paraIni");
	mancheButton.classList.remove("display_none");
	activationButton.classList.add("display_none");
}

function computeDragonDamage(){

	switch(game.difficulte){
		case 1:
		damagePoint= (getRandomInteger(10, 20))/game.ratioArmure;
		case 2:
		damagePoint= (getRandomInteger(20,30))/game.ratioArmure;
		case 3:
		damagePoint= (getRandomInteger(20,30))/game.ratioArmure;

	}

	return damagePoint;
}

function computePlayerDamage(){
	switch(game.difficulte){
		case 1:
		damagePoint= (getRandomInteger(25, 30))*game.ratioEpee;

		case 2:
		damagePoint= (getRandomInteger(15,20))*game.ratioEpee;

		case 3:
		damagePoint= (getRandomInteger(5,10))*game.ratioEpee;

	}

	return damagePoint;
}

function gameloop() {

	var dragonSpeed, playerSpeed, damagePoint, winner;

	hpXena.innerHTML = game.hpPlayer.toFixed(2);
	hpDrago.innerHTML = game.hpDragon.toFixed(2);
	paraIni.classList.add("paraIni");
	paraLooping.classList.remove("paraLooping");

	if (game.hpPlayer > 0 && game.hpDragon > 0) {

		dragonSpeed = getRandomInteger(0, 100);
		playerSpeed = getRandomInteger(0, 100);


		if (dragonSpeed > playerSpeed) {

			damagePoint = computeDragonDamage();
			var winner = "Le dragon";
			winny.innerHTML = winner;
			game.hpPlayer -= damagePoint;
			damageP.innerHTML = damagePoint.toFixed(2);
			containerGifDragon.innerHTML = 'Le dragon vous carbonise ! <br><img src="' + base_url + '/img/dragon_slayer/fire-dragon.gif" class="gif_winny">';

		}
		if (dragonSpeed < playerSpeed) {

			damagePoint = computePlayerDamage();
			var winner = "Xéna";
			winny.innerHTML = winner;
			game.hpDragon -= damagePoint.toFixed(2);
			damageP.innerHTML = damagePoint.toFixed(2);
			containerGifDragon.innerHTML = 'Vous avez fait saigner le dragon ! <br><img src="' + base_url + '/img/dragon_slayer/sword-blood.gif" class="gif_winny">';

		}
	}

	else{
		(function () {

			mancheButton.classList.add("display_none");
			containerGifDragon.innerHTML = "<p></p>";
			paraLooping.classList.add("display_none");
			var winnerImg= document.querySelector("#winner_img");

			if (game.hpPlayer <= 0) {
				game.hpPlayer = 0;
				winner = " Javawan the Bug a gagné, vous avez été carbonisé ! Le prince fainéant restera son captif pour les 1000 ans à venir. Quelque part, c'est merrité !";
				gameWinner.innerHTML = winner;
				game_container.style.backgroundImage = "url('" + base_url + "/img/dragon_slayer/fire_dragon2.gif')";
			}
			if (game.hpDragon <= 0) {
				game.hpDragon = 0;
				winner = "Vous avez terrassé le terrible ***Javawan the Bug*** et délivré le prince captif !";
				gameWinner.innerHTML = winner;
				game_container.style.backgroundImage = "url('" + base_url + "/img/dragon_slayer/sword-move.gif')";
			}
		})();
	}
}
//events
activationButton.addEventListener("click", initializeGame);	
mancheButton.addEventListener("click", gameloop);

//h2-rotate
var TxtRotate = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 6) || 100;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

	var that = this;
	var delta = 300 - Math.random() * 100;

	if (this.isDeleting) { delta /= 2; }

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
	}

	setTimeout(function() {
		that.tick();
	}, delta);
};

window.onload = function() {
	var elements = document.getElementsByClassName('txt-rotate');
	for (var i=0; i<elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-rotate');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TxtRotate(elements[i], JSON.parse(toRotate), period);
		}
	}
  // CSS
  var css = document.createElement("style");
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid indigo }";
  document.body.appendChild(css);
};