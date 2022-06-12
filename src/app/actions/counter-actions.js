import actionsTypes from "./constants";

const increment = () => ({
  type: actionsTypes.INCREMENT
});

// TODO create decrement and reset actions

export const incrementAction = () => {
  return dispatch => {
    dispatch(increment());
  };
};

// TODO create decrementAction and resetAction action creators
