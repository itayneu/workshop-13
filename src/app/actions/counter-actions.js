import actionsTypes from "./constants";

const increment = () => ({
  type: actionsTypes.INCREMENT
});

const decrement = () => ({
  type: actionsTypes.DECREMENT
});

const reset = () => ({
  type: actionsTypes.RESET
});

export const incrementAction = () => {
  return dispatch => {
    dispatch(increment());
  };
};

export const decrementAction = () => {
  return dispatch => {
    dispatch(decrement());
  };
};

export const resetAction = () => {
  return dispatch => {
    dispatch(reset());
  };
};
