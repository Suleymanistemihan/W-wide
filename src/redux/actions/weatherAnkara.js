import axios from "axios";
import { DATA_PENDING, DATA_REJECTED, WEATHER_DATA } from "../constants";

const fetchDataPending = () => ({
  type: DATA_PENDING,
})

const weatherFetchAnkara = data => ({
  type: WEATHER_DATA,
  data,
})

const rejected = error => ({
  type: DATA_REJECTED,
  error
})


export const fetchWeatherAnkara = () => dispatch => {
  fetchDataPending()
  axios.get("http://api.weatherapi.com/v1/current.json?key=e3361b603e234f468e3121754211209&q=ANKARA&aqi=no")
    .then((response) => {
      dispatch(weatherFetchAnkara(response.data))
    })
}