//Functie maken die toont of er een collision is bij een aanval
//Dit gaat ook over objecten die gedropt worden bij een kill

		var imgbron;//Gebruiken om te zien welke kant Link aanvalt

		var speler;
		var speler_co;
		var linksSpeler;
		var rechtsSpeler; 
		var topSpeler;
		var onderSpeler; 


		var monster;
		var monster_co;
		var linksMonster;
		var rechtsMonster;
		var topMonster;
		var onderMonster;

		var Enemy;//Wordt gebruikt bij het aanvallen
		//var EnemyLife = 60;

		var droppedItems = [];//Zet hier de ID in van elke rupee

$(document).keydown(function(e) {

	//Links positie moet altijd bepaalt worden en dus geen variabele waarden hebben

	//START POSITIE LINK


	imgbron = $('#Link').attr('src');

	speler = $('#Link');
	spelerPosition = $('#Link').position();

	speler_co={ x_left: spelerPosition.left, y_top: spelerPosition.top, breedte: speler.width(), lengte: speler.height() };

	linksSpeler = speler_co.x_left;
	rechtsSpeler = speler_co.x_left + speler_co.breedte;
	topSpeler = speler_co.y_top;
	onderSpeler = speler_co.y_top + speler_co.lengte;

	//EINDE POSITIE LINK

	Map_Limit();//Altijd checken of Link nog wel in het veld is. Zie Collisionwall.js
	//wallcollision();

		for(i = 0; i < BestaatOctorok.length; i++)
		{
			DecidePosEnemy("Octorok" + i, i);//Laat dit door een array van opgeslagen id's gaan
            
            if (e.which == 32)
			 AttackDetector(i);
            
		}		  
	});


function DecidePosEnemy(identiteit, nummer){

if(BestaatOctorok[nummer]){

	Enemy = $('#' + identiteit);
	EnemyPosition = Enemy.position();

	monster_co = {x_left : EnemyPosition.left, y_top: EnemyPosition.top, breedte: Enemy.width(), lengte: Enemy.height() };

	linksMonster = monster_co.x_left;
	rechtsMonster = monster_co.x_left + monster_co.breedte;
	topMonster = monster_co.y_top;
	onderMonster = monster_co.y_top + monster_co.lengte;


}
    else{   // Anders gaat hij zoeken naar een left van een object dat er niet meer is, klinkt als een zielig verhaaltje
        linksMonster = 0;
        rechtsMonster = 0;
        topMonster = 0;
        onderMonster = 0;
    }

};

function AttackDetector(nummer){
	//Volgorde: rechtsaanvallen, omhoogaanvallen, linksaanvallen, benedenaanvallen, allemaal gescheiden door imgbron
		if(rechtsSpeler + 25 > linksMonster - 10 && onderSpeler - 10 > topMonster && topSpeler  < onderMonster - 15 && linksSpeler < linksMonster  && imgbron == "sprites/normal_attack_right_1.png" ||
			topSpeler < onderMonster && rechtsSpeler - 14 >= linksMonster  && rechtsMonster - 10 > linksSpeler && topSpeler > topMonster && imgbron == "sprites/normal_attack_up_1.png" ||
			rechtsMonster > linksSpeler && onderMonster - 15 > topSpeler && onderSpeler > topMonster + 15 && linksSpeler > linksMonster && imgbron == "sprites/normal_attack_left_1.png" ||
			onderSpeler > topMonster - 20 && rechtsSpeler > linksMonster + 20 &&  linksSpeler < rechtsMonster -10 && onderMonster > onderSpeler && imgbron == "sprites/normal_attack_down_1.png"){

			AttackEffects();

			if(LevenOctorok[nummer] == 0){
				Dropitem(nummer);
				EnemyDies(nummer);
			}
			else
				LevenOctorok[nummer] = LevenOctorok[nummer] - 30;
		} 
}

function AttackEffects(){
	Enemy.fadeTo(100, 0).fadeTo(100, 1.0);
    Hit_Sound();
}

function EnemyDies(nummer){
	BestaatOctorok[nummer] = false;
	Kill_Sound();
    Enemy.remove();
	newenemies();
}

var Aantalmonsters = 3;

function newenemies(){
    Aantalmonsters += 1
    $("#speelscherm").prepend('<img src="sprites/monster_1_normal_left_1.png" alt="Monster" id="Octorok'+ Aantalmonsters +'" class="Octorok"/>');
    
    var randomx = Math.floor(Math.random() * ($("#speelscherm").width()));
    var randomy = Math.floor(Math.random() * ($("#speelscherm").height())+200)
    
    $("#Octorok" + Aantalmonsters).css({position: "absolute", top: randomy - $("#Octorok" + Aantalmonsters).height(), left: randomx});
    console.log("#Octorok" + Aantalmonsters)
  BestaatOctorok.push(true);
  LevenOctorok.push(60);
}

var aantalhearts = 0;

function Dropitem(nummer){
	var random = Math.floor(Math.random()*100);

	if (random > 85){
        $("#speelscherm").prepend("<img src='sprites/heart_item.png' id='heart" + aantalhearts + "'>");
        droppedItems.push("heart" + aantalhearts)//Geeft ID mee aan de array
         $("#heart" + aantalhearts).css({ position: "absolute", top: topMonster, left: linksMonster + 5});
        aantalhearts+=1;
    }
	else{
        var lengte = droppedItems.length;
        $("#speelscherm").prepend("<img src='sprites/rupee_orange.png' id='rupee" + lengte + "'>");
        droppedItems.push("rupee" + lengte)//Geeft ID mee aan de array
        
        $("#rupee" + lengte).css({ position: "absolute", top: topMonster, left: linksMonster + 5});
		}//In collisionobject.js zullen we kijken of de speler dit opraapt
}

