var url = window.location.pathname;                                                    //define the current url
var filename = url.substring(url.lastIndexOf('/')+1);                                  //removes everything from the url except for the file name

function assign() {                                                                    //this is a randomizer that chooses a sequence for the puzzle
    var min=1;                                                                         //this is the minimum value that can be returned
    var max=4;                                                                         //this is the maximum value that can be returned
    var random = Math.floor(Math.random() * (+max - +min)) + +min;                     //this is the actual randomizer part

    /*var randomizer = Math.floor(Math.random() * 4) + 1;*/                            //randomizer 1-5

    var tdentry = document.getElementsByTagName("td");                                 //make a preset for 'select td'    
    switch(random) {                                                                   //switch gives a random set of images with fitting sequences based on the randomizers output
        case 1:
            tdentry[0].setAttribute("id", "");                                         //change the id
            tdentry[0].innerHTML = "<img src='./images/symbol 15.png' class='img'>";   //change the image
            tdentry[1].setAttribute("id", "");                                         //change the id
            tdentry[1].innerHTML = "<img src='./images/symbol 2.png' class='img'>";    //change the image
            tdentry[2].setAttribute("id", "2");                                        //change the id
            tdentry[2].innerHTML = "<img src='./images/symbol 3.png' class='img'>";    //change the image
            tdentry[3].setAttribute("id", "correct1");                                 //change the id
            tdentry[3].innerHTML = "<img src='./images/symbol.png' class='img'>";      //change the image
            tdentry[4].setAttribute("id", "");                                         //change the id
            tdentry[4].innerHTML = "<img src='./images/symbol 17.png' class='img'>";   //change the image
            tdentry[5].setAttribute("id", "3");                                        //change the id
            tdentry[5].innerHTML = "<img src='./images/symbol 6.png' class='img'>";    //change the image
            tdentry[6].setAttribute("id", "4");                                        //change the id
            tdentry[6].innerHTML = "<img src='./images/symbol 7.png' class='img'>";    //change the image
            break;
        case 2:     //sequence 2
            tdentry[0].setAttribute("id", "4");                                        //change the id
            tdentry[0].innerHTML = "<img src='./images/symbol.png' class='img'>";      //change the image
            tdentry[1].setAttribute("id", "2");                                        //change the id
            tdentry[1].innerHTML = "<img src='./images/symbol 4.png' class='img'>";    //change the image
            tdentry[2].setAttribute("id", "3");                                        //change the id
            tdentry[2].innerHTML = "<img src='./images/symbol 9.png' class='img'>";    //change the image
            tdentry[3].setAttribute("id", "");                                         //change the id
            tdentry[3].innerHTML = "<img src='./images/symbol 7.png' class='img'>";    //change the image
            tdentry[4].setAttribute("id", "");                                         //change the id
            tdentry[4].innerHTML = "<img src='./images/symbol 13.png' class='img'>";   //change the image
            tdentry[5].setAttribute("id", "");                                         //change the id
            tdentry[5].innerHTML = "<img src='./images/symbol 3.png' class='img'>";    //change the image
            tdentry[6].setAttribute("id", "correct1");                                 //change the id
            tdentry[6].innerHTML = "<img src='./images/symbol 2.png' class='img'>";    //change the image
            break;
        case 3:     //sequence 3
            tdentry[0].setAttribute("id", "");                                         //change the id
            tdentry[0].innerHTML = "<img src='./images/symbol 6.png' class='img'>";    //change the image
            tdentry[1].setAttribute("id", "4");                                        //change the id
            tdentry[1].innerHTML = "<img src='./images/symbol 1.png' class='img'>";    //change the image
            tdentry[2].setAttribute("id", "");                                         //change the id
            tdentry[2].innerHTML = "<img src='./images/symbol 8.png' class='img'>";    //change the image
            tdentry[3].setAttribute("id", "correct1");                                 //change the id
            tdentry[3].innerHTML = "<img src='./images/symbol 10.png' class='img'>";   //change the image
            tdentry[4].setAttribute("id", "3");                                        //change the id
            tdentry[4].innerHTML = "<img src='./images/symbol 13.png' class='img'>";   //change the image
            tdentry[5].setAttribute("id", "");                                         //change the id
            tdentry[5].innerHTML = "<img src='./images/symbol 4.png' class='img'>";    //change the image
            tdentry[6].setAttribute("id", "2");                                        //change the id
            tdentry[6].innerHTML = "<img src='./images/symbol 12.png' class='img'>";   //change the image
            break;
        case 4:     //sequence 4
            tdentry[0].setAttribute("id", "");                                          //change the id
            tdentry[0].innerHTML = "<img src='./images/symbol 11.png' class='img'>";    //change the image
            tdentry[1].setAttribute("id", "correct1");                                  //change the id
            tdentry[1].innerHTML = "<img src='./images/symbol 14.png' class='img'>";    //change the image
            tdentry[2].setAttribute("id", "");                                          //change the id
            tdentry[2].innerHTML = "<img src='./images/symbol 3.png' class='img'>";     //change the image
            tdentry[3].setAttribute("id", "");                                          //change the id
            tdentry[3].innerHTML = "<img src='./images/symbol 15.png' class='img'>";    //change the image
            tdentry[4].setAttribute("id", "2");                                         //change the id
            tdentry[4].innerHTML = "<img src='./images/symbol 1.png' class='img'>";     //change the image
            tdentry[5].setAttribute("id", "4");                                         //change the id
            tdentry[5].innerHTML = "<img src='./images/symbol 17.png' class='img'>";    //change the image
            tdentry[6].setAttribute("id", "3");                                         //change the id
            tdentry[6].innerHTML = "<img src='./images/symbol 16.png' class='img'>";    //change the image
            break;
        case 5:     //sequence 5
            tdentry[0].setAttribute("id", "");                                          //change the id
            tdentry[0].innerHTML = "<img src='./images/symbol.png' class='img'>";       //change the image
            tdentry[1].setAttribute("id", "correct1");                                  //change the id
            tdentry[1].innerHTML = "<img src='./images/symbol 19.png' class='img'>";    //change the image
            tdentry[2].setAttribute("id", "");                                          //change the id
            tdentry[2].innerHTML = "<img src='./images/symbol 3.png' class='img'>";     //change the image
            tdentry[3].setAttribute("id", "");                                          //change the id
            tdentry[3].innerHTML = "<img src='./images/symbol 15.png' class='img'>";    //change the image
            tdentry[4].setAttribute("id", "2");                                         //change the id
            tdentry[4].innerHTML = "<img src='./images/symbol 1.png' class='img'>";     //change the image
            tdentry[5].setAttribute("id", "4");                                         //change the id
            tdentry[5].innerHTML = "<img src='./images/symbol 17.png' class='img'>";    //change the image
            tdentry[6].setAttribute("id", "3");                                         //change the id
            tdentry[6].innerHTML = "<img src='./images/symbol 16.png' class='img'>";    //change the image
            break;
        case 6:     //sequence 6
            tdentry[0].setAttribute("id", "");                                          //change the id
            tdentry[0].innerHTML = "<img src='./images/symbol 11.png' class='img'>";    //change the image
            tdentry[1].setAttribute("id", "correct1");                                  //change the id
            tdentry[1].innerHTML = "<img src='./images/symbol 14.png' class='img'>";    //change the image
            tdentry[2].setAttribute("id", "");                                          //change the id
            tdentry[2].innerHTML = "<img src='./images/symbol 3.png' class='img'>";     //change the image
            tdentry[3].setAttribute("id", "");                                          //change the id
            tdentry[3].innerHTML = "<img src='./images/symbol 15.png' class='img'>";    //change the image
            tdentry[4].setAttribute("id", "2");                                         //change the id
            tdentry[4].innerHTML = "<img src='./images/symbol 1.png' class='img'>";     //change the image
            tdentry[5].setAttribute("id", "4");                                         //change the id
            tdentry[5].innerHTML = "<img src='./images/symbol 17.png' class='img'>";    //change the image
            tdentry[6].setAttribute("id", "3");                                         //change the id
            tdentry[6].innerHTML = "<img src='./images/symbol 16.png' class='img'>";    //change the image
            break;
        case 7:     //sequence 7
            tdentry[0].setAttribute("id", "");                                          //change the id
            tdentry[0].innerHTML = "<img src='./images/symbol 11.png' class='img'>";    //change the image
            tdentry[1].setAttribute("id", "correct1");                                  //change the id
            tdentry[1].innerHTML = "<img src='./images/symbol 14.png' class='img'>";    //change the image
            tdentry[2].setAttribute("id", "");                                          //change the id
            tdentry[2].innerHTML = "<img src='./images/symbol 3.png' class='img'>";     //change the image
            tdentry[3].setAttribute("id", "");                                          //change the id
            tdentry[3].innerHTML = "<img src='./images/symbol 15.png' class='img'>";    //change the image
            tdentry[4].setAttribute("id", "2");                                         //change the id
            tdentry[4].innerHTML = "<img src='./images/symbol 1.png' class='img'>";     //change the image
            tdentry[5].setAttribute("id", "4");                                         //change the id
            tdentry[5].innerHTML = "<img src='./images/symbol 17.png' class='img'>";    //change the image
            tdentry[6].setAttribute("id", "3");                                         //change the id
            tdentry[6].innerHTML = "<img src='./images/symbol 16.png' class='img'>";    //change the image
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
            
            if (filename == 'symbol_puzzle_dif5.html') {
                document.getElementById("pass").setAttribute(
                    "onclick", "javascript:UnlockLevelTwo('./symbol_puzzle_dif4.html')");
                // $_session['NumberOfSolvedPuzzles'] + 1;
            }
            else if (filename == 'symbol_puzzle_dif4.html') {
                document.getElementById("pass").setAttribute(
                    "onclick", "javascript:UnlockLevelThree('./symbol_puzzle_dif3.html')");
                // $_session['NumberOfSolvedPuzzles'] + 1;
            }
            else if (filename == 'symbol_puzzle_dif3.html') {
                document.getElementById("pass").setAttribute(
                    "onclick", "javascript:UnlockLevelFour('./symbol_puzzle_dif2.html')");
                // $_session['NumberOfSolvedPuzzles'] + 1;
            }
            else if (filename == 'symbol_puzzle_dif2.html') {
                document.getElementById("pass").setAttribute(
                    "onclick", "javascript:UnlockLevelFive('./symbol_puzzle_dif1.html')");
                // $_session['NumberOfSolvedPuzzles'] + 1;
            }
            x.setAttribute("id", "done4");
            break;
        case document.getElementById("check"):
            break;
        case document.getElementById("pass"):
            if(filename = "symbol_puzzle_dif1.html"){
                window.location.replace("./succes.html");
            }
            break;
        case document.getElementById("failed"):
            if (filename == 'symbol_puzzle_dif5.html') {
                window.location.replace("./symbol_puzzle_dif5.html");
            }
            else if (filename == 'symbol_puzzle_dif4.html') {
                window.location.replace("./symbol_puzzle_dif4.html");
            }
            else if (filename == 'symbol_puzzle_dif3.html') {
                window.location.replace("./symbol_puzzle_dif3.html");
            }
            else if (filename == 'symbol_puzzle_dif2.html') {
                window.location.replace("./symbol_puzzle_dif2.html");
            }
            else if (filename == 'symbol_puzzle_dif1.html') {
                window.location.replace("./symbol_puzzle_dif1.html");
            }
        
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

