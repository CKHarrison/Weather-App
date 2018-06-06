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

export const formatWeatherDescription = (string) => {
  switch (string) {
    case string === ('01d' || '01n'):
      return 'Clear Skies';
    case string === ('02d' || '02n'):
      return 'Light Clouds';
    case string === ('03d' || '03n'):
      return 'Scattered Clouds';
    case string === ('04d' || '04n'):
      return 'Cloudy';
    case string === ('09d' || '09n'):
      return 'Rain Showers';
    case string === ('10d' || '10n'):
      return 'Rain';
    case string === ('11d' || '11n'):
      return 'Thunderstorms';
    case string === ('13d' || '13n'):
      return 'Snow';
    case string === ('50d' || '50n'):
      return 'Mist';
    default:
      return string;
  }
};
