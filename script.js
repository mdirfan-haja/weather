var cities = ["Birmingham", "london", "new york", "york", "leeds"];



function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var city = cities[getRandomInteger(0, 6)];



$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=85a1341a3190f51f161d3fd6b2f4cb3a", function(data) {
    console.log(data);

    var icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main;
    $('.icon').attr('src', icon);
    $('.weather').append(weather);
    $('.temp').append(temp);
});