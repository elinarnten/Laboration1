

window.onload = main;


function main() {  
    hide();
    addEventListeners();
}

function hide() {
   document.getElementById("fearHeights").style.display = 'none';
   document.getElementById("noEnter").style.display = 'none';
   document.getElementById("enterAccess").style.display = 'none';
   document.getElementById("inSpace").style.display = 'none';
   document.getElementById('enterAccess').style.display = 'none';

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
    document.getElementById("greetings").style.display = 'none'; 
    document.getElementById("noEnter").style.display = null;
    const goBack = document.getElementById("go-Back")
    goBack.onclick = main;

}
function fearOfHeightsAnswerNo() {
    document.getElementById("greetings").style.display = 'none'; 
    document.getElementById("enterAccess").style.display = null;
  
}
function selectPlanet() {
    document.getElementById('inSpace').style.display = null;
    document.getElementById('start-background').style.display = 'none';
    document.getElementById('enterAccess').style.display = 'none';
    
    
}

/*function rocketCountDown() {
    for (var i = 10; i < 10; i--) {
        if (i > 0) {
            console.log(i);
        }
        else if (i < 0 ) {
            console.log("STOP");
        }
    }
}*/
//hur startar man allt? 
//hur döljer man visar man funktioner? 
//Hur sätter man igång funktioner?
//if satsen