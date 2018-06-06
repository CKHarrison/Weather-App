import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import {
  getCurrentWeather,
  getFiveDayWeather,
  getCurrentWeatherState
} from '../utils/api';
import FiveDayForecast from './FiveDayForecast';
import Loading from '../utils/Loading';
import { getDate } from '../utils/helpers';

class Forecast extends Component {
  state = {
    city: '',
    state: '',
    date: '',
    currentTemp: '',
    weatherType: '',
    weatherDescription: '',
    weatherIcon: '',
    forecast: [],
    loading: true
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
      forecast,
      loading: false
    });
  }
  render() {
    if (this.state.loading) {
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
            icon={this.state.weatherIcon}
          />
        </div>
        <div className="forecast-weather">
          {this.state.forecast.list.map((weatherItem) => (
            <div className="tile">
              <FiveDayForecast
                key={weatherItem.weather[0].id}
                date={getDate(weatherItem.dt)}
                minTemp={weatherItem.temp.min.toFixed(0)}
                maxTemp={weatherItem.temp.max.toFixed(0)}
                weatherDescription={weatherItem.weather[0].description}
                weatherType={weatherItem.weather[0].main}
                icon={weatherItem.weather[0].icon}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Forecast;
