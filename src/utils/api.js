import { convertTemp, getDate, formatWeather } from './helpers';

// const MyapiKey = '7ff756e92618963fba03d289aaf2b55d';
const apiKey = 'b714ec74bbab5650795063cb0fdf5fbe';

export async function getCurrentWeather(city, state) {
  const fetchInfo = await fetch(
    `//api.openweathermap.org/data/2.5/weather?q=${city},${state}&type=accurate&APPID=${apiKey}`
  );
  const data = await fetchInfo.json();
  return data;
}

export function getCurrentWeatherState(weather) {
  let date, currentTemp;
  date = getDate(weather.dt);
  const weatherType = weather.weather[0].main;
  const weatherDescription = weather.weather[0].description;
  const weatherIcon = weather.weather[0].icon;

  // get temp info
  currentTemp = convertTemp(weather.main.temp);

  return {
    date,
    currentTemp,
    weatherType,
    weatherDescription,
    weatherIcon
  };
}

export async function getFiveDayWeather(city, state) {
  const fetchInfo = await fetch(
    `//api.openweathermap.org/data/2.5/forecast/daily?q=${city},${state}&units=imperial&type=accurate&APPID=${apiKey}&cnt=5`
  );
  const data = await fetchInfo.json();
  const fiveDayForecast = formatWeather(data);

  return fiveDayForecast;
}

export function findWeatherIcon(icon) {
  switch (icon) {
    case '01d': //sunny
      return '/assets/050-sun.svg';
    case '01n': //clear night
      return '/assets/034-moon.svg';

    case '02d': //few clouds
      return '/assets/005-cloudy-3.svg';
    case '02n': // few clouds night
      return '/assets/009-cloud.svg';

    case '03d': //scattered clouds
      return '/assets/049-clouds.svg';
    case '03n': //broken clouds night
      return '/assets/009-cloud.svg';

    case '04d': //broken clouds
      return '/assets/049-clouds.svg';
    case '04n': //broken clouds
      return '/assets/049-clouds.svg';

    case '09d': //shower rain
      return '/assets/010-rain-3.svg';
    case '09n': //shower rain night
      return '/assets/011-night-rain.svg';

    case '10d': //rain
      return '/assets/040-rain.svg';
    case '10n': // night rain
      return '/assets/011-night-rain.svg';

    case '11d': //thunderstorm
      return '/assets/041-storm.svg';
    case '11n': //thunderstorm night
      return '/assets/041-storm.svg';

    case '13d': //snow
      return '/assets/042-snow.svg';
    case '13n': //snow
      return '/assets/042-snow.svg';

    case '50d': //mist
      return '/assets/030-clouds-1.svg';
    case '50n': //mist
      return '/assets/030-clouds-1.svg';

    default:
      return null;
  }
}

export function replaceString(string) {
  const newString = string.replace(/%20/g, ' ');
  return newString;
}
