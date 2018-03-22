$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var formInput = $("#animal").val();

    if (formInput === "Turtle") {
      $("#turtle").show();
      $("#snake").hide();
      $("#insect").hide();
    } else if (formInput === "Snake") {
      $("#snake").show();
      $("#turtle").hide();
      $("#insect").hide();
    } else {
      $("#insect").show();
      $("#turtle").hide();
      $("#snake").hide();
    }

  });

});
