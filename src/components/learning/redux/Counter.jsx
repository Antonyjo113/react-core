// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../../app/actions'; // Assuming these actions exist

function Counter() {
  const count = useSelector(state => state.counter.count); // Get the count value from Redux state
  const dispatch = useDispatch(); // Access dispatch function to send actions

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
