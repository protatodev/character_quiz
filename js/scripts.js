$(function() {
  $(".preHidden").hide();
  $("#resetButton").click(function() {
    $(".ourForm").trigger("reset");
    $("input").attr("disabled", false);
    $(".preHidden").hide();
    $(".character").text('');
    $(".character").removeClass("char-syles");
  });

  $(".dumb input").click(function() {
      $(".dumb input").attr("disabled", true);
      if($("#yesDumb").is(":checked")) {
        $(".drama").show();
      } else {
          $(".smart").show();
      }
  });

  $(".drama input").click(function() {
    $(".drama input").attr("disabled", true);
    if($("#yesDrama").is(":checked")) {
      $(".character").prepend('<img src="img/ginger.jpg" alt="ginger"> <h2>You are Ginger!</h2>').hide().fadeIn(3000);
      $(".character").addClass("char-syles");
    } else {
      $(".character").prepend('<img src="img/gilligan.jpg" alt="gilligan"> <h2>You are Gilligan!</h2>').hide().fadeIn(3000);
      $(".character").addClass("char-syles");
    }
  });

  $(".smart input").click(function(){
    $(".smart input").attr("disabled", true);
    if($("#yesSmart").is(":checked")){
      $(".coconut").show();
    }else {
      $(".likeBoats").show();
    }
  });

  $(".coconut input").click(function(){
    $(".coconut input").attr("disabled", true);
    if($("#yesCoconut").is(":checked")){
      $(".character").prepend('<img src="img/professor.jpg" alt="professor"> <h2>You are the Professor!</h2>').hide().fadeIn(3000);
      $(".character").addClass("char-syles");
    } else {
      $(".character").prepend('<img src="img/maryann.jpg" alt="maryann"> <h2>You are Maryanne!</h2>').hide().fadeIn(3000);
      $(".character").addClass("char-syles");
      }
  });

  $(".likeBoats input").click(function(){
    $(".likeBoats input").attr("disabled", true);
    if($("#yesLikeBoats").is(":checked")){
      $(".knowToSail").show();
    } else {
      $(".character").prepend('<img src="img/lovey.jpg" alt="lovey"> <h2>You are Lovey!</h2>').hide().fadeIn(3000);
      $(".character").addClass("char-syles");
      }
  });

  $(".knowToSail input").click(function(){
    $(".knowToSail input").attr("disabled", true);
    if($("#yesknowToSail").is(":checked")){
      $(".character").prepend('<img src="img/skipper.jpg" alt="skipper"> <h2>You are the Skipper!</h2>').hide().fadeIn(3000);
      $(".character").addClass("char-syles");
    } else {
      $(".character").prepend('<img src="img/thurston.jpg" alt="thurston"> <h2>You are Thurston Howell III!</h2>').hide().fadeIn(3000);
      $(".character").addClass("char-syles");
      }
  });

});
