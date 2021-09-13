import axios from "axios";
import { DATA_PENDING, NEWS_DATA, DATA_REJECTED } from "../constants";

const newsFetch = data => ({
  type: NEWS_DATA,
  data
});

const fetchDataPending = () => ({
  type: DATA_PENDING,
})

const rejected = error => ({
  type: DATA_REJECTED,
  error
})

export const fetchNewsData = () => dispatch => {
  fetchDataPending()
  axios.get("https://newsapi.org/v2/top-headlines?country=tr&apiKey=b126c9c85a804b01a06a95990a6bd6c7")
    .then((response) => {
      dispatch(newsFetch(response.data));
    })
}

