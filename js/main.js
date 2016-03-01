

  $(document).ready(function() {
    var number = '';
    $('span').click(function(event) {
      var $spanOutput = $(this).text();
      number = number + $spanOutput;
      console.log(number);

      var $screenOutput = $('#screen');
      $screenOutput.text(number);

    });


  });
