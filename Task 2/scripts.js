document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '1d315d7e7cab997a5e8c6f0165aa1919'; // Your actual OpenWeatherMap API key

    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => {
                console.log(response); // Log the response object for debugging
                if (!response.ok) {
                    throw new Error(`City not found: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data); // Log the entire data object for debugging

                document.getElementById('cityName').innerText = data.name || 'N/A';
                document.getElementById('temp').innerText = `Temperature: ${data.main.temp || 'N/A'} °C`;
                document.getElementById('desc').innerText = `Description: ${data.weather[0].description || 'N/A'}`;
                document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity || 'N/A'}%`;
                document.getElementById('wind').innerText = `Wind Speed: ${data.wind.speed || 'N/A'} m/s`;
            })
            .catch(error => {
                alert(error.message);
                console.error('Error:', error);
            });
    } else {
        alert('Please enter a city name');
    }
});
