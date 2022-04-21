import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";

const SignInButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button className="button" onClick={() => loginWithRedirect()}>
        Log In
      </button>
    )
  );
};for(let first of second) {third}

export default SignInButton;
