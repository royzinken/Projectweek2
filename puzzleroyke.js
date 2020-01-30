function play() {

    setTimeout(setcolor0, 1000)
    setTimeout(setcolor1, 2500)
    setTimeout(setcolor2, 4000)
    setTimeout(setcolor3, 5500)
    setTimeout(setcolor4, 7000)
    setTimeout(setcolor5, 8500)
    setTimeout(setcolor6, 9000)
    setTimeout(setcolor7, 15000)
    setTimeout(setWhite,  20000)
}

function setcolor0() {
    document.getElementById("container").style.backgroundColor = (computerShuffle[0]);
}

function setcolor1() {
    document.getElementById("container").style.backgroundColor = (computerShuffle[1]);
}

function setcolor2() {
    document.getElementById("container").style.backgroundColor = (computerShuffle[2]);
}

function setcolor3() {
    document.getElementById("container").style.backgroundColor = (computerShuffle[3]);
}

function setcolor4() {
    document.getElementById("container").style.backgroundColor = (computerShuffle[4]);
}

function setcolor5() {
    document.getElementById("container").style.backgroundColor = (computerShuffle[5]);
}

function setcolor6() {
    document.getElementById("container").style.backgroundColor = (computerShuffle[6]);
}

function setcolor7() {
    document.getElementById("container").style.backgroundColor = (computerShuffle[7]);
}

function setWhite() {
    document.getElementById("container").style.backgroundColor = "whitesmoke";
}



var computerShuffle = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "Grey"].sort(function () {
    return .5 - Math.random();
});

var userChoiceOne = [];
var x = 0;


function btn_1() {
    userChoiceOne.push("Red");
    if (x <= 7) {
        x++;
        console.log(userChoiceOne + (" ") + x);
    } else {
        if (computerShuffle === userChoiceOne) {
            console.log("luck");
        } else {
            console.log("fail")
        }
    }
}

function btn_2() {
    userChoiceOne.push(" Orange");
    if (x <= 7) {
        x++;
        console.log(userChoiceOne + (" ") + x);
    } else {
        if (computerShuffle === userChoiceOne) {
            console.log("luck");
        } else {
            console.log("fail")
        }
    }
}

function btn_3() {
    userChoiceOne.push(" Yellow");
    if (x <= 7) {
        x++;
        console.log(userChoiceOne + (" ") + x);
    } else {
        if (computerShuffle === userChoiceOne) {
            console.log("luck");
        } else {
            console.log("fail")
        }
    }
}

function btn_4() {
    userChoiceOne.push(" Green");
    if (x <= 7) {
        x++;
        console.log(userChoiceOne + (" ") + x);
    } else {
        if (computerShuffle === userChoiceOne) {
            console.log("luck");
        } else {
            console.log("fail")
        }
    }
}

function btn_5() {
    userChoiceOne.push(" Blue");
    if (x <= 7) {
        x++;
        console.log(userChoiceOne + (" ") + x);
    } else {
        if (computerShuffle === userChoiceOne) {
            console.log("luck");
        } else {
            console.log("fail")
        }
    }
}

function btn_6() {
    userChoiceOne.push(" Purple");
    if (x <= 7) {
        x++;
        console.log(userChoiceOne + (" ") + x);
    } else {
        if (computerShuffle === userChoiceOne) {
            console.log("luck");
        } else {
            console.log("fail")
        }
    }
}

function btn_7() {
    userChoiceOne.push(" Pink");
    if (x <= 7) {
        x++;
        console.log(userChoiceOne + (" ") + x);
    } else {
        if (computerShuffle === userChoiceOne) {
            console.log("luck");
        } else {
            console.log("fail")
        }
    }
}

function btn_8() {
    userChoiceOne.push(" Grey");
    if (x <= 7) {
        x++;
        console.log(userChoiceOne + (" ") + x);
    } else {
        if (computerShuffle === userChoiceOne) {
            console.log("luck");
        } else {
            console.log("fail")
        }
    }
}









function off() {
    console.log(computerShuffle)

    document.getElementById("overlay").style.display = "none";
}