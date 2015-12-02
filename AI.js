    var monsterbeweeglinks = true;
    var monsterbeweegomhoog = true;
    var monsterbeweegrechts = true;
    var monsterbeweegomlaag = true;

    var scherm;
    var schermLinks;
    var schermRechts;
    var schermTop;
    var schermOnder;

    var KanBewegen = new Array();
    var functie_Array_teller = 0;

$(document).ready(function(){
    
});

function AI(){
    
    if(aantalrocks.length != 0){/*Om de functie voor het eerst aan te roepen*/
        RemoveRock();
    }
    
    scherm = $('#speelscherm').position();
	schermLinks = scherm.left;
	schermRechts = schermLinks + $('#speelscherm').width();
	schermTop = scherm.top;
	schermOnder = schermTop + $('#speelscherm').height();
   
        for( i = 0; i < BestaatOctorok.length ; i++){
            if(BestaatOctorok[i]==true){    
            var richting = Math.floor(Math.random() * 4) + 1; 
            var aantalstappen = Math.floor(Math.random() * 3) + 1;
                
                
                var randomaanval = Math.floor((Math.random()*100)+1);//Random getal tussen 1 en 10
    
                if(randomaanval > 60)
                    Monsterattack(i);//Random bepalen of een monster aanvalt     
               
            switch(richting){
            
            case 1:
                    
                    for (j = 0 ; j < aantalstappen ; j++){
                        
                        if ((($("#Octorok" + i).position().left) - 20 * aantalstappen) < 0 ){
                        }
                            else{    
                                $("#Octorok" + i).attr('src', 'sprites/monster_1_normal_left_1.png');
                                $("#Octorok" + i).animate({left: '-=20px'}, 500);
                                
                            }    
                    }
            break;
                    
            case 2:
                    
                    $("#Octorok" + i).attr('src', 'sprites/monster_1_normal_up_1.png');
                    for (j = 0 ; j < aantalstappen ; j++){
                        
                        if((($("#Octorok" + i).position().top) - 20 * aantalstappen) < schermTop){
                        }
                        else{
                            $("#Octorok" + i).animate({top: '-=20px'}, 500);
                        }
                    }
            break;
            
            case 3:
                    
                    
                    $("#Octorok" + i).attr('src', 'sprites/monster_1_normal_right_1.png');
                    for (j = 0 ; j < aantalstappen ; j++){
                        
                        if((($("#Octorok" + i).position().left) + 20 * aantalstappen) > schermRechts){
                        }
                        else{
                            $("#Octorok" + i).animate({left: '+=20px'}, 500);
                        }
                    }
            break;
            case 4:
                   
                    $("#Octorok" + i).attr('src', 'sprites/monster_1_normal_down_1.png');
                    for (j = 0 ; j < aantalstappen ; j++){

                        if((($("#Octorok" + i).position().top + $("#Octorok" + i).height() + 7) + 20 * aantalstappen)> schermOnder){ 
                        }else{
                            $("#Octorok" + i).animate({top: '+=20px'}, 500);
                        }
                    }
            break; 
            } 
        
            } 

        }
    setTimeout(function(){ //Zorgt ervoor dat de afbeelding nog voor 5000 ms op het scherm staat
           AI();
    }, 1500);
    
    
    
};

var aantalrocks=[];
var rockteller = 0;

function Monsterattack(monsternummer){
    
    var aanvalrichting;
    aanvalrichting = Math.floor((Math.random()*4)+1);
    
    var monsterpos=$("#Octorok" + monsternummer).position();
    var monsterpositie={links:monsterpos.left, top:monsterpos.top};
    
    switch(aanvalrichting){
            
            case 1://Links aanvallen
                $("#Octorok" + monsternummer).attr('src', 'sprites/monster_1_normal_left_1.png');
                $('#speelscherm').append("<img src='sprites/rock.png' alt='Steen' id='steen" + rockteller + "'/>");
                $("#steen" + rockteller).css({ position: "absolute", top: monsterpositie.top, left: monsterpositie.links + 5});
                $("#steen" + rockteller).animate({"left": "-=" + monsterpositie.links}, (monsterpositie.links * 6)/*5000*/);                
                aantalrocks.push(rockteller);
                rockteller++;
            break;
            
            case 2://Omhoog aanvallen
                $("#Octorok" + monsternummer).attr('src', 'sprites/monster_1_normal_up_1.png');
                $('#speelscherm').append("<img src='sprites/rock.png' alt='Steen' id='steen" + rockteller + "'/>");
                $("#steen" + rockteller).css({ position: "absolute", top: monsterpositie.top, left: monsterpositie.links + 5});
                $("#steen" + rockteller).animate({"top": "-=" + (monsterpositie.top - 200)},((monsterpositie.top - 200)*6));                
                aantalrocks.push(rockteller);
                rockteller++;
            break;
            
            case 3://Rechts aanvallen
                $("#Octorok" + monsternummer).attr('src', 'sprites/monster_1_normal_right_1.png');
                $('#speelscherm').append("<img src='sprites/rock.png' alt='Steen' id='steen" + rockteller + "'/>");
                $("#steen" + rockteller).css({ position: "absolute", top: monsterpositie.top, left: monsterpositie.links + 5});
                $("#steen" + rockteller).animate({"left": "+=" + ($('#speelscherm').width() - monsterpositie.links - ($("#Octorok" + monsternummer).width()/2))}, (($('#speelscherm').width() - monsterpositie.links)*6));                
                aantalrocks.push(rockteller);
                rockteller++;
            break;
            
            case 4://Naar onder aanvallen
                $("#Octorok" + monsternummer).attr('src', 'sprites/monster_1_normal_down_1.png');
                $('#speelscherm').append("<img src='sprites/rock.png' alt='Steen' id='steen" + rockteller + "'/>");
                $("#steen" + rockteller).css({ position: "absolute", top: monsterpositie.top, left: monsterpositie.links + 5});
                $("#steen" + rockteller).animate({"top": "+=" + ($("#speelscherm").height() + 175 - (monsterpositie.top))},(($("#speelscherm").height() + 175 - (monsterpositie.top))*6));            
                aantalrocks.push(rockteller);
                rockteller++;
            break;
            
    }
    
    if(rockteller == 50)/*Om het getal niet te hoog te laten gaan*/
        rockteller = 0;
    
}

function RemoveRock(){    //Verwijdert de steen, maar checkt ook of het aan Link heeft geraakt
    
    for(i = 0; i < aantalrocks.length; i++ ){
        //console.log($("#steen" + aantalrocks[i]).position());
        if($("#steen" + aantalrocks[i]).position().left <= 5 || $("#steen" + aantalrocks[i]).position().left + $("#steen" + aantalrocks[i]).width() > $('#speelscherm').position().left + $('#speelscherm').width() - 10 || $("#steen" + aantalrocks[i]).position().top < $('#speelscherm').position().top || $("#steen" + aantalrocks[i]).position().top + $("#steen" + aantalrocks[i]).height() > $("#speelscherm").height() + $("#speelscherm").position().top){
            
            for(j = 0; j < aantalrocks.length; j++){
                if(aantalrocks[i] == aantalrocks[j]){
                    $("#steen" + aantalrocks[j]).remove();
                    aantalrocks.splice(i, 1);
                }
            }
        }
    }
    
    for(i = 0; i < aantalrocks.length; i++ ){
        if($("#steen" + aantalrocks[i]).position().left > linksSpeler && $("#steen" + aantalrocks[i]).position().left < rechtsSpeler && $("#steen" + aantalrocks[i]).position().top < onderSpeler && $("#steen" + aantalrocks[i]).position().top > topSpeler){
            
            levenLink -= 1;
           
            
            for(j = 0; j < aantalrocks.length; j++){
                if(aantalrocks[i] == aantalrocks[j]){
                    $("#steen" + aantalrocks[j]).remove();
                    aantalrocks.splice(i, 1);
                }
            }
            harten_plaatsen();
            console.log("Levenlink:" + levenLink);
            
            console.log("HIT");
            Hurt_Sound();
            
            if(levenLink == 0){
                Die_Sound();
                GameOver();
            }
            
            
        }
    }
    
    setTimeout(function(){ //Zorgt ervoor dat de afbeelding nog voor 100 ms op het scherm staat
	RemoveRock();
    }, 100);
}

function GameOver(){
    
    $("#Link").fadeOut(500, function(){
        $("#Link").remove();
        DimGameOverVolume();
    });    
    
    var gameoversoundvolume=0.8;
    
    function DimGameOverVolume(){
        GameOver_Audio.volume = gameoversoundvolume
        gameoversoundvolume -= 0.1
        
        if(gameoversoundvolume != 0){
            setTimeout(function(){ //Zorgt ervoor dat de afbeelding nog voor 100 ms op het scherm staat
                DimGameOverVolume();
            }, 300);
        }
        
    }
    
    
    setTimeout(function(){ //Zorgt ervoor dat de afbeelding nog voor 100 ms op het scherm staat
	   window.open("GameOver.html","_self")
    }, 2500);
    
    
}