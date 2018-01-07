/*FONA MAINJA*/

let background = document.querySelector(".bg");
let imgNumber = 1;

setInterval(swapBackgrounds, 5000)
function swapBackgrounds(){
	imgNumber++;
	background.style.backgroundImage='url('+imgNumber+'.jpg)';

    if (imgNumber == 4){
	imgNumber = 0;
             }
   }

/* ROZA MAKONIS VAI SAXOPHONE*/


let cloud = document.querySelector(".cloud")
cloud.addEventListener('click', fade);


function fade(){
    console.log("addfade");
    cloud.classList.add('faded');

}

let sax = document.querySelector(".sax")
sax.addEventListener('click', playSound);

function playSound(){
     let audio = document.getElementById("audio");
     audio.play();
}

let baltais1 = document.querySelector(".couds");

baltais1.addEventListener('click', izfeido);
console.log("izfeido");

function izfeido(){
	baltais1.classList.add('opacity');
}

let baltais2 = document.querySelector(".couds2");

baltais2.addEventListener('click', izfeido2);
console.log("izfeido");

function izfeido2(){
	baltais1.classList.add('opacity2');
}

