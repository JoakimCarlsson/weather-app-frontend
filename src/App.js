import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Weather from './appComponent/weather.component'
import Input from './appComponent/input.component'

const apiKey = "a12aac3477076f4dd427d978d4df0880"; //a12aac3477076f4dd427d978d4df0880 6204f316285ab033c0be591f4a1721be

class App extends React.Component {
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
      error: false,
    };
  }

  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;

    if (city) {
      const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      const response = await apiCall.json();

      this.setState({
        city: response.name,
        country: response.sys.country,
        currentTemp: response.main.temp,
        tempMin: response.main.temp_min,
        tempMax: response.main.temp_max,
        description: response.weather[0].description,
        icon: response.weather[0].icon,
        error: null,
      })
    } else {
      this.setState({ error: true })
    }
  }

  state = {}
  render() {
    return (
      <div className="App">
        <Input loadWeather={this.getWeather} error={this.state.error} />
        <Weather icon={this.state.icon} city={this.state.city} country={this.state.country} description={this.state.description} currentTemp={this.state.currentTemp} minTemp={this.state.tempMin} maxTemp={this.state.tempMax} />
      </div>
    );
  }
}

export default App;
