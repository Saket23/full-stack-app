import { combineReducers } from "redux";
import storeData from "./storeData";
import storeDetailsData from "./storeDetailsData";

export default combineReducers({
  storeData,
  storeDetailsData
});
