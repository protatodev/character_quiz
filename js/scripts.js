$(function() {
  $(".preHidden").hide();

  $(".dumb input").click(function() {
      if($("#yesDumb").is(":checked")) {
        $(".drama").show();
      } else {
          $(".smart").show();
      }
  });

  $(".drama input").click(function() {
    if($("#yesDrama").is(":checked")) {
      $(".character").prepend('<img src="img/ginger.jpg" alt="ginger"> <h2>You are Ginger!</h2>').fadeIn();
    } else {
      $(".character").prepend('<img src="img/gilligan.jpg" alt="gilligan"> <h2>You are Gilligan!</h2>');
    }
  });

  $(".smart input").click(function(){
    if($("#yesSmart").is(":checked")){
      $(".coconut").show();
    }else {
      $(".likeBoats").show();
    }
  });

  $(".coconut input").click(function(){
    if($("#yesCoconut").is(":checked")){
      $(".character").prepend('<img src="img/professor.jpg" alt="professor"> <h2>You are the Professor!</h2>');
    } else {
      $(".character").prepend('<img src="img/maryann.jpg" alt="maryann"> <h2>You are Maryanne!</h2>');
      }
  });

  $(".likeBoats input").click(function(){
    if($("#yesLikeBoats").is(":checked")){
      $(".knowToSail").show();
    } else {
      $(".character").prepend('<img src="img/lovey.jpg" alt="lovey"> <h2>You are Lovey!</h2>');
      }
  });

  $(".knowToSail input").click(function(){
    if($("#yesknowToSail").is(":checked")){
      $(".character").prepend('<img src="img/skipper.jpg" alt="skipper"> <h2>You are the Skipper!</h2>');
    } else {
      $(".character").prepend('<img src="img/thurston.jpg" alt="thurston"> <h2>You are Thurston Howell III!</h2>');
      }
  });

});
