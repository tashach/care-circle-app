import React from "react";
import { Link } from "react-router-dom";
import "../styles/bootstrap.css";

const ErrorPage = () => {
  return (
    <div className="justify-content-center d-flex flex-column">
      <h3>Uh Oh!</h3>
      <p>We can't seem to find the page you're looking for.</p>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default ErrorPage;
