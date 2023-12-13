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
        function updateClock() {
            const clockElement = document.getElementById("clock");
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            clockElement.textContent = `${hours}:${minutes}:${seconds}`;
        }
        function updateCalendar() {
            const calendarElement = document.getElementById("calendar");
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const firstDayIndex = new Date(year, month, 1).getDay();

            const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

            const table = document.createElement("table");
            const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

            
            const thead = document.createElement("thead");
            const headerRow = document.createElement("tr");
            weekdays.forEach(weekday => {
                const th = document.createElement("th");
                th.textContent = weekday;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

          
            const tbody = document.createElement("tbody");
            let currentRow = document.createElement("tr");
            for (let i = 0; i < firstDayIndex; i++) {
                const td = document.createElement("td");
                currentRow.appendChild(td);
            }
            days.forEach(day => {
                const td = document.createElement("td");
                td.textContent = day;
                if (day === now.getDate()) {
                    td.classList.add("today");
                }
                currentRow.appendChild(td);

                if (currentRow.children.length === 7) {
                    tbody.appendChild(currentRow);
                    currentRow = document.createElement("tr");
                }
            });
            table.appendChild(tbody);

            calendarElement.innerHTML = "";
            calendarElement.appendChild(table);
        }

        
        updateClock();
        updateCalendar();
        setInterval(updateClock, 1000);
        setInterval(updateCalendar, 60000);
        
        