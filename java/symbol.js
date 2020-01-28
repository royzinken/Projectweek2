var randomizer = Math.floor(Math.random() * 4 + 1);
var tdentry = document.getElementsByTagName("td");

function assign() {
    switch(randomizer) {
        case 1:
            tdentry[0].setAttribute("id", "");
            tdentry[0].innerHTML = "<img src='./images/symbol 15.png' class='img'>";
            tdentry[1].setAttribute("id", "");
            tdentry[1].innerHTML = "<img src='./images/symbol 2.png' class='img'>";
            tdentry[2].setAttribute("id", "2");
            tdentry[2].innerHTML = "<img src='./images/symbol 3.png' id='2' class='img'>";
            tdentry[3].setAttribute("id", "correct1");
            tdentry[3].innerHTML = "<img src='./images/symbol.png' id='correct1' class='img'>";
            tdentry[4].setAttribute("id", "");
            tdentry[4].innerHTML = "<img src='./images/symbol 17.png' class='img'>";
            tdentry[5].setAttribute("id", "3");
            tdentry[5].innerHTML = "<img src='./images/symbol 6.png' id='3' class='img'>";
            tdentry[6].setAttribute("id", "4");
            tdentry[6].innerHTML = "<img src='./images/symbol 7.png' id='4' class='img'>";
            break;
        case 2:
            tdentry[0].setAttribute("id", "4");
            tdentry[0].innerHTML = "<img src='./images/symbol.png' class='img'>";
            tdentry[1].setAttribute("id", "2");
            tdentry[1].innerHTML = "<img src='./images/symbol 4.png' class='img'>";
            tdentry[2].setAttribute("id", "3");
            tdentry[2].innerHTML = "<img src='./images/symbol 9.png' class='img'>";
            tdentry[3].setAttribute("id", "");
            tdentry[3].innerHTML = "<img src='./images/symbol 7.png' class='img'>";
            tdentry[4].setAttribute("id", "");
            tdentry[4].innerHTML = "<img src='./images/symbol 13.png' class='img'>";
            tdentry[5].setAttribute("id", "");
            tdentry[5].innerHTML = "<img src='./images/symbol 3.png' class='img'>";
            tdentry[6].setAttribute("id", "correct1");
            tdentry[6].innerHTML = "<img src='./images/symbol 2.png' class='img'>";
            break;
        case 3:
            tdentry[0].setAttribute("id", "");
            tdentry[0].innerHTML = "<img src='./images/symbol 6.png' class='img'>";
            tdentry[1].setAttribute("id", "4");
            tdentry[1].innerHTML = "<img src='./images/symbol 1.png' class='img'>";
            tdentry[2].setAttribute("id", "");
            tdentry[2].innerHTML = "<img src='./images/symbol 8.png' class='img'>";
            tdentry[3].setAttribute("id", "correct1");
            tdentry[3].innerHTML = "<img src='./images/symbol 10.png' class='img'>";
            tdentry[4].setAttribute("id", "3");
            tdentry[4].innerHTML = "<img src='./images/symbol 13.png' class='img'>";
            tdentry[5].setAttribute("id", "");
            tdentry[5].innerHTML = "<img src='./images/symbol 4.png' class='img'>";
            tdentry[6].setAttribute("id", "2");
            tdentry[6].innerHTML = "<img src='./images/symbol 12.png' class='img'>";
            break;
        case 4:
            tdentry[0].setAttribute("id", "");
            tdentry[0].innerHTML = "<img src='./images/symbol 11.png' class='img'>";
            tdentry[1].setAttribute("id", "correct1");
            tdentry[1].innerHTML = "<img src='./images/symbol 14.png' class='img'>";
            tdentry[2].setAttribute("id", "");
            tdentry[2].innerHTML = "<img src='./images/symbol 3.png' class='img'>";
            tdentry[3].setAttribute("id", "");
            tdentry[3].innerHTML = "<img src='./images/symbol 15.png' class='img'>";
            tdentry[4].setAttribute("id", "2");
            tdentry[4].innerHTML = "<img src='./images/symbol 1.png' class='img'>";
            tdentry[5].setAttribute("id", "4");
            tdentry[5].innerHTML = "<img src='./images/symbol 17.png' class='img'>";
            tdentry[6].setAttribute("id", "3");
            tdentry[6].innerHTML = "<img src='./images/symbol 16.png' class='img'>";
            break;
    }
}

function clicky(x) {
    switch(x){
        case document.getElementById("correct1"):
            document.getElementById("2").setAttribute("id", "correct2");
            x.setAttribute("id", "done1");
            break;
        case document.getElementById("correct2"):
            document.getElementById("3").setAttribute("id", "correct3");
            x.setAttribute("id", "done2");
            break;
        case document.getElementById("correct3"):
            document.getElementById("4").setAttribute("id", "correct4");
            document.getElementById("correct3").setAttribute("id", "done3");
            break;
        case document.getElementById("correct4"):
            document.getElementById("check").innerHTML = "<p>correct</p>";
            document.getElementById("check").setAttribute("id", "pass");
            document.getElementById("pass").setAttribute("onclick", "javascript:unlockLevelOne('./symbol_puzzle.html')");
            x.setAttribute("id", "done4");
            break;
        case document.getElementById("check"):
            break;
        case document.getElementById("pass"):
            break;
        case document.getElementById("failed"):
            window.location.replace("./symbol_puzzle.html");
            break;
        default:
            document.getElementById("check").innerHTML = "<p>reset</p>";
            document.getElementById("check").setAttribute("id", "failed");
            document.getElementById("correct1").setAttribute("id", "done1");
            document.getElementById("correct2").setAttribute("id", "done2");
            document.getElementById("correct3").setAttribute("id", "done3");
            document.getElementById("correct4").setAttribute("id", "done4");
            break;
    }
}

