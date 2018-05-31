$(function() {
  $(".preHidden").hide();

  $(".dumb input").click(function() {
      if($("#yesDumb").is(":checked")) {
        $(".drama").show();
      } else {

      }
  });

  $(".drama input").click(function() {
    if($("#yesDrama").is(":checked")) {
      $(".character").prepend('<img "src=img/gilligan.jpg" />');
    } else {

    }
  });

});
