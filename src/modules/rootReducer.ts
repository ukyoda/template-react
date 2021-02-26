import { combineReducers } from "@reduxjs/toolkit";
import counterReduer from "./counter/slice";

const rootReducer = combineReducers({
  counterReduer,
});

export default rootReducer;
