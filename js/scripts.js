$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

  var question1 = $("#first").val();
  var question2 = $("#second").val();
  var question3 = $("#third").val();
  var question4 = $("#fourth").val();
  var question5 = $("#fifth").val();


  if ((question1 === "yes" && question2 === "yes") || (question1 === "yes" && question2 === "no" && question3 === "no")) {
    $("#css").show();
    $("#ruby").hide();
    $("#c-sharp").hide();
  } else if ((question2 === "yes" && question4 === "yes") || (question3 === "yes") && (question4 === "yes")) {
    $("#ruby").show();
    $("#css").hide();
    $("#c-sharp").hide();
  } else {
    $("#c-sharp").show();
    $("#ruby").hide();
    $("#css").hide();
  }
  });
});
