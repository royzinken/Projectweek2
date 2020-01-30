document.addEventListener('DOMContentLoaded', 
    function typedtext(){
      Typed.new('.entry', {
        strings: [ "------......----"+"<br>"+"...----..--",],
        typeSpeed: 1
      });
  });
  


  document.addEventListener('DOMContentLoaded', //the second  ling of entries of scroll text
  function typedtext2(){
    Typed.new('.entry2', {
      strings: [ " ​test voor de scramble tekst",],
      typeSpeed: 1
    });
});

  // DEFAULT SETTINGS
  $('#wrong').hide();
  $('#correct').hide();

  // SELECT INPUT BOX + CLEAR AFTER WRONG ANSWER
  $('text.superhero').focus(function () {
      $('#wrong').hide();
      $('#correct').hide();
      $("button.submit").show();
  });

function scrambleguessAnswer () {
  
  // CHECK ANSWER
  $("button.submit").click(function () {
    var answer = document.getElementById("cookie").value;
    
  //IF CORRECT ANSWER
		if (answer == 'dat') {
			$('#correct').show();
      
  //IF WRONG ANSWER
      } else {
          $('#wrong').show();}
          

  });
  
}

scrambleguessAnswer();


function Morsecheck(){
}