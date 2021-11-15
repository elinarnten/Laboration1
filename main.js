
window.onload = main;

document.getElementById("fearHeights").style.display = 'none';

function nameResult(){
const result = document.getElementById("userName").value;
document.getElementById("demo").innerHTML = 'Hej ' + result + '! Vad roligt att du ska följa med på vår guide!';
document.getElementById("introduce").style.display = 'none';
 

}

function fearQuestion() {
    const yes = document.getElementById("yes");
    const no = document.getElementById("no");
    
    if (yes.clicked == true) {
        document.getElementById("greetings").style.display = 'none';
        
    } else if (no.clicked == true) {

    }

}