import actionTypes from "../actions/constants";

const initialState = {
  userName: null,
  badPassword: false,
  badUser: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOG_IN: {
      const { user } = action;
      return { ...state, userName: user, badPassword: false, badUser: false };
    }
    case actionTypes.BAD_USER:
      return { ...state, badPassword: false, badUser: true };
    case actionTypes.BAD_PASSWORD:
      return { ...state, badPassword: true, badUser: false };
    case actionTypes.LOG_OUT:
      return initialState;
    default:
      return state;
  }
};
export default authReducer;
