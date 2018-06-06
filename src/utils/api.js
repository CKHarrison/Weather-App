import { convertTemp, getDate } from './helpers';

const apiKey = 'b714ec74bbab5650795063cb0fdf5fbe';

export async function getCurrentWeather(city, state) {
  const fetchInfo = await fetch(
    `//api.openweathermap.org/data/2.5/weather?q=${city},${state}&type=accurate&APPID=${apiKey}`
  );
  const data = await fetchInfo.json();
  return data;
}

export const getCurrentWeatherState = (weather) => {
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
};

export const getFiveDayWeather = async (city, state) => {
  const fetchInfo = await fetch(
    `//api.openweathermap.org/data/2.5/forecast/daily?q=${city},${state}&units=imperial&type=accurate&APPID=${apiKey}&cnt=5`
  );
  const data = await fetchInfo.json();

  return data;
};

export const replaceString = (string) => {
  const newString = string.replace(/%20/g, ' ');
  return newString;
};
