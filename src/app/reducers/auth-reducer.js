import actionTypes from "../actions/constants";

const initialState = {
  userName: null,
  badPassword: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOG_IN: {
      const { user } = action;
      return { ...state, userName: user, badPassword: false };
    }
    case actionTypes.BAD_PASSWORD:
      return { ...state, badPassword: true };
    case actionTypes.LOG_OUT:
      return initialState;
    default:
      return state;
  }
};
export default authReducer;
