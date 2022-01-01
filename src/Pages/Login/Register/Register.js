import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const { signInUsingGoogle, userRegister } = useAuth();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location?.state?.from || "/";

  const handleNameChange = (e) => {
    console.log(e.target.value);
  };

  const handleEmailChange = (e) => {
    const emailC = e.target.value;
    console.log(emailC);
    setEmail(emailC);
  };

  const handlePasswordChange = (e) => {
    const passwordC = e.target.value;
    console.log(passwordC);
    setPassword(passwordC);
  };

  const handleCheckPasswordChange = (e) => {
    console.log(e.target.value);
  };

  const handleRegisterForm = (e) => {
    e.preventDefault();
    userRegister(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        // setError(errorMessage);
      })
      .finally(() => {
        // setIsLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        const user = result.user;
        // setUser(user);
        history.push(redirect_uri);
      })
      .catch((error) => {
        const errorMessage = error.message;
        // setError(errorMessage);
      })
      .finally(() => {
        // setIsLoading(false);
      });
  };

  return (
    <div className="text-center container">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-xs-12">
          <img
            src="https://i.ibb.co/nb8KD86/Sign-up-amico.png"
            alt=""
            className="w-100 mt-5"
          />
        </div>
        <div className="col-lg-6 col-md-12 col-xs-12">
          <h1 className="my-5">Register</h1>
          <form onSubmit={handleRegisterForm}>
            <label htmlFor="name"></label>
            <input
              onBlur={handleNameChange}
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 m-2 w-50 "
            />
            <br />
            <label htmlFor="email"></label>
            <input
              onBlur={handleEmailChange}
              type="text"
              name="email"
              placeholder="Enter Email"
              className="p-2 m-2 w-50 "
            />
            <br />
            <label htmlFor="password"></label>
            <input
              onBlur={handlePasswordChange}
              type="password"
              name="password"
              placeholder="Enter Password"
              className="p-2 m-2  w-50 "
            />
            <br />
            <label htmlFor="password"></label>
            <input
              onBlur={handleCheckPasswordChange}
              type="password"
              name="password"
              placeholder="Re-type Password"
              className="p-2 m-2  w-50 "
            />
            <br />
            <input type="submit" value="Register" className="p-2 w-50 m-2" />
          </form>
          <p className="my-3">
            Already registered ?{" "}
            <Link
              className="link"
              to="/login"
              style={{ textDecoration: "none" }}
            >
              Login Now
            </Link>
          </p>
          <Button
            onClick={handleGoogleSignIn}
            variant="primary"
            className="mb-3 w-50"
          >
            Google SignIn
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
