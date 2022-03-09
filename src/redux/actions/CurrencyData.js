import axios from "axios";
import { DATA_PENDING, CURRENCY_DATA, DATA_REJECTED } from "../constants";

const currencyFetch = data => ({
  type: CURRENCY_DATA,
  data
});

const fetchDataPending = () => ({
  type: DATA_PENDING,
})

const rejected = error => ({
  type: DATA_REJECTED,
  error
})

export const currencyFetchData = () => dispatch => {
  fetchDataPending()
  axios.get("https://api.exchangerate.host/latest?base=USD")
    .then((response) => {
      dispatch(currencyFetch(response.data));
    })
}

