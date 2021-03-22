import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Weather from './weather.component'
import Input from './input.component'
import Forecast from './forecast.component'
import './weatherReport.style.css'

const apiKey = "1f593f53708f47048119145f9b2177f9";

export default class WeatherReport extends React.Component {
    constructor() {
        super();
        this.state = {
            city: undefined,
            country: undefined,
            currentTemp: undefined,
            tempMin: undefined,
            tempMax: undefined,
            description: "",
            icon: "",
            forecast: undefined,
            error: false,
        };
        this.getWeather();
    }

    getWeather = async (event) => {
        let city = "stockholm";
        let weatherList = new Array;

        if (event != null) {
            event.preventDefault();
            city = event.target.elements.city.value;
        }

        if (city) {
            const apiCall = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}C&key=${apiKey}`);
            const response = await apiCall.json();
            let weatherList = response.data;

            this.setState({
                city: response.city_name,
                country: response.country_code,
                currentTemp: response.data[0].temp,
                tempMin: response.data[0].min_temp,
                tempMax: response.data[0].max_temp,
                description: response.data[0].weather.description,
                icon: response.data[0].weather.icon,
                forecast: weatherList,
                error: null,
            })

        } else {
            this.setState({ error: true })
        }
    }

    render() {
        return (<div className="App">
            <Input loadWeather={this.getWeather} error={this.state.error} />
            <Weather icon={this.state.icon}
                city={this.state.city}
                country={this.state.country}
                description={this.state.description}
                currentTemp={this.state.currentTemp}
                minTemp={this.state.tempMin}
                maxTemp={this.state.tempMax} />
            <Forecast forecast={this.state.forecast} />
        </div>
        );
    }
}