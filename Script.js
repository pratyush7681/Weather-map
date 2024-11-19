// Fetch real-time weather data
async function fetchWeather() {
  const apiKey = 'YOUR_API_KEY'; // Replace with your API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    document.getElementById('location').textContent = data.name;
    document.getElementById('temperature').textContent = `${data.main.temp}°C`;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind').textContent = `Wind Speed: ${data.wind.speed} km/h`;
  } catch (error) {
    document.getElementById('location').textContent = 'Error fetching weather data';
    console.error(error);
  }
}

// Add event listener for refresh button
document.getElementById('refresh-btn').addEventListener('click', fetchWeather);

// Fetch weather data on page load
fetchWeather();
