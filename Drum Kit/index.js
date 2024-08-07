document.addEventListener("keydown", function(event){
  
    playsound(event.key);
    animation(event.key);
   
});

var numOfDrumButtons = document.querySelectorAll(".drum").length;
for (let n = 0; n <= numOfDrumButtons; n++) {
  document.querySelectorAll(".drum")[n].addEventListener("click", function(){
    var buttonPress = this.innerHTML;
    playsound(buttonPress);
    animation(buttonPress);
    
  });
  

}


    

function playsound (keypass){

switch (keypass){

    case "w":
        var tom1 = new Audio("./sounds/tom-1.mp3");
      
        tom1.play();

        break;
    
    case "a":
        var tom1 = new Audio("./sounds/tom-2.mp3");
        tom1.play();
        break;
    
    case "s":
        var tom1 = new Audio("./sounds/tom-3.mp3");
        tom1.play();
        break;
    
    case "d":
        var tom1 = new Audio("./sounds/tom-4.mp3");
        tom1.play();
        break;

    case "j":
        var tom1 = new Audio("./sounds/snare.mp3");
        tom1.play();
        break;

    case "k":
        var tom1 = new Audio("./sounds/kick-bass.mp3");
        tom1.play();
        break;
    
    case "l":
        var tom1 = new Audio("./sounds/crash.mp3");
        tom1.play();
        break;

    default:
        console.log(buttonTag);
        break;
    
}
}
function animation(currentKey){
    var aniSelector = document.querySelector("." + currentKey);
    aniSelector.classList.add("pressed");
    setTimeout(function(){
        aniSelector.classList.remove("pressed");
    },100);
}
