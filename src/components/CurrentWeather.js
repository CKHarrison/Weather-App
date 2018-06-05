import React from 'react';
import PropTypes from 'prop-types';
import { findWeatherIcon } from '../utils/api';

const CurrentWeather = (props) => {
  return (
    <div className="current-weather-info">
      <h1>{props.date}</h1>
      <h2>{`${props.city}, ${props.state}`}</h2>
      <h2>It's Currently</h2>

      <p>{props.currentTemp}&#8457;</p>

      <img
        src={findWeatherIcon(props.weatherIcon)}
        style={{ height: '136px' }}
        alt={props.weatherType}
      />
      <ul>
        <li key="2"> {props.weatherType}</li>
        <li key="3">{props.weatherDescription}</li>
      </ul>
    </div>
  );
};

CurrentWeather.propTypes = {
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  currentTemp: PropTypes.number.isRequired,
  weatherType: PropTypes.string.isRequired,
  weatherDescription: PropTypes.string.isRequired,
  weatherIcon: PropTypes.string.isRequired
};

export default CurrentWeather;
