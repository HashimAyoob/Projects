let gameStart = true;
var colors = ["green","red","yellow","blue"];
let level = 1;
let sequence = [];
let userInput = [];
$(document).on("keydown", function (e) {
  if (gameStart === true && (e.key === "a" || e.key === "A")) {
  
    gameStart = false;
    let color = colorGenerator();
    $("#level-title").text("Level 1");
    sequence.push(color);
    animationsAndSound(color, 1);
    gameLogic();
  }
});

function colorGenerator() {
  let randomNumber = Math.floor(Math.random() * 4);
  
  return colors[randomNumber];
}

function animationsAndSound(color, game) {
  if (game === "over") {
    $("body").toggleClass("game-over");
    setTimeout((f) => $("body").toggleClass("game-over"), 100);
    let audio = new Audio(`./sounds/wrong.mp3`);
    audio.play();
  } else if (game == 1) {
    $("." + color).toggleClass("nextsequence");
    setTimeout((f) => $("." + color).toggleClass("nextsequence"), 100);
    let audio = new Audio(`./sounds/${color}.mp3`);
    audio.play();
  } else {
    $("." + color).toggleClass("pressed");
    setTimeout((f) => $("." + color).toggleClass("pressed"), 100);
    let audio = new Audio(`./sounds/${color}.mp3`);
    audio.play();
  }
}
function gameLogic() {
  $(document).on("click", (e) => {
    if (
      e.target.id === "green" ||
      e.target.id === "red" ||
      e.target.id === "blue" ||
      e.target.id === "yellow"
    ) {
      userInput.push(e.target.id);
      animationsAndSound(e.target.id);
    }

    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] !== sequence[i]) {
        let game = "over";
        animationsAndSound(e.target.id, game);
        gameStart = true;
        $("#level-title").text("Game Over,Press A to Restart");
        sequence = [];

        break;
      }
    }
    if (userInput.length === sequence.length) {
      levelClear = true;
      userInput = [];
    }
    setTimeout(function () {
      if (levelClear === true && gameStart === false) {
        let color = colorGenerator();
        sequence.push(color);
        animationsAndSound(color, 1);
        levelClear = false;
        level++;
        $("#level-title").text("Level " + level);
      }
    }, 1000);
  });
}