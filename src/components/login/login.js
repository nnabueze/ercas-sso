import React, { useState, useContext, useEffect } from "react";
import { LoginService } from "../../services/AuthService";
import { AuthContext } from "../../context/AuthContext";
import { AuthActionSuccess } from "../../actions/AuthAction";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const Login = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const { dispatch, auth } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (auth !== null) {
      if (auth.isAuth) {
        //props.history.push("/dashboard");
        window.location = "/dashboard";
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);

    const response = await LoginService({
      email: userName,
      password: password,
    });

    responseDisplay(response);
  };

  const responseDisplay = (response) => {
    setUserName("");
    setPassword("");

    if (typeof response !== "undefined") {
      setisLoading(false);

      dispatch(AuthActionSuccess(response));

      window.location = "/dashboard";
    } else {
      setisLoading(false);

      setisError(true);

      setMessage("Network Error...Kindly check network");
    }
  };

  const handleSetCookie = () => {
    setCookie("user", "obydul", { path: "/" });
  };

  const handleRemoveCookie = () => {
    removeCookie("user");
  };

  return (
    <div className="background show-spinner no-footer">
      <div className="fixed-background" />
      <main className="default-transition">
        <div className="container">
          <div className="row h-100">
            <div className="col-12 col-md-10 mx-auto my-auto">
              <div className="card auth-card">
                <div className="position-relative image-side ">
                  <p className=" text-white h2">MAGIC IS IN THE DETAILS</p>
                  <p className="white mb-0">
                    Please use your credentials to login.
                    <br />
                    If you are not a member, please
                    <Link to="" className="white">
                      register
                    </Link>{" "}
                    .
                  </p>
                </div>
                <div className="form-side">
                  <Link to="/dashboard">
                    <h2 style={{ fontWeight: "bold", fontSize: 30 }}>
                      <span>
                        <img src="/logo.png" alt="logo" />
                      </span>
                    </h2>
                  </Link>
                  {isError && (
                    <div
                      className="alert alert-warning alert-dismissible fade show rounded mb-0"
                      role="alert"
                    >
                      <strong>Error !&nbsp;&nbsp;</strong> {message}
                      <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  )}
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <h6 className="mb-4">Login</h6>
                  <form onSubmit={handleSubmit}>
                    <label className="form-group has-float-label mb-4">
                      <input
                        className="form-control"
                        value={userName}
                        name="username"
                        onChange={(e) => setUserName(e.target.value)}
                      />
                      <span>E-mail</span>
                    </label>
                    <label className="form-group has-float-label mb-4">
                      <input
                        className="form-control"
                        value={password}
                        name="pass"
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                      />
                      <span>Password</span>
                    </label>
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="#">Forget password?</Link>
                      <button
                        className="btn btn-primary btn-lg btn-shadow"
                        type="submit"
                        disabled={isLoading}
                      >
                        {isLoading && (
                          <i
                            className="fa fa-refresh fa-spin"
                            style={{ marginRight: "5px", color: "white" }}
                          />
                        )}
                        {isLoading && <span>&nbsp;&nbsp;WAITING</span>}
                        {!isLoading && <span>LOGIN</span>}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
