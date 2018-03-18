import axios from 'axios';

const API_KEY = '22bf531c71ad257ac3576928261dcb2b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type : FETCH_WEATHER,
    payload : request //as we are using ReduxPromise (check main index file), when redux detect a promise payload, it waits to resolve and the it generate a new action with this same
                //type and puts in the payload the response of the promise instead of a promise object.
  };
}