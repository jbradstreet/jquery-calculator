

  $(document).ready(function() {
    var number = '';


    $('span').click(function(event) {
      var $spanOutput = $(this).text();
      number = number + $spanOutput;
      console.log(number);

      var $screenOutput = $('#screen');
      $screenOutput.text(number);

    });

    $('#calc').click(function(event) {
      var doTheMath = number.split('x');
        console.log(parseInt(doTheMath[0]) * parseInt(doTheMath[1]));


    });

    // need to hide the "C" somehow...
    // also need to make this work with one click

    // $('#cancel').click(function(event) {
    //   number = '';
    // });


  });
