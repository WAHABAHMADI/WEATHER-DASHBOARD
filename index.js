var apiKey = "1a532d7589cebedf834ce0bf8fd3bd4e";

var userInput = document.getElementById("city");
var searchBtn = document.getElementById("searchBtn");

//  when the user types in the city name and hits the search button, it needs to submit the api request
function search() {
  var geoLocation =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    userInput.value +
    "&appid=" +
    apiKey;

  fetch(geoLocation)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

searchBtn.addEventListener("click", search);
