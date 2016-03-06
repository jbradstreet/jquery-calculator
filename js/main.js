
  $(document).ready(function() {
    var input = '';
    var operator = '';
    var screenOutput = $('#screen');


    $('span').click(function(event) {
      var spanOutput = $(this).text();
      input = input + spanOutput;
      console.log(input);
      screenOutput.text(input);
    });

    $('.operator:not(#calc)').click(function(event) {
      operator = $(this).text();
      console.log(operator);
    });

    $('#calc').click(function(event) {
      var doTheMath = input.split(operator);
      if ( operator === 'x') {
        console.log(parseInt(doTheMath[0]) * parseInt(doTheMath[1]));
        screenOutput.text(parseInt(doTheMath[0]) * parseInt(doTheMath[1]));
      } else if ( operator === '+') {
        console.log(parseInt(doTheMath[0]) + parseInt(doTheMath[1]));
        screenOutput.text(parseInt(doTheMath[0]) + parseInt(doTheMath[1]));
      } else if ( operator === '-') {
        console.log(parseInt(doTheMath[0]) - parseInt(doTheMath[1]));
        screenOutput.text(parseInt(doTheMath[0]) - parseInt(doTheMath[1]));
      } else if ( operator === '\u00f7') {
        console.log(parseInt(doTheMath[0]) / parseInt(doTheMath[1]));
        screenOutput.text(parseInt(doTheMath[0]) / parseInt(doTheMath[1]));
      }

    });

    // need to hide the "C" somehow...
    // also need to make this work with one click

    $('#cancel').click(function(event) {
      input = '';
    });

  });
