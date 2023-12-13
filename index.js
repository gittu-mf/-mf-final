const apiKey = "c58ff749cb5ec833c2226c4abfc95c2a";

        function searchWeather() {
            const searchBox = document.getElementById("search-box");
            const cityName = searchBox.value;
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    const weatherInfo = document.getElementById("weather-info");
                    const weatherIcon = document.getElementById("weather-icon");
                    const temperature = (data.main.temp - 273.15).toFixed(2);

                    weatherInfo.innerHTML = `
                        <h2>${data.name}, ${data.sys.country}</h2>
                        <p>Temperature: ${temperature} &deg;C</p>
                        <p>Weather: ${data.weather[0].description}</p>
                        <p>Humidity: ${data.main.humidity}%</p>
                    `;

                    const iconCode = data.weather[0].icon;
                    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
                    weatherIcon.src = iconUrl;
                })
                
                
                
                .catch(error => {
                    console.error("Error fetching weather data:", error);
                });
                
            const countryInfoContainer = document.getElementById("country-info");
            countryInfoContainer.innerHTML = `
                <h2>Country Information</h2>
                <p>Capital: <strong>Capital City</strong></p>
                <p>Population: <strong>XXXXX</strong></p>
                <p>Official Language: <strong>Language</strong></p>
                <p>Currency: <strong>Currency</strong></p>
            `;
                
                
                
                
                
        }
        
        