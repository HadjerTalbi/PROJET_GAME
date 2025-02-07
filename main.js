var character = document.getElementById("character");
var block = document.getElementById("block");
let t=0;
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
    t++;
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("Nah Fashil");
        showRestartButton();
    }else{if(t==6000){
        block.style.animation = "none";
        block.style.display = "none";
        alert("Great u won");
        showRestartButton();}
         }
},10);

function showRestartButton() {
    var restartButton = document.createElement("button");
    restartButton.innerText = "Play again";
    restartButton.style.position = "absolute";
    restartButton.style.top = "50%";
    restartButton.style.left = "50%";
    restartButton.style.transform = "translate(-50%, -50%)";
    restartButton.style.padding = "15px 30px";
    restartButton.style.fontSize = "18px"; 
    restartButton.style.fontWeight = "bold"; 
    restartButton.style.backgroundColor = "#4CAF50"; 
    restartButton.style.color = "white"; 
    restartButton.style.border = "none"; 
    restartButton.style.borderRadius = "10px"; 
    restartButton.style.cursor = "pointer"; 
    restartButton.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"; 
    restartButton.style.transition = "all 0.3s ease"; 

    restartButton.onmouseover = function() {
        restartButton.style.backgroundColor = "#45a049"; 
        restartButton.style.transform = "translate(-50%, -50%) scale(1.1)"; 
    };

    restartButton.onmouseout = function() {
        restartButton.style.backgroundColor = "#4CAF50"; 
        restartButton.style.transform = "translate(-50%, -50%) scale(1)";
    };

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
    t=0;
    character.style.bottom = "0px";
}
