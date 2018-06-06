import React from 'react';
import PropTypes from 'prop-types';
import { replaceString } from '../utils/api';

const CurrentWeather = (props) => {
  let city = props.city;
  let state = props.state;

  city = replaceString(city);
  state = replaceString(state);

  const { date, currentTemp, weatherDescription, weatherType, icon } = props;

  return (
    <div className="current-weather-info">
      <h1>{date}</h1>
      <h2>{`${city}, ${state}`}</h2>
      <h2>It's Currently</h2>

      <p>{currentTemp}&#8457;</p>

      <img src={`/assets/${icon}.svg`} style={{ height: '13.6em' }} alt={weatherType} />
      <ul>
        <li key="2"> {weatherType}</li>
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
  icon: PropTypes.string.isRequired
};

export default CurrentWeather;
