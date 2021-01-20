//------------------------------------------------------------
//Add dark and white themes in app
var lightthemejs = "Theme/lightTheme.css"
var darkthemejs = "Theme/darkTheme.css"
var link = document.getElementById("theme-link");
var currTheme = link.getAttribute("href");
var theme = "";

function changethemeD(){ 
currTheme = darkthemejs;
link.setAttribute("href", currTheme);
}

function changethemeL(){ 
    currTheme = lightthemejs;
    link.setAttribute("href", currTheme);
    }
//------------------------------------------------------------
//Русская рулетка

function valueinput() {
    let bulletpickup = document.getElementById('selectbullet').value;
  return bulletpickup;
}

function arraybulletsVoll() {
    let inputvalue = valueinput();
    let arrbullet = [];    

     for (let i = 0; i != inputvalue; i++) {
         arrbullet[i] =  i + 1; //Заполняем массив (барабан) указанным кол-вом пуль 
    }
    return arrbullet;
}

function tryPuf() {
    let randomBulletAlive = Math.floor(Math.random() * 5 + 1); //*5 + 1 чтобы убрать 0 //Отверстие в барабане которое будет использовано для выстрела. Если в нем ничего нет мы живы.
    let texresult = document.getElementById('ResultShotCheck');
    let inputValueBullet = arraybulletsVoll();
    var audioBabah = new Audio("E:/Discord_lol/russianRoulette/Audio/audio_file_babah.mp3");
    var audioChik = new Audio("E:/Discord_lol/russianRoulette/Audio/audio_file_chik.mp3");
    let chanceAlive = 6 - valueinput(); //Получаем коэффициент - 248 / 24 = 10.333 Получаем проценты - 100% / 10.333 = 9.677 %
    let chanceDead = 6 - chanceAlive; 
    let chanceprocA = 100 / (6 / chanceAlive);
    let chanceprocD = 100 / (6 / chanceDead);

        if(randomBulletAlive = inputValueBullet[(randomBulletAlive - 1)]) {
            texresult.innerHTML = 'U DIE xD <br> Шанс умереть был: ' +
             + Math.round(chanceprocD) + ' %';
            audioBabah.play();
        } 
         else {
             texresult.innerHTML = 'U ALIVE! :)) <br> Шанс выжить был: ' + Math.round(chanceprocA) + ' %';
             audioChik.play();
         }
        }