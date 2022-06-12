const getAuthState = state => state.auth;

export const getLoggedInUser = state => getAuthState(state).userName;
export const getIsBadUser = state => getAuthState(state).badUser;
export const getIsBadPassword = state => getAuthState(state).badPassword;
export const getIsLoggedIn = state => !!getLoggedInUser(state);
