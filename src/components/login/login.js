import React, { useState } from "react";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(userName, password);
  };

  return (
    <div className="limiter">
      <div className="container-login100 page-background">
        <div className="wrap-login100">
          <form className="login100-form validate-form" onSubmit={handleSubmit}>
            <span className="login100-form-logo">
              <img alt="" src="../assets/img/logo-2.png" />
            </span>
            <span className="login100-form-title p-b-34 p-t-27">Log in</span>
            <div
              className="wrap-input100 validate-input"
              data-validate="Enter username"
            >
              <input
                className="input100"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                name="username"
                placeholder="Username"
              />
              <span className="focus-input100" data-placeholder="" />
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Enter password"
            >
              <input
                className="input100"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="pass"
                placeholder="Password"
              />
              <span className="focus-input100" data-placeholder="" />
            </div>
            <div className="contact100-form-checkbox">
              <input
                className="input-checkbox100"
                id="ckb1"
                type="checkbox"
                name="remember-me"
              />
              <label className="label-checkbox100" htmlFor="ckb1">
                Remember me
              </label>
            </div>
            <div className="container-login100-form-btn">
              <button className="login100-form-btn">Login</button>
            </div>
            <div className="text-center p-t-30">
              <a className="txt1" href="forgot_password.html">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
