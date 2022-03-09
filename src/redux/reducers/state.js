import { NEWS_DATA, DATA_PENDING, WEATHER_DATA, DATA_REJECTED, WEATHER_DATA_IZMIR, CURRENCY_DATA } from "../constants";

//NEWS STATE

const newsState = {
  data: ["news"],
  pending: false,
  error: {}
}
export const news = (state = newsState, action) => {
  switch (action.type) {
    case DATA_PENDING:
      return {
        pending: true
      }
    case NEWS_DATA:
      return {
        ...state,
        data: action.data,
        pending: false
      }
    case DATA_REJECTED:
      return {
        error: action.error,
        pending: false,
      }
    default:
      return state;
  }
}
//WEATHER STATE 
const weatherState = {
  data: [],
  pending: false,
  error: {}
}
export const weather = (state = weatherState, action) => {
  switch (action.type) {
    case DATA_PENDING:
      return {
        pending: false
      }
    case WEATHER_DATA:
      return {
        ...state,
        data: action.data,
        pending: false
      }
    case WEATHER_DATA_IZMIR:
      return {
        ...state,
        data: action.data,
        pending: false
      }

    default:
      return state;
  }
}

// CURRENCY STATE

const currencyState = {
  data: [],
  pending: false,
  error: {}
}

export const currency = (state = currencyState, action) => {
  switch (action.type) {
    case DATA_PENDING:
      return {
        pending: false
      }
    case CURRENCY_DATA:
      return {
        state,
        data: action.data,
        pending: false
      }
    default:
      return state;
  }
}