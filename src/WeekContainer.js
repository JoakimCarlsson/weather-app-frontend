import React from 'react';
import DayCard from './appComponent/daycard.component'

const city = "Stockholm"
const apiKey = "a12aac3477076f4dd427d978d4df0880"; //a12aac3477076f4dd427d978d4df0880 6204f316285ab033c0be591f4a1721be

class WeekContainer extends React.Component {
  state = {
    fullData: [],
    dailyData: []
  }

  componentDidMount = (props) => {
    const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(weatherUrl)
    .then(res => res.json())
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      this.setState({
        fullData: data.list,
        dailyData: dailyData
      }, () => console.log(this.state))
    })
  }

  formatDayCards = () => {
    return this.state.dailyData.map((reading, index) => <DayCard reading={reading} index={index} />)
  }

  render() {

    return (
      <div className="container">
      <h1 className="display-1 jumbotron">5-Day Forecast.</h1>
      <h5 className="display-5 text-muted">{city}</h5>
        <div className="row justify-content-center">

          {this.formatDayCards()}

        </div>
      </div>
    )
  }
}

export default WeekContainer;