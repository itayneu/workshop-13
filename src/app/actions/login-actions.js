import actionsTypes from "./constants";
const ALLOWED_PASSWORD = "123";

const logIn = user => ({
  type: actionsTypes.LOG_IN,
  user
});

// TODO create logout action

const badUser = () => ({
  type: actionsTypes.BAD_USER
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

// TODO create logout action creator
