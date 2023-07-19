const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})

/* weather function no pic
$(document).ready(function() {
    // Replace 'YOUR_API_KEY' with your actual API key
    var apiKey = '1a269b0068fef842c965837d15b36069';
    var weatherEndpoint = 'https://api.openweathermap.org/data/2.5/weather?q=Singapore&appid=' + apiKey;

    $.ajax({
      url: weatherEndpoint,
      dataType: 'json',
      success: function(data) {
        var temperature = data.main.temp;
        var humidity = data.main.humidity;
        var description = data.weather[0].description;

        var weatherInfo = 'Temperature: ' + temperature + '°C<br>';
        weatherInfo += 'Humidity: ' + humidity + '%<br>';
        weatherInfo += 'Conditions: ' + description;

        $('#weather-info').html(weatherInfo);
      },
      error: function() {
        $('#weather-info').html('Failed to fetch weather data.');
      }
    });
  });
*/