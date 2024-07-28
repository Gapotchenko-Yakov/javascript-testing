import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/reducers/counter.reducer";
import getCounterValue from "../../store/reducers/selectors/getCounterValue/getCounterValue.js";

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h2>Value: {value}</h2>
      <button onClick={onDecrement}>DEC</button>
      <button onClick={onIncrement}>INC</button>
    </div>
  );
};

export default Counter;
