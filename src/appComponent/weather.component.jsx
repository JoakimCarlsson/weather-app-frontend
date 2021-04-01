import React from 'react';

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
            <hr></hr>
        </div>
    );
}

function getWeatherIcon(icon) {
    return `https://www.weatherbit.io/static/img/icons/${icon}.png`
}

function getMinMax(minTemp, maxTemp) {
    return (
        <div className="row justify-content-center align-self-center">
            <div>
                Min
                <h3>
                    <span className="px-4">{minTemp}&deg;</span>
                </h3>
            </div>
            <div>
                Max
                <h3>
                    <span className="px-4">{maxTemp}&deg;</span>
                </h3>
            </div>
        </div>
    );
}

// function getMinMax(minTemp, maxTemp) {
//     return (
//         <h3>
//             <span className="px-4">{minTemp}&deg;</span>
//             <span className="px-4">{maxTemp}&deg;</span>
//         </h3>
//     );
// }

export default Weather;