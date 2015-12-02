$(document).keydown(function(e) {
	
    
	Map_Limit();

});

function Map_Limit(){
	
	var scherm = $('#speelscherm').position();
	var schermLinks = scherm.left;
	var schermRechts = schermLinks + $('#speelscherm').width();
	var schermTop = scherm.top;
	var schermOnder = schermTop + $('#speelscherm').height();

	

	if (linksSpeler  < 0)//Zodat de animatie niet buiten het scherm gaat
		moveLeft = false;
	else 
		moveLeft = true;

	if(rechtsSpeler + 7 > schermRechts)//Zodat de animatie niet buiten het scherm gaat
		moveRight = false;
	else
		moveRight = true;

	if(topSpeler  - 7 < schermTop)
		moveUp = false;
	else
		moveUp = true;

	if(onderSpeler + 7 > schermOnder)
		moveDown = false;
	else
		moveDown = true;


}

/*
function wallcollision(){

	var wall = $('.wall').position();
	var wallleft = wall.left;
	var wallbottom = wall.top + $(".wall").height();

	console.log("Wall left: " + wallleft )

	if(topSpeler < wallbottom)
		console.log("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT");

}*/