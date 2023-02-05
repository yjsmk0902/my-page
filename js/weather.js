
const API_KEY= "fd5d265aadb527b19055ead38622257b";

function geoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].description} / ${data.main.temp}℃`;
        city.innerText = ` / ${data.name}`;
    });
}

function geoError(){
    alert("geoError!!");
}

navigator.geolocation.getCurrentPosition(geoSuccess,geoError);
