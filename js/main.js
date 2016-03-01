

  $(document).ready(function() {

    $('span').click(function(event) {

      // store the span text output into a variable
      var $spanOutput = $(this).text();
      console.log($spanOutput);

      // get the <div id='screen'> as a target
      var $screenOutput = $('#screen');
      // use spanOutput as '.text' in <div id='screen'>
      $screenOutput.text($spanOutput);

    });


  });
