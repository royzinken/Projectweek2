// this javascript if for morsecodePuzzle.html
  // DEFAULT SETTINGS
  $('#wrong').hide();
  $('#correct').hide();

function guessAnswer () {
  
  var answer = document.getElementById("cookie").value;
    
  //IF CORRECT ANSWER
		if (answer == 'already dead') {
      $('#correct').show();
      $('#wrong').hide();
     // window.location.href = "../succes.html";
     document.getElementById("submit").setAttribute(
      "onclick", "javascript:UnlockLevelTwo('scramblecodepuzzle.html')");
     document.getElementById("submit").setAttribute(
      "type", "");
  document.getElementById("submit").innerText = "continue";
      
  //IF WRONG ANSWER
      } else {
          $('#wrong').show();
          $('#correct').hide();
          document.getElementById("cookie").value = "";
        }
          

}
//Source:Bas Mollenaar/Roy Zinken,Piere Reumkens-->