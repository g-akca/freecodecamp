const select = document.getElementById("weather-select");
const getWeatherBtn = document.getElementById("get-weather-btn");
const weatherDiv = document.getElementById("weather-div");

const weatherIcon = document.getElementById("weather-icon");
const mainTemp = document.getElementById("main-temperature");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const weatherMain = document.getElementById("weather-main");
const locationEl = document.getElementById("location");

async function getWeather(city) {
  try {
    const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
    return await response.json();
  }
  catch (error) {
    console.error(error);
  }
}

function valueOrNA(value) {
  return value ?? "N/A";
}

async function showWeather(city) {
  try {
    const data = await getWeather(city);

    weatherDiv.style.display = "block";
    weatherIcon.src = valueOrNA(data.weather[0].icon);
    weatherIcon.alt = valueOrNA(data.weather[0].description);

    mainTemp.textContent = `Temperature: ${valueOrNA(data.main.temp)} °C`;
    feelsLike.textContent = `Feels like: ${valueOrNA(data.main.feels_like)} °C`;
    humidity.textContent = `Humidity: ${valueOrNA(data.main.humidity)}%`;
    wind.textContent = `Wind: ${valueOrNA(data.wind.speed)} m/s`;
    windGust.textContent = `Wind gust: ${valueOrNA(data.wind.gust)} m/s`;
    weatherMain.textContent = `Conditions: ${valueOrNA(data.weather[0].main)}`;
    locationEl.textContent = `Location: ${valueOrNA(data.name)}`;
  }
  catch (error) {
    alert("Something went wrong, please try again later");
  }
}

getWeatherBtn.addEventListener("click", () => {
  if (!select.value) return;
  showWeather(select.value);
});