import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="loginScreen">
      <div className="container">
        <h1 className="loginScreenTitle">Hello User....</h1>
        <h2 className="loginScreenSubTitle"> Welcome to Interview Portal Before starting Login here.</h2>
        <Link to="/login" className="links">
          Click here
          for Login...
        </Link>
      </div>
    </div>
  );
};
