import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getLoggedInUser, getIsBadPassword } from "../../app/selectors/auth-selectors";
import { logInAction, logOutAction } from "../../app/actions/login-actions";
import LoginComponent from "./login-component";

const mapStateToProps = (state, ownProps) => {
  const loggedInUserName = getLoggedInUser(state);
  const badPassword = getIsBadPassword(state);
  return { loggedInUserName, badPassword };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ logInAction, logOutAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
