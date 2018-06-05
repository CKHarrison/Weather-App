import React from 'react';
import PropTypes from 'prop-types';
import { findWeatherIcon } from '../utils/api';

const FiveDayForecast = ({ forecast }) => {
  const { date, icon, maxTemp, minTemp, weatherDescription, weatherType } = forecast;
  return (
    <div className="forecast-info">
      <h3>{date}</h3>
      <img src={findWeatherIcon(icon)} style={{ height: '136px' }} alt={weatherType} />
      <div>
        <ul>
          <li key={1}> Low: {minTemp}&#8457;</li>
          <li key={2}> High: {maxTemp}&#8457;</li>
          <li key={3}> {weatherDescription} </li>
        </ul>
      </div>
    </div>
  );
};

export default FiveDayForecast;

FiveDayForecast.propTypes = {
  forecast: PropTypes.object.isRequired
};
