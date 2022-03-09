import axios from "axios";
import { DATA_PENDING, DATA_REJECTED, WEATHER_DATA, WEATHER_DATA_IZMIR } from "../constants";

const fetchDataPending = () => ({
  type: DATA_PENDING,
})

const weatherFetchIzmir = data => ({
  type: WEATHER_DATA_IZMIR,
  data,
})

const rejected = error => ({
  type: DATA_REJECTED,
  error
})


export const fetchWeatherIzmir = () => dispatch => {
  fetchDataPending()
  axios.get("http://api.weatherapi.com/v1/current.json?key=e3361b603e234f468e3121754211209&q=IZMIR&aqi=no")
    .then((response) => {
      dispatch(weatherFetchIzmir(response.data))
    })
}