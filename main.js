
window.onload = main;
let countdown;
let seconds = 10;

function main() {  
    hide();
    addEventListeners();
}

function hide() {
   document.getElementById("fearHeights").style.display = 'none';
   document.getElementById("noEnter").style.display = 'none';
   document.getElementById("enterAcess").style.display = 'none';

}

function addEventListeners() {
    const submitName = document.getElementById("submit-name")
    submitName.onclick = getNameResult;
}

function getNameResult(){
    const result = document.getElementById("userName").value;
    document.getElementById("demo").innerHTML = 'Hej ' + result + '! Vad roligt att du ska följa med på vår guide!'; 
    document.getElementById("introduce").style.display = 'none'; 
    document.getElementById("fearHeights").style.display = null; 
}

function fearOfHeightsAnswerYes() {
    //const yes = document.getElementById("yes");
    document.getElementById("greetings").style.display = 'none'; 
    document.getElementById("noEnter").style.display = null;
    

}
function fearOfHeightsAnswerNo() {
    document.getElementById("greetings").style.display = 'none'; 
    document.getElementById("enterAcess").style.display = null;

  
}

/*function setCountDown() {
    if (!countdown) {
        countdown = setInterval(handleTick, seconds);
    }
    else (seconds === 0) {
        document.getElementById("greetings").style.display = null;
    }
}*/
//hur startar man allt? 
//hur döljer man visar man funktioner? 
//Hur sätter man igång funktioner?
//if satsen