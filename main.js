

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
   

}

function addEventListeners() {
    const submitName = document.getElementById("submit-name")
    submitName.onclick = getNameResult;
}

function getNameResult(){
    const result = document.getElementById("userName").value;
    document.getElementById("demo").innerHTML = 'Hej ' + result + '! Vad roligt att du ska följa med på vår guidade tur!'; 
    document.getElementById("introduce").style.display = 'none'; 
    document.getElementById("fearHeights").style.display = null; 
}

function fearOfHeightsAnswerYes() {
    document.getElementById("greetings").style.display = 'none'; 
    document.getElementById("noEnter").style.display = null;
    

}
function fearOfHeightsAnswerNo() {
    document.getElementById("greetings").style.display = 'none'; 
    document.getElementById("enterAccess").style.display = null;
  
}
function selectPlanet() {
    document.getElementById('inSpace').style.display = null;
    document.getElementById('space-background').style.display = null;
    document.getElementById('select-planet').style.display = null;
    document.getElementById('start-background').style.display = 'none';
    document.getElementById('enterAccess').style.display = 'none';
    document.getElementById('moon-background').style.display = 'none';
    document.getElementById('planet-moon').style.display = 'none';
    document.getElementById('mars-background').style.display = 'none';
    document.getElementById('planet-mars').style.display = 'none';
    document.getElementById('planet-mars-robot').style.display = 'none';
    document.getElementById('mars-robot-background').style.display = 'none';
    document.getElementById('planet-pluto').style.display = 'none';
    
}

function getMars() {
    document.getElementById('planet-mars').style.display = null;
    document.getElementById('mars-background').style.display = null;
    document.getElementById('space-background').style.display = 'none';
    document.getElementById('select-planet').style.display = 'none';
}
function getMarsRobot() {
    document.getElementById('planet-mars-robot').style.display = null;
    document.getElementById('mars-robot-background').style.display = null;
    document.getElementById('mars-background').style.display = 'none';
    document.getElementById('planet-mars').style.display = 'none';
    const textInput = document.getElementById('submit-input')
    textInput.onclick = getRobotAnswer;

}
function getRobotAnswer() {
    const result = document.getElementById('text-input').value;
    console.log(result);
}

function getPluto() {
    document.getElementById('planet-pluto').style.display = null;
    document.getElementById('mars-robot-background').style.display = 'none';
    document.getElementById('space-background').style.display = 'none';
    document.getElementById('select-planet').style.display = 'none';
}

function getMoon() {
    document.getElementById('planet-moon').style.display = null;
    document.getElementById('moon-background').style.display = null;
    document.getElementById('space-background').style.display = 'none';
    document.getElementById('select-planet').style.display = 'none';
    document.getElementById('next').style.display = null;
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
//klappa mars roboten