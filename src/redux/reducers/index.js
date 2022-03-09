import { combineReducers } from "redux";
import { news, weather, currency } from "./state"

const rootReducer = combineReducers({
  news,
  weather,
  currency,
});


export default rootReducer;