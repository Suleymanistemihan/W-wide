import { combineReducers } from "redux";
import { news, weather } from "./state"

const rootReducer = combineReducers({
  news,
  weather,
});


export default rootReducer;