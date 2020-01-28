
  // DEFAULT SETTINGS
  $('#wrong').hide();
  $('#correct').hide();

  // SELECT INPUT BOX + CLEAR AFTER WRONG ANSWER
  $('input.superhero').focus(function () {
      $('#wrong').hide();
      $('#correct').hide();
      $("button.submit").show();
  });

function guessAnswer () {
  
  var answer = $('input.superhero').val();

  // CHECK ANSWER
  $("button.submit").click(function () {

  //IF CORRECT ANSWER
		if ($('input.superhero').val() == 'Owl') {
			$('#correct').show();
      
  //IF WRONG ANSWER
      } else {
          $('#wrong').show();
          $("button.checkanswer").show();
      }

  });
  
}

guessAnswer();