const apiURL =
"https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely&units=Metric&appid=d1fde7f43b57c183c1d5d38872f2b70b";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    
    document.querySelector(".temperature").textContent = Math.round(jsObject.current.temp);
    document.querySelector(".temperature_1").textContent = Math.round(jsObject.daily[1].temp.morn);
    document.querySelector(".temperature_2").textContent = Math.round(jsObject.daily[2].temp.morn);
    document.querySelector(".temperature_3").textContent = Math.round(jsObject.daily[3].temp.morn);

    const iconsrc = `https://openweathermap.org/img/wn/${jsObject.current.weather[0].icon}@2x.png`;
    const iconsrc_1 = `https://openweathermap.org/img/wn/${jsObject.daily[1].weather[0].icon}@2x.png`;
    const iconsrc_2 = `https://openweathermap.org/img/wn/${jsObject.daily[2].weather[0].icon}@2x.png`;
    const iconsrc_3 = `https://openweathermap.org/img/wn/${jsObject.daily[3].weather[0].icon}@2x.png`;
    const desc = jsObject.current.weather[0].description;
    const desc_1 = jsObject.daily[1].weather[0].description;
    const desc_2 = jsObject.daily[2].weather[0].description;
    const desc_3 = jsObject.daily[3].weather[0].description;
    let day_1 = String(new Date(jsObject.daily[1].dt *1000)).substring(0,3);
    let day_2 = String(new Date(jsObject.daily[2].dt *1000)).substring(0,3);
    let day_3 = String(new Date(jsObject.daily[3].dt *1000)).substring(0,3);

    const city = String(jsObject.timezone).substring(18,30).replace("_"," ");
    const country = String(jsObject.timezone).substring(8,17);
    const ubication = city.concat(", ",country);
    const humidity = jsObject.current.humidity;
    
    document.querySelector("#weathericon").setAttribute("src", iconsrc);
    document.querySelector("#weathericon").setAttribute("alt", desc);
    document.querySelector("#weathericon").setAttribute("height", 100);
    document.querySelector("#weathericon").setAttribute("width", 100);

    document.querySelector(".day_1").textContent = day_1;
    document.querySelector(".day_2").textContent = day_2;
    document.querySelector(".day_3").textContent = day_3;
    document.querySelector("#weathericon-1").setAttribute("src", iconsrc_1);
    document.querySelector("#weathericon-1").setAttribute("alt", desc_1);
    document.querySelector("#weathericon-1").setAttribute("height", 100);
    document.querySelector("#weathericon-1").setAttribute("width", 100);

    document.querySelector("#weathericon-2").setAttribute("src", iconsrc_2);
    document.querySelector("#weathericon-2").setAttribute("alt", desc_2);
    document.querySelector("#weathericon-2").setAttribute("height", 100);
    document.querySelector("#weathericon-2").setAttribute("width", 100);

    document.querySelector("#weathericon-3").setAttribute("src", iconsrc_3);
    document.querySelector("#weathericon-3").setAttribute("alt", desc_3);
    document.querySelector("#weathericon-3").setAttribute("height", 100);
    document.querySelector("#weathericon-3").setAttribute("width", 100);
    
    document.querySelector(".city").textContent = ubication;  
    document.querySelector(".humidity").textContent = humidity;
    document.querySelector(".currently-weather").textContent = desc;
    document.querySelector(".windspeed").textContent = jsObject.current.wind_speed.toFixed(1);
  
    window.onload = alert()
    

    function alert(){
      const displayAlert = document.getElementById("weather-alert");
      let day_1 = String(new Date(jsObject.alerts[0].start *1000)).substring(0,21);
      let day_2 = String(new Date(jsObject.alerts[0].end *1000)).substring(0,21);
      if (jsObject.alerts != null){
        let span = document.createElement("span");
        span.classList.add("clsbtn","material-icons");
        span.setAttribute("onclick","this.parentElement.style.display='none';")
        span.textContent=`close`
        document.querySelector("#weather-alert").textContent = `Alert: ${jsObject.alerts[0].event}`;
        document.querySelector("#weather-alert").appendChild(span);
        
        let startAlert = document.createElement("p");
        startAlert.textContent= `From: ${day_1}`
        document.querySelector("#weather-alert").appendChild(startAlert);
        let endAlert = document.createElement("p");
        endAlert.textContent= `To: ${day_2}`
        document.querySelector("#weather-alert").appendChild(endAlert);
      }else{
        displayAlert.style.display = "none";
      }
    }  
    
    
});




  