import React from "react";
import { useAppDispatch, useAppSelector } from "../../modules/store";
import { clear, decrement, increment } from "../../modules/counter/slice";
import { sleepDecrement, sleepIncrement } from "../../modules/asyncDemo/slice";
import { Button, Col, Row } from "react-bootstrap";
import styled from "styled-components";

const ColAlignCenter = styled(Col)`
  text-align: center;
`;

export default () => {
  const [count1, count2, loading] = useAppSelector((state) => {
    return [state.counterReduer.value, state.asyncCounterReducer.value, state.asyncCounterReducer.loading];
  });
  const dispatch = useAppDispatch();
  return (
    <Row>
      <ColAlignCenter>
        <h2>普通のカウンタ</h2>
        <p>{count1}</p>
        <Button variant="secondary" onClick={() => dispatch(increment())}>
          インクリメント
        </Button>{" "}
        <Button variant="secondary" onClick={() => dispatch(decrement())}>
          デクリメント
        </Button>{" "}
        <Button variant="secondary" onClick={() => dispatch(clear())}>
          クリア
        </Button>{" "}
      </ColAlignCenter>
      <ColAlignCenter>
        <h2>1秒後に更新されるカウンタ</h2>
        <p>{count2}</p>
        <div></div>
        <Button variant="secondary" onClick={() => dispatch(sleepIncrement(count2))} disabled={loading === "pending"}>
          1秒後にインクリメント
        </Button>{" "}
        <Button variant="secondary" onClick={() => dispatch(sleepDecrement(count2))} disabled={loading === "pending"}>
          1秒後にデクリメント
        </Button>{" "}
        <span>{loading}</span>
      </ColAlignCenter>
    </Row>
  );
};
