import actionsTypes from "./constants";
const ALLOWED_PASSWORD = "1234";

const logIn = user => ({
  type: actionsTypes.LOG_IN,
  user
});

const badUser = () => ({
  type: actionsTypes.BAD_USER
});

const logOut = () => ({
  type: actionsTypes.LOG_OUT
});

const badPassword = () => ({
  type: actionsTypes.BAD_PASSWORD
});

export const logInAction = (user, password) => {
  return dispatch => {
    if (!user) {
      dispatch(badUser());
    } else if (ALLOWED_PASSWORD !== password) {
      dispatch(badPassword());
    } else {
      dispatch(logIn(user));
    }
  };
};

export const logOutAction = () => {
  return dispatch => {
    dispatch(logOut());
  };
};
