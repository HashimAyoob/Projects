var ranGen1 = Math.random();
ranGen1 = Math.floor((ranGen1*6)+1);


var ranGen2 = Math.random();
ranGen2 = Math.floor((ranGen2*6)+1);

var imgno1 = "./images/dice"+ ranGen1 +".png";
var imgno2 = "./images/dice"+ ranGen2 +".png";

if(ranGen1===ranGen2){
    document.querySelector("h1").innerHTML="Draw!!";
    document.querySelector(".p1").src=imgno1;
    document.querySelector(".p2").src=imgno2;
    
}
else if(ranGen1<ranGen2){
    document.querySelector("h1").innerHTML="Player 2 Wins!✅";
    document.querySelector(".p1").src=imgno1;
    document.querySelector(".p2").src=imgno2;
}
else{
    document.querySelector("h1").innerHTML="✅Player 1 Wins!";
    document.querySelector(".p1").src=imgno1;
    document.querySelector(".p2").src=imgno2;
}