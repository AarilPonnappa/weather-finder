const weatherForm = document.getElementById('weatherForm');
const loading = document.getElementById('loading');
const displayweather = document.getElementById('displayweather');
const selectedCity = document.getElementById('City');
const CityWeather = document.querySelectorAll('.selectCity');


function PrintWeather(city, temp, rain, humidity, wind) {
    displayweather.innerHTML = `<div style="border: 2px solid #3842f9; padding: 15px;">
            <h3>Weather in ${city}:</h3>
            <p>Temperature: ${temp}°C</p>
            <p>Rain in Last Hour: ${rain} mm</p>
            <p>Humidity: ${humidity}%</p>
            <p>Wind Speed: ${wind} km/h</p>
        </div>`;
}


async function WeatherList(city) {
    try {
        loading.style.display = "block";
        displayweather.innerHTML = "";

        const ReturnAPI = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);
        const Data = await ReturnAPI.json();
        const latitude = Data.results[0].latitude;
        const longitude = Data.results[0].longitude;

        const weatherAPI = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m,rain`);
        const weatherData = await weatherAPI.json();
        const temperature = weatherData.current.temperature_2m;
        const rain = weatherData.current.rain;
        const wind = weatherData.current.wind_speed_10m;
        const humidity = weatherData.current.relative_humidity_2m;
        PrintWeather(city, temperature, rain, humidity, wind);

    } 
    catch(error) {
        displayweather.innerHTML = `<p style="color: red;">Error: Unable to retrieve weather data.</p>`;
    } 
    finally {
        loading.style.display = "none";
    }
}


CityWeather.forEach(city => {
    city.addEventListener('click', function() {
        WeatherList(city.textContent);
    });
});