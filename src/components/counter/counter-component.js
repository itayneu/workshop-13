import { useCallback } from "react";

function CounterComponent({ counterValue, isLoggedIn, incrementAction, decrementAction, resetAction }) {
  const increment = useCallback(() => {
    incrementAction();
  }, [incrementAction]);
  const decrement = useCallback(() => {
    decrementAction();
  }, [decrementAction]);
  const reset = useCallback(() => {
    resetAction();
  }, [resetAction]);

  const disabled = !isLoggedIn;
  return (
    <div className="App">
      <h3>Value: {counterValue}</h3>
      {!isLoggedIn && <div>Please login first</div>}
      <br />
      <button onClick={increment} disabled={disabled}>
        Increase
      </button>
      <button onClick={decrement} disabled={disabled}>
        Decrease
      </button>
      <button onClick={reset} disabled={disabled}>
        Reset
      </button>
    </div>
  );
}

export default CounterComponent;
