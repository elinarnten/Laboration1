window.onload = main;

const marsRobotBackground = "url('IMG/mars-robot.jpg')";
const planetMarsBackground = "url('IMG/planet-mars.jpg')";
const planetMoonBackground = "url('IMG/planet-moon.jpg')";
const earthBackground = "url('IMG/nasa-earth.jpg')";

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
    document.getElementById("greetings-text").style.display = 'none'; 
    document.getElementById("noEnter").style.display = null;
}

function fearOfHeightsAnswerNo() {
    document.getElementById("greetings-text").style.display = 'none'; 
    document.getElementById("enterAccess").style.display = null; 
}

function selectPlanet() {
    const background = document.getElementById('main-background');
    background.style.backgroundImage = earthBackground;
    document.getElementById('inSpace').style.display = null;
    document.getElementById('select-planet').style.display = null;
    document.getElementById('enterAccess').style.display = 'none';
    document.getElementById('planet-moon').style.display = 'none';
    document.getElementById('planet-mars').style.display = 'none';
    document.getElementById('planet-mars-robot').style.display = 'none';
    document.getElementById('robotRespond').style.display = 'none';
    document.getElementById('planet-pluto').style.display = 'none';
    
}

function getMars() {
    const background = document.getElementById('main-background');
    background.style.backgroundImage = planetMarsBackground;
    document.getElementById('planet-mars').style.display = null;
    
    document.getElementById('select-planet').style.display = 'none';
}

function getMarsRobot() {
    const background = document.getElementById('main-background');
    background.style.backgroundImage = marsRobotBackground;
    document.getElementById('planet-mars-robot').style.display = null;
    document.getElementById('planet-mars').style.display = 'none';
    document.getElementById('next').style.display = null;
    const result = document.getElementById('submit-input')
    result.onclick = getRobotAnswer;
}

function getRobotAnswer() {
    const result = document.getElementById('text-input-robot').value;
    console.log(result);
    const background = document.getElementById('main-background');
    background.style.backgroundImage = marsRobotBackground;
    document.getElementById('planet-mars-robot').style.display = 'none';
    document.getElementById('robotRespond').style.display = null;
    document.getElementById('next').style.display = null;

}

function getPluto() {
    document.getElementById('planet-pluto').style.display = null;
    document.getElementById('select-planet').style.display = 'none';
}

function getMoon() {
    const background = document.getElementById('main-background');
    background.style.backgroundImage = planetMoonBackground;
    document.getElementById('planet-moon').style.display = null;
    document.getElementById('select-planet').style.display = 'none';
    document.getElementById('next').style.display = null;
}  