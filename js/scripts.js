$(document).ready(function(){
    $("#formOne").submit(function(event){
      event.preventDefault();
      var inputString = $("#animalSelect").val();

      if (inputString == "snake") {
        $("#snake").show();
      }
      else if (inputString == "lizard") {
        $("#lizard").show();
      }
      else if (inputString == "turtle") {
        $("#turtle").show();
      }

    });




});
