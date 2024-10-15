function refreshWeather(response) {
  let temperatureElement= document.querySelector("#temperature");
  let temperature=response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  
  cityElement.innerHTML=response.data.city;
  temperatureElement.innerHTML= Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "3a1ba03353eo46c2131e8effa9ted923";
  let apiUrl =
    'https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}';
  axios.get(apiUrl).then(refreshWeather);
}

function Search(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", Search);

searchCity("Paris")