import moment from 'moment';

export function convertTemp(kelvinTemp) {
  const fTemp = (kelvinTemp - 273.15) * 1.8 + 32;
  return parseFloat(fTemp.toFixed(0));
}

export const getDate = (givenDate) => {
  let date;
  const dateMili = givenDate * 1000;
  const initialDate = new Date(dateMili);
  date = moment(initialDate).format('dddd MMMM Do');
  return date;
};

export function formatWeather(data) {
  const firstDay = data.list[0];
  const dayOneDate = getDate(firstDay.dt);
  const dayOneMinTemp = firstDay.temp.min.toFixed(0);
  const dayOneMaxTemp = firstDay.temp.max.toFixed(0);
  const dayOneWeatherType = firstDay.weather[0].main;
  const dayOneWeatherDescription = firstDay.weather[0].description;
  const dayOneIcon = firstDay.weather[0].icon;

  const secondDay = data.list[1];
  const dayTwoDate = getDate(secondDay.dt);
  const dayTwoMinTemp = secondDay.temp.min.toFixed(0);
  const dayTwoMaxTemp = secondDay.temp.max.toFixed(0);
  const dayTwoWeatherType = secondDay.weather[0].main;
  const dayTwoWeatherDescription = secondDay.weather[0].description;
  const dayTwoIcon = secondDay.weather[0].icon;

  const thirdDay = data.list[2];
  const dayThreeDate = getDate(thirdDay.dt);
  const dayThreeMinTemp = thirdDay.temp.min.toFixed(0);
  const dayThreeMaxTemp = thirdDay.temp.max.toFixed(0);
  const dayThreeWeatherType = thirdDay.weather[0].main;
  const dayThreeWeatherDescription = thirdDay.weather[0].description;
  const dayThreeIcon = thirdDay.weather[0].icon;

  const fourthDay = data.list[3];
  const dayFourDate = getDate(fourthDay.dt);
  const dayFourMinTemp = fourthDay.temp.min.toFixed(0);
  const dayFourMaxTemp = fourthDay.temp.max.toFixed(0);
  const dayFourWeatherType = fourthDay.weather[0].main;
  const dayFourWeatherDescription = fourthDay.weather[0].description;
  const dayFourIcon = fourthDay.weather[0].icon;

  const fifthDay = data.list[4];
  const dayFiveDate = getDate(fifthDay.dt);
  const dayFiveMinTemp = fifthDay.temp.min.toFixed(0);
  const dayFiveMaxTemp = fifthDay.temp.max.toFixed(0);
  const dayFiveWeatherType = fifthDay.weather[0].main;
  const dayFiveWeatherDescription = fifthDay.weather[0].description;
  const dayFiveIcon = fifthDay.weather[0].icon;

  const fiveDayForecast = {
    dayOne: {
      date: dayOneDate,
      minTemp: dayOneMinTemp,
      maxTemp: dayOneMaxTemp,
      weatherType: dayOneWeatherType,
      weatherDescription: dayOneWeatherDescription,
      icon: dayOneIcon
    },
    dayTwo: {
      date: dayTwoDate,
      minTemp: dayTwoMinTemp,
      maxTemp: dayTwoMaxTemp,
      weatherType: dayTwoWeatherType,
      weatherDescription: dayTwoWeatherDescription,
      icon: dayTwoIcon
    },
    dayThree: {
      date: dayThreeDate,
      minTemp: dayThreeMinTemp,
      maxTemp: dayThreeMaxTemp,
      weatherType: dayThreeWeatherType,
      weatherDescription: dayThreeWeatherDescription,
      icon: dayThreeIcon
    },
    dayFour: {
      date: dayFourDate,
      minTemp: dayFourMinTemp,
      maxTemp: dayFourMaxTemp,
      weatherType: dayFourWeatherType,
      weatherDescription: dayFourWeatherDescription,
      icon: dayFourIcon
    },
    dayFive: {
      date: dayFiveDate,
      minTemp: dayFiveMinTemp,
      maxTemp: dayFiveMaxTemp,
      weatherType: dayFiveWeatherType,
      weatherDescription: dayFiveWeatherDescription,
      icon: dayFiveIcon
    }
  };
  return fiveDayForecast;
}
