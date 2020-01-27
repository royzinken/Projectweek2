document.addEventListener('DOMContentLoaded', 
    function(){
      Typed.new('.entry', {
        strings: [ "------......----"+"<br>"+"...----..--",],
        typeSpeed: 1
      });
  });
  


  document.addEventListener('DOMContentLoaded', //the second  ling of entries of scroll text
  function(){
    Typed.new('.entry2', {
      strings: [ " ​test voor de scramble tekst",],
      typeSpeed: 1
    });
});

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