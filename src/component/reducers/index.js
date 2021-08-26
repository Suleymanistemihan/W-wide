import { combineReducers } from "redux";
import DatasReducer from "./dataReducer"

export default combineReducers({
  data: DatasReducer
});