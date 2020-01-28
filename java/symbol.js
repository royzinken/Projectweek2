
function clicky(x) {
    switch(x){
        case document.getElementById("correct1"):
            document.getElementById("2").setAttribute("id", "correct2");
            document.getElementById("correct1").setAttribute("id", "");
            break;
        case document.getElementById("correct2"):
            document.getElementById("3").setAttribute("id", "correct3");
            document.getElementById("correct2").setAttribute("id", "");
            break;
        case document.getElementById("correct3"):
            document.getElementById("4").setAttribute("id", "correct4");
            document.getElementById("correct3").setAttribute("id", "");
            break;
        case document.getElementById("correct4"):
            document.getElementById("finish").innertext = "correct"
            document.getElementById("finish").setAttribute("id", "pass");
            document.getElementById("correct4").setAttribute("id", "");
            break;
        case document.getElementById("pass"):
            parent.location.replace("./succes.html");
            break;
        case document.getElementById("failed"):
            parent.location.replace("./exploded.html");
            break;
        default:
            document.getElementById("finish").innertext = "correct"
            document.getElementById("finish").setAttribute("id", "failed");
            document.getElementById("correct1").setAttribute("id", "");
            document.getElementById("correct2").setAttribute("id", "");
            document.getElementById("correct3").setAttribute("id", "");
            document.getElementById("correct4").setAttribute("id", "");
            //parent.location.replace("./exploded.html");
            break;
    }
}