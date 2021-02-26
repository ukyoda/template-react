import React from "react";
import { useAppDispatch, useAppSelector } from "../../modules/store";
import { clear, decrement, increment } from "../../modules/counter/slice";
import { Button } from "react-bootstrap";

export default () => {
  const count = useAppSelector((state) => state.counterReduer.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <p>{count}</p>
      <Button variant="secondary" onClick={() => dispatch(increment())}>
        インクリメント
      </Button>{" "}
      <Button variant="secondary" onClick={() => dispatch(decrement())}>
        デクリメント
      </Button>{" "}
      <Button variant="secondary" onClick={() => dispatch(clear())}>
        クリア
      </Button>{" "}
    </div>
  );
};
