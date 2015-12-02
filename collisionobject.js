var rupee = 0;
var rupeelinks = 0;
var rupeetop = 0;
var rupeesnu;
var aantalTriforce = 0;

var magTriforceplaatsen=false;

$(document).keydown(function(e) {    
    PickUp()
});

function PickUp(){
    
        if(rupee % 50 == 0 && rupee != 0)
        {
            magTriforceplaatsen=true
            DropTriforce();
        }
    
    
        if(droppedItems.length != 0){
        
        rupeelinks = 0;
        rupeetop = 0;
        
        for (i = 0; i < droppedItems.length; i++){
            
        var rupeeposition = $('#' + droppedItems[i]).position();
        rupeelinks = rupeeposition.left;
        rupeetop = rupeeposition.top;    
            
            if(rechtsSpeler > rupeelinks  && linksSpeler < rupeelinks && onderSpeler > rupeetop +30 && topSpeler  < rupeetop + 5 ){
                
                if(droppedItems[i].substring(0,8)=='triforce'){
                    aantalTriforce += 1;
                    console.log(aantalTriforce);
                    Item_get();
                    
                    if(aantalTriforce == 3)
                        CongratulationsYouWon();
                        
                }
                else if(droppedItems[i].substring(0,5)=='heart'){
                    console.log("Levenlink:" + levenLink);
                    $('#' + droppedItems[i]).remove();
                    var index = droppedItems.indexOf(droppedItems[i]);
                    droppedItems.splice(index, 1);
                    levenLink+=1;
                    harten_plaatsen();
                }
                else{
                    rupee+=5 ;
                    document.getElementById("rupeetekst").innerHTML ="x" + rupee;

                    Rupee_get();//SOUND-EFFECT
                }
                
                //REMOVE FROM THE FIELD
                $('#' + droppedItems[i]).remove();
                
                
                //REMOVE FROM ARRAY
                var index = droppedItems.indexOf(droppedItems[i]);
                droppedItems.splice(index, 1);
             
            }
        }
        
    }
    
}


function DropTriforce(){
        var randomx = Math.floor(Math.random() * ($("#speelscherm").width() - 60));
        var randomy = Math.floor(Math.random() * ($("#speelscherm").height() - 60) + 200 );

        $("#speelscherm").prepend('<img src="sprites/TriforcePiece.png" id="triforce'+aantalTriforce+'" alt="Triforcepiece"/>');
        $("#triforce" + aantalTriforce).css({position: "absolute", top: randomy - $("#triforce" + aantalTriforce).height(), left: randomx});
        
        droppedItems.push("triforce" + aantalTriforce);    
        rupee+=5
}

function CongratulationsYouWon(){
    
     $("#Link").fadeOut(500, function(){
        $("#Link").remove();
    });    
    
    setTimeout(function(){ //Zorgt ervoor dat de afbeelding nog voor 100 ms op het scherm staat
	   window.open("gewonnen.html","_self")
    }, 2500);
    
};