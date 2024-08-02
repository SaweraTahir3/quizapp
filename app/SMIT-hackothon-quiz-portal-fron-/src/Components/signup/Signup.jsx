import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import signupImage from '../../Components/Images/smit.png'


const Signup = () => {

  return (
    <div className="signupPage" >
      <img src={signupImage} alt="Sign Up" className="signupImage" />
      <div className="addUser">
        <h3>Sign Up</h3>
        <form className="addUserForm" action="" >
          <div className="inputGroup">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              placeholder="Enter your name"
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Enter your Email"
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              placeholder="Enter Password"
            />
            <button type="submit" className="btn btn-success">
              Sign Up
            </button>
          </div>
        </form>
        <div className="login">
          <p>Already have an Account? </p>
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;





