import React from 'react';
import './weather.style.css'

const Weather = (properties) => {
    return (
        <div className="container">
            <div className="cards">
                <h1>{properties.city}, {properties.country}</h1>
                <h5 className="py-4">
                    <img src={getWeatherIcon(properties.icon)}></img>
                </h5>
                <h1 className="py-2">{properties.currentTemp}&deg;</h1>
                {getMinMax(properties.minTemp, properties.maxTemp)}
                <h4 className="py-3">{properties.description}</h4>
            </div>
        </div>
    );
}

function getWeatherIcon(icon) {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`
}

function getMinMax(minTemp, maxTemp) {
    return (
        <h3>
            <span className="px-4">{minTemp}&deg;</span>
            <span className="px-4">{maxTemp}&deg;</span>
        </h3>
    );
}

export default Weather;