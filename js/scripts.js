// First, load jQuery (required)
// jQuery 2.2.2 loaded via `index.html`

// Second, load Semantic UI JS (required)
// @codekit-prepend "semantic.js";

// Third, Add to Homescreen (optional)
// @codekit-prepend "add-to-homescreen.js";

// Third, load any plugins (optional)
// @codekit-prepend "plugins.js";

// My Scripts

// Activate Tabs
$('.menu .item').tab();

// Get Cheney Weather
$.simpleWeather({
    location: '99004',
    woeid: '',
    unit: 'f',
    success: function (weather) {

        // Display Data
        $('#cheney .city').text(weather.city);
        $('#cheney .temp').text(weather.temp);

        // Display Icon
        $('#cheney i').addClass('icon-' + weather.code);
        
        // Get Forecast
        $('#d1 .day').text(weather.forecast[1].date);
        $('#d1 .temp').text(weather.forecast[1].low + ' - ' + weather.forecast[1].high);
        $('#d1 i').addClass('icon-' + weather.forecast[1].code);

        // Add Custom Body Class
        if(weather.code >= 26 && weather.code <= 30) { 
            $('body').removeClass(); 
            $('body').addClass('bg-1'); 
        }
        
        // Entire weather object
        console.log(weather);
    },
    error: function (error) {
        // Show if weather cannot be retreived
    }

});

// Get Spokane Weather
$.simpleWeather({
    location: '99201',
    woeid: '',
    unit: 'f',
    success: function (weather) {

        // Display Data
        $('#spokane .city').text(weather.city);
        $('#spokane .temp').text(weather.temp);

        // Display Icon
        $('#spokane i').addClass('icon-' + weather.code);

        // Entire weather object
        console.log(weather);
    },
    error: function (error) {
        // Show if weather cannot be retreived
    }

});

// Get Geo Location **********
if (!('geolocation' in navigator)) {
    $('.geo button').show();
} 
else {
    $('#geo').hide();
    $('#geo').prepend('<p>Geo Location Not Supported</p>');
}

// On Click, Get Geolocation, Call Weather Function
$('.geo button').click(function () {
    //load weather using your lat/lng coordinates
    navigator.geolocation.getCurrentPosition(function (position) {
        getWeather(position.coords.latitude + ',' + position.coords.longitude);
    });
});

// Wrap Plugin, in Function to be Called
// Otherwise, runs when page loads
var getWeather = function (location) {

    $.simpleWeather({
        location: location,
        woeid: '',
        unit: 'f',
        success: function (weather) {

            // Display Data
            $('.geo .temp').text(weather.temp);
            $('.geo .city').text(weather.city);

            // Display Icon
            $('.geo i').addClass('icon-' + weather.code);

        },
        error: function (error) {
            // Show if weather cannot be retreived
        }
    });
};
// End Geo Location **********