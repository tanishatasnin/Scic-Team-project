import { getAuth, sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const {
    signInUsingGoogle,
    userRegister,
    setUser,
    setError,
    setIsLoading,
    updateInfo,
    error,
  } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const redirect_uri = location?.state?.from || "/";

  const handleNameChange = (e) => {
    const nameC = e.target.value;
    console.log(nameC);
    setName(nameC);
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
      alert("Password length must be greater than 6 character");
    } else {
      setPassword(passwordC);
    }
  };

  const handleCheckPasswordChange = (e) => {
    const cPassword = e.target.value;
    console.log(cPassword);
    if (password !== cPassword) {
      console.log("Password didn't match");
    }
  };

  const handlePhoto = (e) => {
    const photoUrl = e.target.value;
    console.log(photoUrl);
    setPhotoLink(photoUrl);
  };

  const handleRegisterForm = (e) => {
    e.preventDefault();
    userRegister(email, password)
      .then((res) => {
        setIsLoading(true);
        updateInfo(name, photoLink);
        const user = res.user;
        setUser(user);
        verifyEmail(email);
        navigate(redirect_uri);
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const verifyEmail = (email) => {
    const auth = getAuth();
    sendEmailVerification(auth.currentUser).then(() => {});
  };

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        setIsLoading(true);
        const user = result.user;
        setUser(user);
        setError("");
        navigate(redirect_uri);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
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
            <label htmlFor="photo"></label>
            <input
              onBlur={handlePhoto}
              type="text"
              name="photo"
              placeholder="Photo Url"
              className="p-2 m-2  w-50 "
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
