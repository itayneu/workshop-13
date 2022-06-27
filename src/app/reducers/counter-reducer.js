import actionTypes from "../actions/constants";

const initialState = {
  value: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET:
      return { value: 0 };

    case actionTypes.INCREMENT:
      return { value: state.value + 1 };

    case actionTypes.DECREMENT:
      return { value: state.value - 1 };

    default:
      return state;
  }
};
export default counterReducer;
