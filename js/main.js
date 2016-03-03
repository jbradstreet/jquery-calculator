

  $(document).ready(function() {
    var input = '';
    var operator = '';


    $('span').click(function(event) {
      var $spanOutput = $(this).text();
      input = input + $spanOutput;
      console.log(input);

      var $screenOutput = $('#screen');
      $screenOutput.text(input);

      if (input === 'x') {
        operator = 'x';
      } else {
        operator = 'x';
      }

    });

    $('#calc').click(function(event) {
      var doTheMath = input.split(operator);
        console.log(parseInt(doTheMath[0]) * parseInt(doTheMath[1]));
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
