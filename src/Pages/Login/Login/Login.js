import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location?.state?.from || "/";

  const { error, signInUsingGoogle } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginForm = (e) => {
    e.preventDefault();
    // userLogin(email, password);
  };

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        const user = result.user;
        // setUsers(user);
        history.push(redirect_uri);
      })
      .catch((error) => {
        // const errorMessage = error.message;
        // setError(errorMessage);
      })
      .finally(() => {
        // isLoading(false);
      });
  };

  return (
    <div className="text-center container">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-xs-12">
          <h2 className="mt-5">Login</h2>
          <form onSubmit={handleLoginForm}>
            <label htmlFor="email"></label>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              className="p-2 m-2 w-50 "
              onBlur={handleEmailChange}
            />
            <br />
            <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="p-2 m-2  w-50 "
              onBlur={handlePasswordChange}
            />
            <br />
            <input type="submit" value="Login" className="p-2 w-50 m-2" />
          </form>
          <p>
            Don't have account{" "}
            <Link to="/register" style={{ textDecoration: "none" }}>
              Register Now
            </Link>
          </p>
          <Button className="mb-3 w-50" onClick={handleGoogleSignIn}>
            Google SignIn
          </Button>
        </div>
        <div className="col-lg-6 col-md-12 col-xs-12">
          <img
            src="https://i.ibb.co/CKPGwQ6/Login-amico.png"
            alt=""
            className="w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
