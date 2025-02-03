var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(character.classList != "animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}
var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("Nah Fashil");
        showRestartButton();
    }
},10);
function showRestartButton() {
    var restartButton = document.createElement("button");
    restartButton.innerText = "Recommencer";
    restartButton.style.position = "absolute";
    restartButton.style.top = "50%";
    restartButton.style.left = "50%";
    restartButton.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(restartButton);

   
    restartButton.onclick = function() {
        restartGame();
        document.body.removeChild(restartButton); 
    };
}

function restartGame() {
    gameOver = false;
    block.style.animation = "block 1s infinite linear"; 
    block.style.display = "block"; 
    block.style.left = "480px";

    character.style.bottom = "0px";
}
