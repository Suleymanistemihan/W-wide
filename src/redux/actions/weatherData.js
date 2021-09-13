import axios from "axios";
import { DATA_PENDING, WEATHER_DATA, DATA_REJECTED } from "../constants";

const fetchDataPending = () => ({
  type: DATA_PENDING,
})

const weatherFetch = data => ({
  type: WEATHER_DATA,
  data
})

const rejected = error => ({
  type: DATA_REJECTED,
  error
})

export const fetchWeatherData = () => dispatch => {
  fetchDataPending()
  axios.get("http://api.weatherapi.com/v1/current.json?key=e3361b603e234f468e3121754211209&q=Istanbul&aqi=no")
    .then((response) => {
      dispatch(weatherFetch(response.data))
    })
}