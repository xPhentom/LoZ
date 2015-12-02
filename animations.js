//Dit bestand bevat alle bewegingen- en aanvalanimaties


	//Dit zorgt voor te stoppen als er collision is
	var moveLeft, moveRight, moveUp, moveDown;
	moveDown = moveUp = moveRight = moveLeft = true;
	//-------------------------


	var aanvalTeller = 0;//Zo kan er maar één keer per keer op de spatiebalk gedrukt worden.

	var richting = "Beneden";

	var bewegingtellerRechts, bewegingtellerLinks, bewegingtellerOmhoog, bewegingtellerOmlaag;
	bewegingtellerLinks = bewegingtellerRechts = bewegingtellerOmlaag = bewegingtellerOmhoog = 0

$(document).keydown(function(e) {//Beweging basisanimaties

	switch(e.which){
		case 39://Rechts
		if(moveRight){//Stoppen wanneer er collision detection is
			$("#Link").attr('src','sprites/normal_walk_right_1.png');//Standaard afbeelding plaatsen
			bewegingtellerRechts++;//Om animatie te krijgen
			var rechtsVertragen = bewegingtellerRechts / 2; //Animatie duurt langer
				if (rechtsVertragen %2 == 1)//Animatie afwisselen
					$("#Link").attr('src','sprites/normal_walk_right_2.png');
				else if(rechtsVertragen%2 == 0)
					$("#Link").attr('src','sprites/normal_walk_right_1.png');
	   		$("#Link").animate({ "left": "+=8px" }, 0 );//Zorgt voor beweging
	   		richting = "Rechts";//Bepaalt de richting voor de aanval
		}
			
		break;

		case 38://Omhoog
		if(moveUp){//Stoppen waneer er collision detection is
			$("#Link").attr('src','sprites/normal_walk_up_1.png');
			bewegingtellerOmhoog++;
			var omhoogVertragen = Math.ceil(bewegingtellerOmhoog/3);//Zorgt ervoor dat de animatie even is
				if(omhoogVertragen % 2 == 1)
					$("#Link").attr('src','sprites/normal_walk_up_2.png');
				else if(omhoogVertragen % 2 == 0)	
					$("#Link").attr('src','sprites/normal_walk_up_1.png');
	   		$("#Link").animate({ "top": "-=8px" }, 0 );
	   		richting = "Boven";	
		}

		break;
		
		case 40://Beneden
		if(moveDown){//Stoppen wanneer er collision detection is
			$("#Link").attr('src','sprites/normal_walk_down_1.png');
			bewegingtellerOmlaag++;
			var omlaagVertragen = Math.ceil(bewegingtellerOmlaag/3);
				if(omlaagVertragen%2 == 1)
					$("#Link").attr('src','sprites/normal_walk_down_2.png');
				else if(omlaagVertragen%2 == 0)
					$("#Link").attr('src','sprites/normal_walk_down_1.png');
			$("#Link").animate({ "top": "+=8px" }, 0 );
	   		richting = "Beneden";
		}
			
		break;

		case 37://Links
		if(moveLeft){//Stoppen wanneer er collision detection is
			$("#Link").attr('src','sprites/normal_walk_left_1.png');
			bewegingtellerLinks++;
			var linksVertragen = bewegingtellerLinks/2;
				if(linksVertragen %2 == 1)
					$("#Link").attr('src','sprites/normal_walk_left_2.png');
				else if (linksVertragen%2==0)
					$("#Link").attr('src','sprites/normal_walk_left_1.png');
			$("#Link").animate({ "left": "-=8px" }, 0 );
		   	richting = "Links";
		}
		break;
	}


  	if(e.which == 32){//Aanval basisanimaties

 		aanvalTeller += 1;//Ervoor zorgen dat je maar één keer kan klikken op spatie

  		switch(richting){

  			case "Rechts":
  			if(aanvalTeller > 1)
  				$("#Link").attr('src','sprites/normal_walk_right_2.png');	
  			else{
  				$("#Link").attr('src','sprites/normal_attack_right_1.png');
  				Sword_Sound();
  				}		
  			break;

  			case "Boven":
  			if(aanvalTeller > 1)
  				$("#Link").attr('src','sprites/normal_walk_up_1.png');
  			else{
  				$("#Link").animate({ "top": "-=17px" }, 0 );
  				$("#Link").attr('src','sprites/normal_attack_up_1.png');
  				Sword_Sound();
  			}
  			break;

  			case "Beneden":
  			if(aanvalTeller > 1)
  				$("#Link").attr('src','sprites/normal_walk_down_1.png');
  			else{
  				$("#Link").attr('src','sprites/normal_attack_down_1.png');
  				Sword_Sound();
  			}
  			break;

  			case "Links":
  			if(aanvalTeller > 1)
  				$("#Link").attr('src','sprites/normal_walk_left_1.png');
  			else{
	  			$("#Link").animate({ "left": "-=35px" }, 0 );
	  			$("#Link").attr('src','sprites/normal_attack_left_1.png');
	  			Sword_Sound();
	  		}
  			
  			break;
  		}

  		

  	}


	});

	$(document).keyup(function(e) {
		
			switch(e.which){
				case 39:
					//$("#Link").attr('src','sprites/normal_walk_right_2.png');
					//bewegingtellerRechts = 0;//Zet animatie terug op nul
					break;
			}

			if(e.which==32){

				aanvalTeller = 0;

				switch(richting){//Animatie terugzetten na einde aanval
					case "Rechts":
						$("#Link").attr('src','sprites/normal_walk_right_2.png');	
					break;
					case "Links":
						$("#Link").animate({ "left": "+=35px" }, 0 );
						$("#Link").attr('src','sprites/normal_walk_left_1.png');
					break;
					case "Beneden":
						$("#Link").attr('src','sprites/normal_walk_down_1.png');
					break;
					case "Boven":
						$("#Link").animate({ "top": "+=17px" }, 0 );	
						$("#Link").attr('src','sprites/normal_walk_up_1.png');
					break;
				}
			}//Einde aanvalsanimatie	
		
	});

var magrechtsbewegen=false;
var maglinksbewegen=false;
var magomlaagbewegen=false;
var magomhoogbewegen=false;

/*Mobiele functies*/
$(document).ready(function(){
    
    $("#Rechts").bind('touchstart', function(){
        magrechtsbewegen=true;
        beweegrechts(); 
        mrichting='rechts';
        $("#Rechts").css("background-color","yellow");
        PickUp();//Kijken of hij een object kan oprapen
    });

    $("#Rechts").bind('touchend', function(){
        magrechtsbewegen=false;
        $("#Rechts").css("background-color","rgba(0,0,0,0)");
    });
    
    $("#Links").bind('touchstart', function(){
        maglinksbewegen=true;
        $("#Link").attr('src','sprites/normal_walk_left_1.png');
        beweeglinks(); 
        mrichting='links';
        $("#Links").css("background-color","yellow");
        PickUp();//Kijken of hij een object kan oprapen
    });

    $("#Links").bind('touchend', function(){
        maglinksbewegen=false;
        $("#Links").css("background-color","rgba(0,0,0,0)");
    });
    
    $("#Omlaag").bind('touchstart', function(){
        magomlaagbewegen=true;
        $("#Link").attr('src','sprites/normal_walk_down_1.png');
        beweegomlaag(); 
        mrichting='omhoog';
        $("#Omlaag").css("background-color","yellow");
        PickUp();//Kijken of hij een object kan oprapen
    });

    $("#Omlaag").bind('touchend', function(){
        magomlaagbewegen=false;
        $("#Omlaag").css("background-color","rgba(0,0,0,0)");
    });
    
    $("#Omhoog").bind('touchstart', function(){
        magomhoogbewegen=true;
        $("#Link").attr('src','sprites/normal_walk_up_1.png');
        beweegomhoog(); 
        mrichting='omlaag';
        $("#Omhoog").css("background-color","yellow");
        PickUp();//Kijken of hij een object kan oprapen
    });

    $("#Omhoog").bind('touchend', function(){
        magomhoogbewegen=false;
        $("#Omhoog").css("background-color","rgba(0,0,0,0)");
    });
});    



function beweegrechts(){
    
    linksSpeler = $("#Link").position().left;
    topSpeler = $("#Link").position().top;
    rechtsSpeler = $("#Link").position().left + $("#Link").width();
    onderSpeler = $("#Link").position().top + $("#Link").height();
    
    if(magrechtsbewegen && rechtsSpeler < $("#speelscherm").width()){
			$("#Link").attr('src','sprites/normal_walk_right_1.png');//Standaard afbeelding plaatsen
			bewegingtellerRechts++;//Om animatie te krijgen
			var rechtsVertragen = bewegingtellerRechts / 2; //Animatie duurt langer
				if (rechtsVertragen %2 == 1)//Animatie afwisselen
					$("#Link").attr('src','sprites/normal_walk_right_2.png');
				else if(rechtsVertragen%2 == 0)
					$("#Link").attr('src','sprites/normal_walk_right_1.png');
	   		$("#Link").animate({ "left": "+=8px" }, 0 );//Zorgt voor beweging
	   		richting = "Rechts";//Bepaalt de richting voor de aanval
    
        setTimeout(function(){ //Zorgt ervoor dat de afbeelding nog voor 100 ms op het scherm staat
          beweegrechts();
        }, 80);
    
    }
}

function beweeglinks(){
    
    linksSpeler = $("#Link").position().left;
    topSpeler = $("#Link").position().top;
    rechtsSpeler = $("#Link").position().left + $("#Link").width();
    onderSpeler = $("#Link").position().top + $("#Link").height();
    
    if(maglinksbewegen && linksSpeler > 0){
        $("#Link").attr('src','sprites/normal_walk_left_1.png');
                bewegingtellerLinks++;
                var linksVertragen = bewegingtellerLinks/2;
                    if(linksVertragen %2 == 1)
                        $("#Link").attr('src','sprites/normal_walk_left_2.png');
                    else if (linksVertragen%2==0)
                        $("#Link").attr('src','sprites/normal_walk_left_1.png');
                $("#Link").animate({ "left": "-=8px" }, 0 );
                richting = "Links";
        
        setTimeout(function(){ //Zorgt ervoor dat de afbeelding nog voor 100 ms op het scherm staat
          beweeglinks();
        }, 80);
    }
}

function beweegomlaag(){
    
    linksSpeler = $("#Link").position().left;
    topSpeler = $("#Link").position().top;
    rechtsSpeler = $("#Link").position().left + $("#Link").width();
    onderSpeler = $("#Link").position().top + $("#Link").height();
    
    if(magomlaagbewegen && onderSpeler < ($("#speelscherm").height()+200)){
        
			$("#Link").attr('src','sprites/normal_walk_down_1.png');
			bewegingtellerOmlaag++;
			var omlaagVertragen = Math.ceil(bewegingtellerOmlaag/3);
				if(omlaagVertragen%2 == 1)
					$("#Link").attr('src','sprites/normal_walk_down_2.png');
				else if(omlaagVertragen%2 == 0)
					$("#Link").attr('src','sprites/normal_walk_down_1.png');
			$("#Link").animate({ "top": "+=8px" }, 0 );
	   		richting = "Beneden";
        
        setTimeout(function(){ //Zorgt ervoor dat de afbeelding nog voor 100 ms op het scherm staat
          beweegomlaag();
        }, 80);
    }
}


function beweegomhoog(){
    linksSpeler = $("#Link").position().left;
    topSpeler = $("#Link").position().top;
    rechtsSpeler = $("#Link").position().left + $("#Link").width();
    onderSpeler = $("#Link").position().top + $("#Link").height();
    
    if(magomhoogbewegen && topSpeler > $("#speelscherm").position().top){
			$("#Link").attr('src','sprites/normal_walk_up_1.png');
			bewegingtellerOmhoog++;
			var omhoogVertragen = Math.ceil(bewegingtellerOmhoog/3);//Zorgt ervoor dat de animatie even is
				if(omhoogVertragen % 2 == 1)
					$("#Link").attr('src','sprites/normal_walk_up_2.png');
				else if(omhoogVertragen % 2 == 0)	
					$("#Link").attr('src','sprites/normal_walk_up_1.png');
	   		$("#Link").animate({ "top": "-=8px" }, 0 );
	   		richting = "Boven";	
    
    setTimeout(function(){ //Zorgt ervoor dat de afbeelding nog voor 100 ms op het scherm staat
          beweegomhoog();
        }, 80);
    }
}


function mattack(){
	switch(mrichting){

  			case "rechts":
  			if(aanvalTeller > 1)
  				$("#Link").attr('src','sprites/normal_walk_right_2.png');	
  			else{
  				$("#Link").attr('src','sprites/normal_attack_right_1.png');
  				Sword_Sound();
  				}		
  			break;

  			case "omlaag":
  			if(aanvalTeller > 1)
  				$("#Link").attr('src','sprites/normal_walk_up_1.png');
  			else{
  				$("#Link").animate({ "top": "-=17px" }, 0 );
  				$("#Link").attr('src','sprites/normal_attack_up_1.png');
  				Sword_Sound();
  			}
  			break;

  			case "omhoog":
  			if(aanvalTeller > 1)
  				$("#Link").attr('src','sprites/normal_walk_down_1.png');
  			else{
  				$("#Link").attr('src','sprites/normal_attack_down_1.png');
  				Sword_Sound();
  			}
  			break;

  			case "links":
  			if(aanvalTeller > 1)
  				$("#Link").attr('src','sprites/normal_walk_left_1.png');
  			else{
	  			$("#Link").animate({ "left": "-=35px" }, 0 );
	  			$("#Link").attr('src','sprites/normal_attack_left_1.png');
	  			Sword_Sound();
	  		}
  			
  			break;
  		}
    
    //aanvallen();
		  
    
    setTimeout(function(){
    setback()}, 200);
    
    
        for(i = 0; i < BestaatOctorok.length; i++)
		{
			DecidePosEnemy("Octorok" + i, i);//Laat dit door een array van opgeslagen id's gaan
            
			 mAttackDetector(i);
            
            console.log(linksMonster);
		}		  
  
    console.log(linksSpeler);
    
    
};

function mAttackDetector(i){
    
    imgbron = $('#Link').attr('src');
    
    if(rechtsSpeler + 25 > linksMonster - 10 && onderSpeler - 10 > topMonster && topSpeler  < onderMonster - 15 && linksSpeler < linksMonster  && imgbron == "sprites/normal_attack_right_1.png" ||
			topSpeler < onderMonster && rechtsSpeler - 14 >= linksMonster  && rechtsMonster - 10 > linksSpeler && topSpeler > topMonster && imgbron == "sprites/normal_attack_up_1.png" ||
			rechtsMonster > linksSpeler && onderMonster - 15 > topSpeler && onderSpeler > topMonster + 15 && linksSpeler > linksMonster && imgbron == "sprites/normal_attack_left_1.png" ||
			onderSpeler > topMonster - 20 && rechtsSpeler > linksMonster + 20 &&  linksSpeler < rechtsMonster -10 && onderMonster > onderSpeler && imgbron == "sprites/normal_attack_down_1.png"){
    
        AttackEffects();

			if(LevenOctorok[i] == 0){
				Dropitem(i);
				EnemyDies(i);
			}
			else
				LevenOctorok[i] = LevenOctorok[i] - 30;
        
    }
}

function setback(){
    
    switch(mrichting){
            case "rechts":
				$("#Link").attr('src','sprites/normal_walk_right_2.png');	
			break;
			case "links":
				$("#Link").animate({ "left": "+=35px" }, 0 );
				$("#Link").attr('src','sprites/normal_walk_left_1.png');
			break;
			case "omhoog":
				$("#Link").attr('src','sprites/normal_walk_down_1.png');
			break;
			case "omlaag":
				$("#Link").animate({ "top": "+=17px" }, 0 );	
				$("#Link").attr('src','sprites/normal_walk_up_1.png');
			break;    
    }
    
}