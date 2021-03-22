import React from 'react';
import Day from './day.component'

const Forecast = (properties) => {
    const days = []
    if (properties.forecast) {

        let test = properties.forecast.slice(1, 7); //max 16

        test.forEach(day => {
            days.push(<Day
                maxTemp={day.max_temp}
                minTemp={day.min_temp}
                description={day.weather.description}
                icon={day.weather.icon}
                date={day.valid_date}
            />);

        });
    }

    return (
        <div className="container">
            <div className="row">
                {days}
            </div>
        </div>
    );
}

export default Forecast;