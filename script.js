const apiKey = "ee0aa1338f2a7ef55add6ba3a53001d5";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search  button");
const weatherIcon = document.querySelector(".weather-icon");

//////////
async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apiKey}`);
  console.log(response);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    // document.querySelector(".error").style.display = "none";
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".pressure").innerHTML = data.main.pressure + " hPa";
    document.querySelector(".feel-like").innerHTML = data.main.feels_like + "°";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".desc").innerHTML = data.weather[0].description;

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.gif";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.gif";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.gif";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.gif";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.gif";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }

  // document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
