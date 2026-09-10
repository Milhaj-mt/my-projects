    //----------------------------DOM SELECTION--------------------------------\\
    const userInput = document.getElementById("city-input")
    const searchButton = document.getElementById("search-btn")
    const cityName = document.getElementById("city-name")
    const temperature = document.getElementById("temperature")
    const weatherDescription = document.getElementById("weather-description")
    const humidity = document.getElementById("humidity")
    const wind = document.getElementById("wind-speed")
    const image = document.getElementById("image")

    //-------------------------API KEY----------------------------------------\\
const API_KEY = "02647aa2b3608d51381adb22b5306a11";

    //------------------------ADDING EVENTLISTNER----------------------------------\\
    searchButton.addEventListener("click",getweather);
    async function getweather() {
        const city = userInput.value
//------------------------------TRY AND CATCH------------------------------------\\
    try {
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    const data = await response.json()

        cityName.textContent = "Loading..."
        temperature.textContent = "--°C"
        wind.textContent = ":--"
        humidity.textContent = ":--"
        weatherDescription.textContent = "Loading..."
        image.src = ""            

        if(data.cod === "404"){
            alert(data.message)
            userInput.value = ""
            cityName.textContent = "City"
            weatherDescription.textContent = "Weather Description"

            return;

        const iconCode = data.weather[0].icon

        cityName.textContent = data.name
        temperature.textContent = data.main.temp + "°C"
        humidity.textContent = "Humidity : " + data.main.humidity + "%"
        wind.textContent = "wind : " + data.wind.speed + "m/s"
        weatherDescription.textContent = data.weather[0].description
        image.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`            
        }
    } catch (error) {
        console.log(error)
        cityName.textContent = "Network Error"
        weatherDescription.textContent = "Network Error"
        userInput.value = ""


    }
//-----------------------------------END-------------------------------------------------\\

//--------------------------EMPTY SEARCHBAR---------------------------\\
        userInput.value = ""

    }

//----------------------------ENTER SEARCH-----------------------------------\\

userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        getweather();
    }
}); 
