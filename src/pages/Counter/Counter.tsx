import React from "react";
import { useAppDispatch, useAppSelector } from "../../modules/store";
import { clear, decrement, increment } from "../../modules/counter/slice";

export default () => {
  const count = useAppSelector((state) => state.counterReduer.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>インクリメント</button>
      <button onClick={() => dispatch(decrement())}>デクリメント</button>
      <button onClick={() => dispatch(clear())}>クリア</button>
    </div>
  );
};
