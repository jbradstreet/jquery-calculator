
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


  // attempt to split number inputs as 'left' and 'right'

  // $(document).ready(function() {
  //   var number = '';
  //   var left = '';
  //   var right = '';
  //
  //
  //   $('span:not(.operator)').click(function(event) {
  //     var $spanOutput = $(this).text();
  //     number = number + $spanOutput;
  //     console.log(number);
  //
  //     var $screenOutput = $('#screen');
  //     $screenOutput.text(number);
  //
  //   });
  //
  //   $('.operator').click(function(event) {
  //     number = left;
  //     console.log(left);
  //       $('span:not(.operator)').click(function(event) {
  //         var $spanOutput2 = $(this).text();
  //         right = right + $spanOutput2;
  //         console.log(right);
  //       });
  //   });


  // talked to Chris. Issue with spanOutput. Need to specify operator being clicked.
  // $(document).ready(function() {
  //   var input = '';
  //   var operator = '';
  //
  //
  //   $('span').click(function(event) {
  //     var spanOutput = $(this).text();
  //     input = input + spanOutput;
  //     console.log(input);
  //
  //     var $screenOutput = $('#screen');
  //     $screenOutput.text(input);
  //
  //     console.log(spanOutput);
  //     // input = '12x'
  //     if (spanOutput === 'x') {
  //       operator = 'x';
  //     } else if (spanOutput === '+'){
  //       operator = '+';
  //     } else {
  //       operator = 'not done'
  //     }
  //
  //   });
  //
  //   $('#calc').click(function(event) {
  //     console.log(operator);
  //     var doTheMath = input.split(operator);
  //
  //     if (operator === 'x') {
  //       console.log(parseInt(doTheMath[0]) * parseInt(doTheMath[1]));
  //
  //     } else if (operator === '+') {
  //       console.log(parseInt(doTheMath[0]) + parseInt(doTheMath[1]));
  //
  //     } else {
  //       console.log('needs work');
  //     }
  //
  //   });
