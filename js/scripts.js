$(document).ready(function(){
    $("#formOne").submit(function(event){
      event.preventDefault();
      var inputString = $("#animalSelect").val();

      if (inputString == "snake") {
        $("#snake").show();
        $("#lizard").hide();
        $("#turtle").hide();
      }
      else if (inputString == "lizard") {
        $("#lizard").show();
        $("#snake").hide();
      }
      else if (inputString == "turtle") {
        $("#turtle").show();
        $("#snake").hide();
        $("#lizard").hide();
      }

    });




});
