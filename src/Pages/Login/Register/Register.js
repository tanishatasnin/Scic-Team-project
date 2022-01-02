import { getAuth, sendEmailVerification } from "firebase/auth";
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
    console.log(passwordC.length);
    if (passwordC.length < 6) {
      console.log("Password length must be greater than 6 character");
    } else {
      setPassword(passwordC);
    }
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
        history.push(redirect_uri);
        // setError('');
        verifyEmail(email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const verifyEmail = (email) => {
    const auth = getAuth();
    sendEmailVerification(auth.currentUser).then(() => {});
  };

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        const user = result.user;
        // setUser(user);
        // setError('');
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
    <div className="text-center container register">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-xs-12">
          <img
            src="https://i.ibb.co/KVYxT53/Sign-up-amico.png"
            alt=""
            className="w-100 mt-5"
          />
        </div>
        <div className="col-lg-6 col-md-12 col-xs-12 register-form">
          <h1 className="my-5  text-success">Register</h1>
          <form onSubmit={handleRegisterForm}>
            <label htmlFor="name"></label>
            <input
              onBlur={handleNameChange}
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 m-2 w-50 "
              required
            />
            <br />
            <label htmlFor="email"></label>
            <input
              onBlur={handleEmailChange}
              type="text"
              name="email"
              placeholder="Enter Email"
              className="p-2 m-2 w-50 "
              required
            />
            <br />
            <label htmlFor="password"></label>
            <input
              onBlur={handlePasswordChange}
              type="password"
              name="password"
              placeholder="Enter Password"
              className="p-2 m-2  w-50 "
              required
            />
            <br />
            <label htmlFor="password"></label>
            <input
              onBlur={handleCheckPasswordChange}
              type="password"
              name="password"
              placeholder="Re-type Password"
              className="p-2 m-2  w-50 "
              required
            />
            <br />
            <input type="submit" value="Register" className="p-2 w-50 m-2" />
          </form>
          <p className="my-3">
            Already registered ?{" "}
            <Link
              className="link text-success"
              to="/login"
              style={{ textDecoration: "none" }}
            >
              Login Now
            </Link>
          </p>
          <Button
            onClick={handleGoogleSignIn}
            variant="success"
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
