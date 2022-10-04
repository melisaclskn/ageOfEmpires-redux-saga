import { combineReducers } from "redux";
import unitsReducers from "./reducer";

const rootReducer = combineReducers({
  units: unitsReducers,
});

export default rootReducer;
