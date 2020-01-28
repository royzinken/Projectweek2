var test = Math.floor(Math.random() * 4 + 1);

function assign() {
    switch(test) {
        case 1:
            document.getElementsByTagName("td")[0].setAttribute("id", "");
            document.getElementsByTagName("td")[0].innerHTML = "<img src='./images/symbol 15.png' class='img'>";
            document.getElementsByTagName("td")[1].setAttribute("id", "");
            document.getElementsByTagName("td")[1].innerHTML = "<img src='./images/symbol 2.png' class='img'>";
            document.getElementsByTagName("td")[2].setAttribute("id", "2");
            document.getElementsByTagName("td")[2].innerHTML = "<img src='./images/symbol 3.png' id='2' class='img'>";
            document.getElementsByTagName("td")[3].setAttribute("id", "correct1");
            document.getElementsByTagName("td")[3].innerHTML = "<img src='./images/symbol.png' id='correct1' class='img'>";
            document.getElementsByTagName("td")[4].setAttribute("id", "");
            document.getElementsByTagName("td")[4].innerHTML = "<img src='./images/symbol 17.png' class='img'>";
            document.getElementsByTagName("td")[5].setAttribute("id", "3");
            document.getElementsByTagName("td")[5].innerHTML = "<img src='./images/symbol 6.png' id='3 class='img'>";
            document.getElementsByTagName("td")[6].setAttribute("id", "4");
            document.getElementsByTagName("td")[6].innerHTML = "<img src='./images/symbol 7.png' id='4 class='img'>";
            break;
        case 2:
            document.getElementsByTagName("td")[0].setAttribute("id", "");
            document.getElementsByTagName("td")[0].innerHTML = "<img src='./images/symbol 15.png' class='img'>";
            document.getElementsByTagName("td")[1].setAttribute("id", "");
            document.getElementsByTagName("td")[1].innerHTML = "<img src='./images/symbol 2.png' class='img'>";
            document.getElementsByTagName("td")[2].setAttribute("id", "2");
            document.getElementsByTagName("td")[2].innerHTML = "<img src='./images/symbol 3.png' id='2' class='img'>";
            document.getElementsByTagName("td")[3].setAttribute("id", "correct1");
            document.getElementsByTagName("td")[3].innerHTML = "<img src='./images/symbol.png' id='correct1' class='img'>";
            document.getElementsByTagName("td")[4].setAttribute("id", "");
            document.getElementsByTagName("td")[4].innerHTML = "<img src='./images/symbol 17.png' class='img'>";
            document.getElementsByTagName("td")[5].setAttribute("id", "3");
            document.getElementsByTagName("td")[5].innerHTML = "<img src='./images/symbol 6.png' id='3 class='img'>";
            document.getElementsByTagName("td")[6].setAttribute("id", "4");
            document.getElementsByTagName("td")[6].innerHTML = "<img src='./images/symbol 7.png' id='4 class='img'>";
            break;
        case 3:
            document.getElementsByTagName("td")[0].setAttribute("id", "");
            document.getElementsByTagName("td")[0].innerHTML = "<img src='./images/symbol 15.png' class='img'>";
            document.getElementsByTagName("td")[1].setAttribute("id", "");
            document.getElementsByTagName("td")[1].innerHTML = "<img src='./images/symbol 2.png' class='img'>";
            document.getElementsByTagName("td")[2].setAttribute("id", "2");
            document.getElementsByTagName("td")[2].innerHTML = "<img src='./images/symbol 3.png' id='2' class='img'>";
            document.getElementsByTagName("td")[3].setAttribute("id", "correct1");
            document.getElementsByTagName("td")[3].innerHTML = "<img src='./images/symbol.png' id='correct1' class='img'>";
            document.getElementsByTagName("td")[4].setAttribute("id", "");
            document.getElementsByTagName("td")[4].innerHTML = "<img src='./images/symbol 17.png' class='img'>";
            document.getElementsByTagName("td")[5].setAttribute("id", "3");
            document.getElementsByTagName("td")[5].innerHTML = "<img src='./images/symbol 6.png' id='3 class='img'>";
            document.getElementsByTagName("td")[6].setAttribute("id", "4");
            document.getElementsByTagName("td")[6].innerHTML = "<img src='./images/symbol 7.png' id='4 class='img'>";
            break;
        case 4:
            document.getElementsByTagName("td")[0].setAttribute("id", "");
            document.getElementsByTagName("td")[0].innerHTML = "<img src='./images/symbol 15.png' class='img'>";
            document.getElementsByTagName("td")[1].setAttribute("id", "");
            document.getElementsByTagName("td")[1].innerHTML = "<img src='./images/symbol 2.png' class='img'>";
            document.getElementsByTagName("td")[2].setAttribute("id", "2");
            document.getElementsByTagName("td")[2].innerHTML = "<img src='./images/symbol 3.png' id='2' class='img'>";
            document.getElementsByTagName("td")[3].setAttribute("id", "correct1");
            document.getElementsByTagName("td")[3].innerHTML = "<img src='./images/symbol.png' id='correct1' class='img'>";
            document.getElementsByTagName("td")[4].setAttribute("id", "");
            document.getElementsByTagName("td")[4].innerHTML = "<img src='./images/symbol 17.png' class='img'>";
            document.getElementsByTagName("td")[5].setAttribute("id", "3");
            document.getElementsByTagName("td")[5].innerHTML = "<img src='./images/symbol 6.png' id='3 class='img'>";
            document.getElementsByTagName("td")[6].setAttribute("id", "4");
            document.getElementsByTagName("td")[6].innerHTML = "<img src='./images/symbol 7.png' id='4 class='img'>";
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
            document.getElementById("finish").innerText = "correct"
            document.getElementById("finish").setAttribute("id", "pass");
            x.setAttribute("id", "done4");
            break;
        case document.getElementById("pass"):
            parent.location.replace("./succes.html");
            break;
        case document.getElementById("failed"):
            window.location.replace("./nopuzzleframe copy.html");
            break;
        default:
            document.getElementById("finish").innerText = "reset"
            document.getElementById("finish").setAttribute("id", "failed");
            document.getElementById("correct1").setAttribute("id", "done1");
            document.getElementById("correct2").setAttribute("id", "done2");
            document.getElementById("correct3").setAttribute("id", "done3");
            document.getElementById("correct4").setAttribute("id", "done4");
            break;
    }
}