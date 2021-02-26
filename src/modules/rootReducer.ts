import { combineReducers } from "@reduxjs/toolkit";
import counterReduer from "./counter/slice";
import asyncCounterReducer from "./asyncDemo/slice";

const rootReducer = combineReducers({
  counterReduer,
  asyncCounterReducer,
});

export default rootReducer;
