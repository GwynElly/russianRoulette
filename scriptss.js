//------------------------------------------------------------
//Add dark and white themes in app
var lightthemejs = "Theme/lightTheme.css"
var darkthemejs = "Theme/darkTheme.css"
var link = document.getElementById("theme-link");
var currTheme = link.getAttribute("href");
var theme = "";

function changethemeD(){ 
let dark = document.getElementById('darkthemein');
currTheme = darkthemejs;
link.setAttribute("href", currTheme);
}

function changethemeL(){ 
    let light = document.getElementById('lightthemein');
    currTheme = lightthemejs;
    link.setAttribute("href", currTheme);
    }
//------------------------------------------------------------

//Русская рулетка

var  shot = [0, 1, 2, 3, 4, 5];
var alive = [0, 1, 2, 3, 4, 5];


function valueinput() {
  return document.getElementById('selectbullet').value;
}

function arraybulletsVoll() {
    let inputvalue = valueinput();
    let arrbullet = [];    

     for (let i = 0; i != inputvalue; i++) {
         arrbullet[i] =  i + 1;
    }
    console.log(inputvalue);
    console.log(arrbullet);
}


function tryPuf() {
var rand1 = Math.floor(Math.random() * shot.length);
var rand2 = Math.floor(Math.random() * alive.length);
let textat = document.getElementById('alertt');

// Учитывается что в барабане револьвера 1 пуля из 6 возможных. 
let chancedead = 5 / 6 * 100;
let chancealive =  1 / 6 * 100;

if (rand1 == rand2) {
//Шанс округляется до ближайшего целого значения (3.1 = 3   3.8 = 4)
    textat.innerHTML = 'U DIE! <br>U chanse dead: ' + Math.round(chancealive) + '%' 
}
else {
    textat.innerHTML = 'U ALIVE! <br>U chanse alive: ' + Math.round(chancedead) +'%'
   }
   
   }