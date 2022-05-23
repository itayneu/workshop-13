import { useCallback, useState } from "react";
import "./login-component.css";

function CounterComponent({ loggedInUserName, badPassword, logInAction, logOutAction }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const onUserChange = useCallback(
    e => {
      setUser(e.target.value);
    },
    [setUser]
  );
  const onPassChange = useCallback(
    e => {
      setPass(e.target.value);
    },
    [setPass]
  );
  const login = useCallback(() => {
    if (user) {
      logInAction(user, pass);
    }
  }, [logInAction, user, pass]);
  const logout = useCallback(() => {
    logOutAction();
  }, [logOutAction]);

  return (
    <div className="login-component">
      {loggedInUserName && <h3>Logged in user: {loggedInUserName}</h3>}
      {!loggedInUserName && <h3>Please log in</h3>}
      <label for="uname">
        <b>Username</b>
      </label>
      <input type="text" placeholder="Enter Username" name="uname" onChange={onUserChange} />
      <br />
      <label for="psw" className="pass-input">
        <b>Password</b>
      </label>
      <input type="password" placeholder="Use 123" name="psw" onChange={onPassChange} />
      <br />
      {!loggedInUserName && <button onClick={login}>Login</button>}
      {loggedInUserName && <button onClick={logout}>Logout</button>}
      {badPassword && <div className="bad-pass">Bad password</div>}
    </div>
  );
}

export default CounterComponent;
