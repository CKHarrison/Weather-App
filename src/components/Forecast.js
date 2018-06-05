import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import {
  getCurrentWeather,
  getFiveDayWeather,
  getCurrentWeatherState
} from '../utils/api';
import FiveDayForecast from './FiveDayForecast';
import Loading from '../utils/Loading';

class Forecast extends Component {
  state = {
    city: '',
    state: '',
    date: '',
    currentTemp: '',
    weatherType: '',
    weatherDescription: '',
    weatherIcon: '',
    forecast: ''
  };
  async componentDidMount() {
    const location = this.props.location.search.toUpperCase().slice(1);
    let [city, state] = location.split(',');

    const currentWeather = await getCurrentWeather(city, state);
    const currentWeatherState = getCurrentWeatherState(currentWeather);

    const {
      date,
      currentTemp,
      weatherType,
      weatherDescription,
      weatherIcon
    } = currentWeatherState;

    const forecast = await getFiveDayWeather(city, state);
    this.setState({
      city,
      state,
      date,
      currentTemp,
      weatherType,
      weatherDescription,
      weatherIcon,
      forecast
    });
  }
  render() {
    if (!this.state.currentTemp) {
      return (
        <div className="loading">
          <Loading />
        </div>
      );
    }
    return (
      <div>
        <div className="current-weather">
          <CurrentWeather
            city={this.state.city}
            state={this.state.state}
            date={this.state.date}
            currentTemp={this.state.currentTemp}
            weatherType={this.state.weatherType}
            weatherDescription={this.state.weatherDescription}
            weatherIcon={this.state.weatherIcon}
          />
        </div>
        <div className="forecast-weather">
          <div className="tile">
            <FiveDayForecast forecast={this.state.forecast.dayOne} />
          </div>

          <div className="tile">
            <FiveDayForecast forecast={this.state.forecast.dayTwo} />
          </div>

          <div className="tile">
            <FiveDayForecast forecast={this.state.forecast.dayThree} />
          </div>

          <div className="tile">
            <FiveDayForecast forecast={this.state.forecast.dayFour} />
          </div>
          <div className="tile">
            <FiveDayForecast forecast={this.state.forecast.dayFive} />
          </div>
        </div>
      </div>
    );
  }
}

export default Forecast;
