import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AsyncDemoType } from "./types";
import { RootState } from "../store";

const initialState: AsyncDemoType = {
  value: 0,
  loading: "init",
};

// サンプル用のPromise関数 (指定y秒数後にResolve)
function sleepGo(data: number, time: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
}

const sleepIncrement = createAsyncThunk("asyncDemo/sleepIncrement", async (value: number, thunkAPI) => {
  const newValue = await sleepGo(value + 1, 1000);
  return newValue;
});
const sleepDecrement = createAsyncThunk("asyncDemo/sleepDecrement", async (value: number, thunkAPI) => {
  const newValue = await sleepGo(value - 1, 1000);
  return newValue;
});

export const asyncCounterSlice = createSlice({
  name: "asyncDemo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sleepIncrement.pending, (state) => {
      state.loading = "pending";
      return state;
    });
    builder.addCase(sleepIncrement.fulfilled, (state, action: PayloadAction<number>) => {
      state.loading = "resolve";
      state.value = action.payload;
      return state;
    });
    builder.addCase(sleepDecrement.pending, (state) => {
      state.loading = "pending";
      return state;
    });
    builder.addCase(sleepDecrement.fulfilled, (state, action: PayloadAction<number>) => {
      state.loading = "resolve";
      state.value = action.payload;
      return state;
    });
  },
});

export { sleepIncrement, sleepDecrement };
export default asyncCounterSlice.reducer;
