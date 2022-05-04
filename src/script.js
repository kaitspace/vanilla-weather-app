//Display current date and time
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentTime = new Date();
let currentDay = days[currentTime.getDay()];
let currentHour = currentTime.getHours();
let currentMinutes = currentTime.getMinutes();

let time = document.querySelector("h3");
let formatTime = `${currentDay}  ${currentHour}:${currentMinutes}`;
time.innerHTML = formatTime;

//Show city

function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#inputCity");
  let cityText = document.querySelector("#display-city");
  cityText.innerHTML = `${city.value}`;
  searchEngine(city.value);
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", showCity);

//Show temperature

function showTemperature(weather) {
  let temperature = Math.round(weather.data.main.temp);
  let heading = document.querySelector("h1");
  heading.innerHTML = `${temperature}`;
}

//Search city and display city name and current temperature
function searchEngine(city) {
  let apiKey = "be72f43b24df0b0d13ba3a47c960f65d";
  let units = "metric";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?q=${city}&units=${units}&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);
}

//Current location -- continue working on this
/*function getLocation(position) {
  let latitude = position.coords.latitude
  let longitude = position.coords.longitude;

}
navigator.geolocation.getCurrentPosition(showLocation);

let currentButton = document.querySelector("#btn-current")
currentButton.addEventListener("click", show)
*/
