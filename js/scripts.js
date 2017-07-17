//Business Logic

function Place(city, state, landmark, year, activity) {
  this.city = city;
  this.state = state;
  this.landmark = landmark;
  this.year = year;
  this.activity = activity;
}

// user interface Logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedCity = $("input#new-city").val();
    var inputtedState = $("input#new-state").val();
    var inputtedLandmark = $("input#new-landmark").val().split(",");
    var inputtedYear = $("input#new-year").val();
    var inputtedActivity = $("input#new-activity").val();



    var newPlace = new Place(inputtedCity, inputtedState, inputtedLandmark, inputtedYear, inputtedActivity);


    $("ul").append("<li><span class='place'>" + newPlace.city + "</span></li>");

    $("input#new-city").val("");
    $("input#new-state").val("");
    $("input#new-landmark").val("");
    $("input#new-year").val("");
    $("input#new-activity").val("");

    $(".place").last().click(function() {
    $("#show-place").show();
    $("#show-place h2").text(newPlace.city);
    $(".city").text(newPlace.city);
    $(".state").text(newPlace.state);
    $(".landmark").text(newPlace.landmark);
    $(".year").text(newPlace.year);
    $(".activity").text(newPlace.activity);
    debugger;
    });
  });



});
