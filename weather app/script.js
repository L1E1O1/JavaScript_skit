document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "5e37b556ca462c8f87750f2ae21367f8";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
  
    async function checkWeather(country) {
      // Check if the input is empty
      if ("") {
        console.error("Please enter a city name.");
        return;
      }
  
      try {
        const response = await fetch(apiUrl + country + `&appid=${apiKey}`); // Use 'country' instead of 'city'
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
  
        const data = await response.json(); // 'data' is defined here
        console.log(data);
  
        // Access 'data' here since it's within the scope
        document.querySelector(".country").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h"; // Changed 'Wind' to 'wind'
        
        document.querySelector(".weather").style.display = "block"
      } 
      catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }
  
    searchBtn.addEventListener("click", () => {
      checkWeather(searchBox.value.trim()); // Call the function with trimmed input
    });
  });
  