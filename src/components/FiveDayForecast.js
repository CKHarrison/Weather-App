import React from 'react';
import PropTypes from 'prop-types';

const FiveDayForecast = (props) => {
  const { date, icon, maxTemp, minTemp, weatherDescription, weatherType } = props;
  return (
    <div className="forecast-info">
      <h3>{date}</h3>
      <img src={`/assets/${icon}.svg`} style={{ height: '13.6em' }} alt={weatherType} />
      <div>
        <ul>
          <li key={1}> Low: {minTemp}&#8457;</li>
          <li key={2}> High: {maxTemp}&#8457;</li>
          <li key={3}> {weatherType} </li>
        </ul>
      </div>
    </div>
  );
};

export default FiveDayForecast;

FiveDayForecast.propTypes = {
  date: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  maxTemp: PropTypes.string.isRequired,
  minTemp: PropTypes.string.isRequired,
  weatherDescription: PropTypes.string.isRequired,
  weatherType: PropTypes.string.isRequired
};
