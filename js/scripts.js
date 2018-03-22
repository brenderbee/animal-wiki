$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

//This clears the form
    $("#turtle").hide();
    $("#snake").hide();
    $("#insect").hide();

    var formInput = $("#animal").val();

    if (formInput === "Turtle") {
      $("#turtle").show();
    } else if (formInput === "Snake") {
      $("#snake").show();
    } else {
      $("#insect").show();
    }

  });

});
