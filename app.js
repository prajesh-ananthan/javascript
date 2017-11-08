"use strict";

searchButton.addEventListener('click', searchWeather);

function searchWeather() {
    console.log(searchWeather.value);
}

var searchButton = document.querySelector('button');
var searchCity = document.querySelector("#city");
