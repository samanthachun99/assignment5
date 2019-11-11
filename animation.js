//create raindrops around screen
function makeRain() {
    for (i = 0; i < 30; i++) {
        var rain = document.createElement('div');
        rain.style.left = Math.random() * 2000 + "px";
        rain.style.top = Math.random() * 800 + "px";
        rain.classList.add('rain');
        rain.id = i;
        var container =
        document.getElementById('container');
        container.appendChild(rain);
    }
}
makeRain();

function RandomDropTBgColor(){
    var drop = document.getElementById("triangle");
    var circle = document.getElementById("circle")
    var random = Math.random();
    console.log(random);
    if (random > 0.5) {
        drop.style.borderLeft = "130px solid transparent";
        drop.style.borderRight = "130px solid transparent";
        drop.style.borderBottom = "200px solid blue";
        circle.style.backgroundColor = "blue"
    }
    else{
        drop.style.borderLeft = "130px solid transparent";
        drop.style.borderRight = "130px solid transparent";
        drop.style.borderBottom = "200px solid #00c2ff";
        circle.style.backgroundColor = "#00c2ff"
    }
}
RandomDropTBgColor();

function RandomBgColor(){
    //first get the body
    var body = document.getElementById("body");
    var container = document.getElementById("container")
    var rneg = document.getElementById("r-neg");
    var aneg = document.getElementById("a-neg");
    var nneg = document.getElementById("n-neg");
    var nneg2 = document.getElementById("n-neg2");
    var random = Math.random();
    console.log(random);
    if (random < 0.5) {
        body.style.backgroundColor = "black";
        rneg.style.backgroundColor = "black";
        aneg.style.backgroundColor = "black";
        nneg.style.backgroundColor = "black";
        nneg2.style.backgroundColor = "black";
    }
    else {
        body.style.backgroundColor = "#2b2333";
        rneg.style.backgroundColor = "#2b2333";
        aneg.style.backgroundColor = "#2b2333";
        nneg.style.backgroundColor = "#2b2333";
        nneg2.style.backgroundColor = "#2b2333";
    }
}
RandomBgColor();


//animation for letter I
var letteri = document.getElementById("letteri");

letteri.addEventListener("click", AddAnimation);

//to reset, we must remove the animation class when mouse is done clicking

letteri.addEventListener("mouseup", RemoveAddClass);

function RemoveAddClass() {
    setTimeout(RemoveAnimation, 5000);
}

function RemoveAnimation() {
    letteri.classList.remove("animation");
}

function AddAnimation() {
    //adding animation class to sqr
    letteri.classList.add("animation");
    console.log(letteri, "elongate letter i")
}

//animation for letter R
var letterr = document.getElementById("letterr");

letterr.addEventListener("click", AddAnimation2);
letterr.addEventListener("mouseup", RemoveAddClass);

function RemoveAddClass() {
    setTimeout(RemoveAnimation2, 5000);
}

function RemoveAnimation2() {
    letterr.classList.remove("animation2");
}

function AddAnimation2() {
    //adding animation class to sqr
    letterr.classList.add("animation2");
    console.log(letterr, "elongate letter r")
}

//animation for letter A
var lettera = document.getElementById("lettera");

lettera.addEventListener("click", AddAnimation3);
lettera.addEventListener("mouseup", RemoveAddClass);

function RemoveAddClass() {
    setTimeout(RemoveAnimation3, 5000);
}

function RemoveAnimation3() {
    lettera.classList.remove("animation3");
}

function AddAnimation3() {
    //adding animation class to sqr
    lettera.classList.add("animation3");
    console.log(lettera, "elongate letter a")
}

//animation for letter N
var lettern = document.getElementById("lettern");

lettern.addEventListener("click", AddAnimation4);
lettern.addEventListener("mouseup", RemoveAddClass);

function RemoveAddClass() {
    setTimeout(RemoveAnimation4, 8000);
}

function RemoveAnimation4() {
    lettern.classList.remove("animation4");
}

function AddAnimation4() {
    //adding animation class to sqr
    lettern.classList.add("animation4");
    console.log(lettern, "elongate letter n")
}
