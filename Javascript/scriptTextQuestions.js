// this java script is for scramblecodepuzzle.html
  // DEFAULT SETTINGS
  $('#wrong').hide();
  $('#correct').hide();

  // SELECT INPUT BOX + CLEAR AFTER WRONG ANSWER
  $('text.superhero').focus(function () {
      $('#wrong').hide();
      $('#correct').hide();
      $("button.submit").show();
  });

function guessAnswer () {
  
  // CHECK ANSWER
  $("button.submit").click(function () {
    var answer = document.getElementById("cookie").value;
    
  //IF CORRECT ANSWER
		if (answer == 'Why are you running') {
			$('#correct').show();
      
  //IF WRONG ANSWER
      } else {
          $('#wrong').show();}
          

  });
  
}

guessAnswer();
