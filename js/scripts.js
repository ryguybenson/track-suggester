$(document).ready(function() {
  $("#formOne").submit(function(event) {

  var question1 = $("#first").val();
  var question2 = $("#second").val();
  var question3 = $("#third").val();
  var question4 = $("#fourth").val();
  var question5 = $("#fifth").val();


  event.preventDefault();
  if (question1 === "yes") {
    $("#answer1").show();
  } else if (question2 === "yes") {
    $("#answer1").show();
  }
  if (question3 === "yes") {
    $("#answer2").show();
  }
  });
});
