import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CounterState } from "./types";
import { RootState } from "../store";

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      return state;
    },
    decrement: (state) => {
      state.value -= 1;
      return state;
    },
    clear: (state) => {
      state.value = 0;
      return state;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
      return state;
    },
  },
});

export const { increment, decrement, clear, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
