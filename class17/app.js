var char1 = document.getElementById("char1");
var char2 = document.getElementById("char2");

var pos1X = 50;
var pos1Y = 0;
var isJumping1 = false;

var pos2X = 800;
var pos2Y = 0;
var isJumping2 = false;

document.addEventListener("keydown", function(event) {
    console.log("Pressed Key Code: " + event.keyCode);

    if (event.keyCode === 39 && pos1X < 1300) {
        pos1X += 15;
        if (pos1X > 1000) {
            pos1X = 1000;
        }
        char1.style.left = pos1X + "px";
        char1.style.transform = "scaleX(1)"; 
        
        char1.src = "https://www.fightersgeneration.com/news2023/char3/andy-bogard-realbout2-special.gif";
        setTimeout(function() {
            char1.src = "./assets/img/andy-fixtaunt.gif";
        }, 1000);
    }

    if (event.keyCode === 37 && pos1X > 0) {
        pos1X -= 15;
        char1.style.left = pos1X + "px";
        char1.style.transform = "scaleX(-1)"; 
        
        char1.src = "https://www.fightersgeneration.com/np5/kof12/2/andy12-kick2.gif";
        setTimeout(function() {
            char1.style.transform = "scaleX(1)";
            char1.src="./assets/img/andy-fixtaunt.gif";
        }, 1000);
    }

    if (event.keyCode === 38 && !isJumping1) {
        isJumping1 = true;
        pos1Y = 150;
        char1.style.bottom = (50 + pos1Y) + "px";

        setTimeout(function() {
            pos1Y = 0;
            char1.style.bottom = "50px";
            isJumping1 = false;
        }, 500);
    }

    if (event.keyCode === 32) {
        char1.src = "https://www.fightersgeneration.com/characters/andy-super.gif";
        char1.style.height = "240px";

        setTimeout(function() {
            char1.src = "./assets/img/andy-fixtaunt.gif";
            char1.style.height = "200px";
        }, 4000);
    }
    if (event.keyCode === 68 && pos2X < 1300) {
        pos2X += 15;
        char2.style.left = pos2X + "px";
        char2.style.transform = "scaleX(-1)"; 
        
        char2.src = "https://www.fightersgeneration.com/characters/adelhied-run-fix.gif";
        setTimeout(function() {
            char2.style.transform="scaleX(1)"
            char2.src = "https://www.fightersgeneration.com/characters/adel-rugal.gif";
        }, 1000);
    }

    if (event.keyCode === 65 && pos2X > 0) {
        pos2X -= 15;
        char2.style.left = pos2X + "px";
        char2.style.transform = "scaleX(-1)"; 
        
        char2.src = "https://www.fightersgeneration.com/np7/char/gifs/adelheid/attacks/adelheid-a2.gif";
        setTimeout(function() {
            char2.style.transform = "scaleX(1)";
            char2.src = "https://www.fightersgeneration.com/characters/adel-rugal.gif";
        }, 1000);

    }

    if (event.keyCode === 87 && !isJumping2) {
        isJumping2 = true;
        pos2Y = 150;
        char1.style.height="240px"
        char2.style.transform="scaleX(-1)"
        char2.src="https://www.fightersgeneration.com/np7/char/gifs/adelheid/attacks/adelheid-air2.gif"
        char2.style.bottom = (50 + pos2Y) + "px";

        setTimeout(function() {
            pos2Y = 0;
            char2.style.bottom = "50px";
            char1.style.height="200px"
            char2.style.transform="scaleX(1)"
            char2.src ="https://www.fightersgeneration.com/characters/adel-rugal.gif";
            isJumping2 = false;
        }, 1000);
    }

    if (event.keyCode === 70) {
        char2.style.transform="scaleX(-1)"
        char2.src = "https://www.fightersgeneration.com/characters/adel-super.gif";
        char2.style.height = "240px";

        setTimeout(function() {
            char2.style.transform="scaleX(1)"
            char2.src ="https://www.fightersgeneration.com/characters/adel-rugal.gif";
            char2.style.height = "200px";
        }, 3000);
    }
});