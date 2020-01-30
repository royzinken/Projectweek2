/*
Made by Pierre Reumkens
Date of creation: 27-1-2020
Date of last moddified: 30-1-2020
sources: Bas Molenaar Roy Zinken
*/


var url = window.location.pathname;                                                    //define the current url
var filename = url.substring(url.lastIndexOf('/')+1);                                  //removes everything from the url except for the file name

function assign() {                                                                    //this is a randomizer that chooses a sequence for the puzzle
    var min=1;                                                                         //this is the minimum value that can be returned
    var max=6;                                                                         //this is the maximum value that can be returned
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
        case 2:
            tdentry[0].setAttribute("id", "4");                                         //change the id
            tdentry[0].innerHTML = "<img src='./images/symbol.png' class='img'>";       //change the image
            tdentry[1].setAttribute("id", "2");                                         //change the id
            tdentry[1].innerHTML = "<img src='./images/symbol 4.png' class='img'>";     //change the image
            tdentry[2].setAttribute("id", "3");                                         //change the id
            tdentry[2].innerHTML = "<img src='./images/symbol 9.png' class='img'>";     //change the image
            tdentry[3].setAttribute("id", "");                                          //change the id
            tdentry[3].innerHTML = "<img src='./images/symbol 7.png' class='img'>";     //change the image
            tdentry[4].setAttribute("id", "");                                          //change the id
            tdentry[4].innerHTML = "<img src='./images/symbol 13.png' class='img'>";    //change the image
            tdentry[5].setAttribute("id", "");                                          //change the id
            tdentry[5].innerHTML = "<img src='./images/symbol 3.png' class='img'>";     //change the image
            tdentry[6].setAttribute("id", "correct1");                                  //change the id
            tdentry[6].innerHTML = "<img src='./images/symbol 2.png' class='img'>";     //change the image
            break;
        case 3:
            tdentry[0].setAttribute("id", "");                                          //change the id
            tdentry[0].innerHTML = "<img src='./images/symbol 6.png' class='img'>";     //change the image
            tdentry[1].setAttribute("id", "4");                                         //change the id
            tdentry[1].innerHTML = "<img src='./images/symbol 1.png' class='img'>";     //change the image
            tdentry[2].setAttribute("id", "");                                          //change the id
            tdentry[2].innerHTML = "<img src='./images/symbol 8.png' class='img'>";     //change the image
            tdentry[3].setAttribute("id", "correct1");                                  //change the id
            tdentry[3].innerHTML = "<img src='./images/symbol 10.png' class='img'>";    //change the image
            tdentry[4].setAttribute("id", "3");                                         //change the id
            tdentry[4].innerHTML = "<img src='./images/symbol 13.png' class='img'>";    //change the image
            tdentry[5].setAttribute("id", "");                                          //change the id
            tdentry[5].innerHTML = "<img src='./images/symbol 4.png' class='img'>";     //change the image
            tdentry[6].setAttribute("id", "2");                                         //change the id
            tdentry[6].innerHTML = "<img src='./images/symbol 12.png' class='img'>";    //change the image
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
            tdentry[2].innerHTML = "<img src='./images/symbol 21.png' class='img'>";     //change the image
            tdentry[3].setAttribute("id", "");                                          //change the id
            tdentry[3].innerHTML = "<img src='./images/symbol 23.png' class='img'>";    //change the image
            tdentry[4].setAttribute("id", "");                                          //change the id
            tdentry[4].innerHTML = "<img src='./images/symbol 20.png' class='img'>";     //change the image
            tdentry[5].setAttribute("id", "");                                          //change the id
            tdentry[5].innerHTML = "<img src='./images/symbol 17.png' class='img'>";    //change the image
            tdentry[6].setAttribute("id", "");                                          //change the id
            tdentry[6].innerHTML = "<img src='./images/symbol 2.png' class='img'>";     //change the image
            break;
        case 6:     //sequence 6
            tdentry[0].setAttribute("id", "3");                                         //change the id
            tdentry[0].innerHTML = "<img src='./images/symbol 25.png' class='img'>";    //change the image
            tdentry[1].setAttribute("id", "4");                                         //change the id
            tdentry[1].innerHTML = "<img src='./images/symbol.png' class='img'>";       //change the image
            tdentry[2].setAttribute("id", "2");                                         //change the id
            tdentry[2].innerHTML = "<img src='./images/symbol 24.png' class='img'>";    //change the image
            tdentry[3].setAttribute("id", "correct1");                                  //change the id
            tdentry[3].innerHTML = "<img src='./images/symbol 23.png' class='img'>";    //change the image
            tdentry[4].setAttribute("id", "2");                                         //change the id
            tdentry[4].innerHTML = "<img src='./images/symbol 1.png' class='img'>";     //change the image
            tdentry[5].setAttribute("id", "4");                                         //change the id
            tdentry[5].innerHTML = "<img src='./images/symbol 12.png' class='img'>";    //change the image
            tdentry[6].setAttribute("id", "3");                                         //change the id
            tdentry[6].innerHTML = "<img src='./images/symbol 16.png' class='img'>";    //change the image
            break;
    }
}

function clicky(x) {                                                                    //standard function for the sequence
    switch(x){                                                                          //a switch
        case document.getElementById("correct1"):                                       //in case the button with the ID correct1 is clicked
            document.getElementById("2").setAttribute("id", "correct2");                //get the button with the ID 2 and change it's ID to correct2
            x.setAttribute("id", "done1");                                              //change the id of the clicked button to done2
            break;                                                                      //exit out of this case
        case document.getElementById("correct2"):                                       //in case the button with the ID correct2 is clicked
            document.getElementById("3").setAttribute("id", "correct3");                //get the button with the ID 3 and change it's ID to correct3
            x.setAttribute("id", "done2");                                              //change the id of the clicked button to done2
            break;                                                                      //exit out of this case
        case document.getElementById("correct3"):                                       //in case the button with the ID correct3 is clicked
            document.getElementById("4").setAttribute("id", "correct4");                //get the button with the ID 4 and change it's ID to correct4
            document.getElementById("correct3").setAttribute("id", "done3");            //change the id of the clicked button to done2
            break;                                                                      //exit out of this case
        case document.getElementById("correct4"):                                       //in case the button with the ID correct4 is clicked
            document.getElementById("check").innerHTML = "<p>correct</p>";              //get the button with the ID 5 and change it's ID to correct5
            document.getElementById("check").setAttribute("id", "pass");                //change the id of the clicked button to done2
                                                                                        //and↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
            if (filename == 'symbol_puzzle_dif5.html') {                                     //if this is the filename
                document.getElementById("pass").setAttribute(                                //do "this"
                    "onclick", "javascript:UnlockLevelTwo('symbol_puzzle_dif4.html')");      //part of "this"
            }
            else if (filename == 'symbol_puzzle_dif4.html') {                                //if this is the filename
                document.getElementById("pass").setAttribute(                                //do "this"
                    "onclick", "javascript:UnlockLevelThree('symbol_puzzle_dif3.html')");    //part of "this"
            }
            else if (filename == 'symbol_puzzle_dif3.html') {                                //if this is the filename
                document.getElementById("pass").setAttribute(                                //do "this"
                    "onclick", "javascript:UnlockLevelFour('symbol_puzzle_dif2.html')");    //part of "this"
            }
            else if (filename == 'symbol_puzzle_dif2.html') {                                //if this is the filename
                document.getElementById("pass").setAttribute(                                //do "this"
                    "onclick", "javascript:UnlockLevelFive('symbol_puzzle_dif1.html')");    //part of "this"
            }
            x.setAttribute("id", "done4");                                              //change the id of the clicked button to done2
            break;
        case document.getElementById("check"):                                          //if the button with the ID checked is clicked, do absolutely nothing
            break;
        case document.getElementById("pass"):                                           //if pass is clicked
                                                                                        //and↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
            if(filename = "symbol_puzzle_dif1.html"){                                      //the name of the current file is "symbol_puzzle_dif1.html"
                window.location.replace("../succes.html");                                    //go to the succes page
            }
            break;
        case document.getElementById("failed"):                                         //if the button with the ID failed is clicked, refresh the page
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
        default:                                                                        //if another button is clicked, set all assigned buttons to their done state and the check button to it's failed state
            document.getElementById("check").innerHTML = "<p>reset</p>";                //change the text in the checked button(now the failed button) to "reset"
            document.getElementById("check").setAttribute("id", "failed");
            document.getElementById("correct1").setAttribute("id", "done1");
            document.getElementById("correct2").setAttribute("id", "done2");
            document.getElementById("correct3").setAttribute("id", "done3");
            document.getElementById("correct4").setAttribute("id", "done4");
            break;
    }
}

