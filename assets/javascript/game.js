 //always wrap JQuery in this://
 $(document).ready(function(){

//variables
var wins = 0;
var losses = 0;
var result = 0;
var targetnumber = 0;
var crystalgreen = 0;
var crystalpink = 0;
var crystalblue = 0;
var crystalyellow = 0;
var totalscore = 0;
var chancesleft = 5;

 
//add numbers from clicking crystals to a total number bank//
	$("#crystalisgreen").click(function() {
		result += crystalgreen;
 		$(".currentnumber").html(result);
 		evaluateTotal();
 	});
	$("#crystalisblue").click(function() {
		result += crystalblue
 		$(".currentnumber").html(result);
 		evaluateTotal();
 	});
	$("#crystalispink").click(function() {
		result += crystalpink
 		$(".currentnumber").html(result);
 		evaluateTotal();
 	});
	$("#crystalisyellow").click(function() {
		result += crystalyellow
 		$(".currentnumber").html(result);
 		evaluateTotal();
 	});
//set selector to "button" .click()...use .data() to retrieve...this..example on jquery.
//change to .text versus 
	
	function evaluateTotal () {
	if (result > targetnumber) {
		losses ++;
		$(".losses").html(losses);
		totalscore -= 10;
		$(".score").html(totalscore);
		chancesleft --;
		$(".chances").html(chancesleft);
		if (chancesleft === 0) {
		$(".chances").html(chancesleft)
		alert("SORRY, YOU LOSE THE GAME!");

		}
		start();
		
	};

	
	if (result === targetnumber){
		wins++;
		$(".wins").html(wins);
		totalscore += 10;
		$(".score").html(totalscore);
		start();
		if (totalscore === 50) {
			alert("YOU HAVE WON THE REALLY FUN CRYSTAL GAME!!");
		}

	};
	};



	
	

//create a function for the start of the game and/or when a player wins//
function start () {
	//generate a random number between 19 and 120//
	targetnumber = Math.floor(Math.random() * (102) + 19);
	//print targetnumber into html//
  	$(".targetnumber").html(targetnumber);
  	//generate a random number between 1 and 12 for each crystal//
  	crystalgreen = Math.floor(Math.random() * (12) + 1);
 	crystalpink = Math.floor(Math.random() * (12) + 1);
 	crystalblue = Math.floor(Math.random() * (12) + 1);
 	crystalyellow = Math.floor(Math.random() * (12) + 1);
 	result = 0;
 	$(".currentnumber").html(result);

};

//calling the function to start the game when the page loads
start();


$(".score").html(totalscore);
$(".chances").html(chancesleft);

$("img").hover(function(){
       $(this).css("opacity", "0.7");
        }, function(){
       $(this).css("opacity", "1");
   });


});



