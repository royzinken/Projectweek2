
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
		if (answer == 'dot') {
			$('#correct').show();
      
  //IF WRONG ANSWER
      } else {
          $('#wrong').show();}
          

  });
  
}

guessAnswer();


function Morsecheck(){
}