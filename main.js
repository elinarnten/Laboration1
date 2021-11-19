/** Background images with variabel */
const marsRobotBackground = "url('IMG/mars-robot.jpg')";
const planetMarsBackground = "url('IMG/planet-mars.jpg')";
const planetMoonBackground = "url('IMG/planet-moon.jpg')";
const earthBackground = "url('IMG/nasa-earth.jpg')";

/** Execute the script whilst the web page has loaded its content */
window.onload = main;

/**
 * When the webpage content is complete it will start the script
 */
function main() {  
    hide();
    addEventListeners();
}
/**
 * This functions hides the other functions on the start screen.
 */
function hide() {
   document.getElementById("fearHeights").style.display = 'none';
   document.getElementById("noEnter").style.display = 'none';
   document.getElementById("enterAccess").style.display = 'none';
   document.getElementById("inSpace").style.display = 'none';
}
/**
 * This function is the start function. With the text and input from html
 * the function will then call the next function.
 */
function addEventListeners() {
    const submitName = document.getElementById("submit-name")
    submitName.onclick = getNameResult;
}
/**
 * The input value will be written out with a new text container. 
 */
function getNameResult(){
    const result = document.getElementById("userName").value;
    document.getElementById("demo").innerHTML = 'Hej ' + result + '! Vad roligt att du ska följa med på vår guidade tur!'; 
    document.getElementById("introduce").style.display = 'none'; 
    document.getElementById("fearHeights").style.display = null; 
}
/**
 * If this function get called a new text container will be shown
 */
function getFearOfHeightsAnswerYes() {
    document.getElementById("greetings-text").style.display = 'none'; 
    document.getElementById("noEnter").style.display = null;
}
/**
 * If this function get called a new text container will be shown
 */
function getFearOfHeightsAnswerNo() {
    document.getElementById("greetings-text").style.display = 'none'; 
    document.getElementById("enterAccess").style.display = null; 
}
/**
 * A menu is shown where the user can select planets depending on which button its
 * click on from html file.
 * Display a new text container.
 * Display a new background  
 */
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
    document.getElementById('Bye').style.display = 'none';
}
/** 
 * If the user select button Mars it will call this function
 * Display a new text container.
 * Display a new background
 * A button that will take the user back to menu(selectPlanet()) */
function getMars() {
    const background = document.getElementById('main-background');
    background.style.backgroundImage = planetMarsBackground;
    document.getElementById('planet-mars').style.display = null;
    document.getElementById('select-planet').style.display = 'none';
}
/** 
 * In this function will save the input from the user in a value.
 * Display a new text container 
 * Display a new background */
function getMarsRobot() {
    const background = document.getElementById('main-background');
    background.style.backgroundImage = marsRobotBackground;
    document.getElementById('planet-mars-robot').style.display = null;
    document.getElementById('planet-mars').style.display = 'none';
    document.getElementById('next').style.display = null;
    const result = document.getElementById('submit-input')
    result.onclick = getRobotAnswer;
}
/** 
 * This function will write out a input value
 * A button that will take the user back to menu(selectPlanet()) */
function getRobotAnswer() {
    const result = document.getElementById('text-input-robot').value;
    document.getElementById('human-respond').innerHTML = 'Du: ' + result;  
    document.getElementById('planet-mars-robot').style.display = 'none';
    document.getElementById('robotRespond').style.display = null;
    document.getElementById('next').style.display = null;

}
/**
 * If the user select button Pluto it will call this function
 * Display a new text container. 
 * A button that will take the user back to menu(selectPlanet()) */
function getPluto() {
    document.getElementById('planet-pluto').style.display = null;
    document.getElementById('select-planet').style.display = 'none';
}
/**
 * If the user select button Moon it will call this function
 * Display a new background with a audio  
 * A button that will take the user back to menu(selectPlanet())*/
function getMoon() {
    const background = document.getElementById('main-background');
    background.style.backgroundImage = planetMoonBackground;
    document.getElementById('planet-moon').style.display = null;
    document.getElementById('select-planet').style.display = 'none';
    document.getElementById('next').style.display = null;
} 
/**
 * Display 'Bye' gives the user a goodbye message written from html file.
 * Display a new text container. 
 */
function getBye() {
    document.getElementById('Bye').style.display = null;
    document.getElementById('select-planet').style.display = 'none';
    document.getElementById('planet-moon').style.display = 'none';
    document.getElementById('planet-mars').style.display = 'none';
    document.getElementById('planet-mars-robot').style.display = 'none';
    document.getElementById('robotRespond').style.display = 'none';
    document.getElementById('planet-pluto').style.display = 'none';
    
}