function play() {
    setTimeout(setGreen, 1000)
    setTimeout(setRed, 2000)
    setTimeout(setBlue, 3000)
    setTimeout(setOrange, 4000)
    setTimeout(setWhite, 5000)
    document.getElementById("container").style.backgroundImage = "whitesmoke";

}

function setGreen() {
    document.getElementById("container").style.backgroundColor = "green";
}

function setRed() {
    document.getElementById("container").style.backgroundColor = "red";
}

function setBlue() {
    document.getElementById("container").style.backgroundColor = "blue";
}

function setOrange() {
    document.getElementById("container").style.backgroundColor = "orange";
}

function setWhite() {
    document.getElementById("container").style.backgroundColor = "whitesmoke";
}




var devChoiceOne = ["Blue", "Orange", "Green", "Purple", "Grey"];
var userChoiceOne = [];
var awnsersOne = x = 0;



function help meee (){
    x+=1;
}
function limitClicks() {
    

if(x >= 4){
    he.innerHTML = x-=4;
    x+=2
}
else{
    alert("You Need 50 To Do That")
}
}



function btn_1() {
    userChoiceOne.push("Red");
    document.getElementById("hello").innerHTML = x++;
}

function btn_2() {
    userChoiceOne.push("Orange");
}

function btn_3() {
    userChoiceOne.push("Yellow");
}

function btn_4() {
    userChoiceOne.push("Green");
}

function btn_5() {
    userChoiceOne.push("Blue");
}

function btn_6() {
    userChoiceOne.push("Purple");
}

function btn_7() {
    userChoiceOne.push("Pink");
}

function btn_8() {
    userChoiceOne.push("Grey");
}








  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }
