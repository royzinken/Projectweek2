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
     // window.location.href = "http://www.w3schools.com";
      
  //IF WRONG ANSWER
      } else {
          $('#wrong').show();
          $('#correct').hide();
          document.getElementById("cookie").value = "";
        }
          

}
