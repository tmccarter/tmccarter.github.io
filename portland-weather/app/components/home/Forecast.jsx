import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';

require('./Forecast.css');

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: ['testing from forecast component'],
    };
  }

  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=5746545&units=imperial&APPID=2e67bf2756763f6ded1d40dfc8a78998')
    .then(resp => resp.json())
    .then((json) => {
      this.setState({ weatherData: json.list });
    })
    .catch((err) => {
      this.setState({ weatherData: `There was an error: ${err}` });
    });
  }

  render() {
    let forecastItems = 'Loading...';
    const weatherData = this.state.weatherData;
    if (weatherData.length > 1) {
      // map a new array with five entries, each having:
      // - high
      // - low
      // - windspeed
      // - daytime condition
      // - daytime condition icon
      // - nighttime condition
      // - nighttime condition icon
      const fiveDayForecast = [];
      weatherData.forEach((forecastItem) => {
        const day = {};
        if (forecastItem.dt_txt.indexOf('18:00:00') > 0) {
          day.timeStamp = forecastItem.dt_txt
          day.high = Math.round(forecastItem.main.temp_max);
          day.dayCondition = forecastItem.weather[0].main;
          day.dayConditionIcon = forecastItem.weather[0].icon;
          day.windSpeed = Math.round(forecastItem.wind.speed);
          fiveDayForecast.push(day);
        }
      });
      forecastItems = fiveDayForecast.map((forecastItem, index) =>
        <ForecastItem forecastItem={forecastItem} key={index} />,
      );
    }
    return (
      <ul className="forecastItems">{forecastItems}</ul>
    );
  }
}


export default Forecast;
