//TODO Rupees verzamelen

var WearingWeaponB = "sword";

var levenLink = 3;//Pas dit aan om het leven van link te verlagen of te verhogen



$(document).ready(function(e) {//De gegevens al klaarzetten als het spel start
		//rupee_gevonden();
		harten_plaatsen();
    
	});



function harten_plaatsen(){// Wordt aangeroepen als Link leven verliest

    var teller = $(".heartPic").length;
    
    for(i = 0; i < teller; i++)
	{
		$('#hart' + i).remove()
	}
    
    for(i = 0; i < levenLink; i++)
	{
		$('#harten').prepend("<img class='heartPic' id='hart" + i + "' src='sprites/heart_item.png' />");
	}

}

function setWeaponB(){
    
    switch (WearingWeaponB){
    
    case "sword":
            $("#weapB").attr('src', 'sprites\sword_item.png');
    break;
    
    }
}
