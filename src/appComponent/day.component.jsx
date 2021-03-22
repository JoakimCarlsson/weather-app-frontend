import React from 'react';
const Day = (properties) => {
    return (
        <div className="col-sm">
            <h5>{GetDay(properties.date)}</h5>
            <img src={getWeatherIcon(properties.icon)}></img>
            {getMinMax(properties.minTemp, properties.maxTemp)}
            <h6 className="py-1">{properties.description}</h6>
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
                <h5>
                    <span className="px-2">{minTemp}&deg;</span>
                </h5>
            </div>
            <div>
                Max
                <h5>
                    <span className="px-2">{maxTemp}&deg;</span>
                </h5>
            </div>
        </div>
    );
}

function GetDay(date) {
    let day = new Date(date);
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let n = weekday[day.getDay()];

    return (
        <h5>
            <span className="px-4">{n}</span>
        </h5>
    );
}

export default Day;