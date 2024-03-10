//ea1d9b649884751c6f80a0e48b1579c7

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//https://api.openweathermap.org/data/2.5/weather?q={Mumbai}&appid={ea1d9b649884751c6f80a0e48b1579c7}

const apikey = "ea1d9b649884751c6f80a0e48b1579c7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInput = document.querySelector(".searchBar input");
const searchBtn = document.querySelector(".searchBar button");
const weatherImage = document.querySelector(".weatherImage img");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".cityName").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".para1").innerHTML=data.main.humidity+"%";
    document.querySelector(".para3").innerHTML=data.wind.speed+" Km/hr";

    if (data.weather[0].main== "Clear") {
        weatherImage.src = "clear.png";
    } else if (data.weather[0].main == "Clouds") {
        weatherImage.src = "clouds.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherImage.src = "drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherImage.src = "mist.png";
    } else if (data.weather[0].main == "Snow") {
        weatherImage.src = "snow.png";
    } else if(data.weather[0].main == "Rain") {
        weatherImage.src = "rain.png";
    }

    document.querySelector(".weatherBk").style.display = "block";
}

searchBtn.addEventListener("click",() => {
    checkWeather(searchInput.value);
})
