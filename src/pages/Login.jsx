import React, { useState } from "react";
import NavLogo from "../assets/logo.png";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  return (
    <>
      <div className="login">
        <img src={NavLogo} href="#" className="login__logo" />
        <div className="login-form">
          <h1 className="login-form-heading">{signState}</h1>
          <form>
            {signState === "Sign Up" ? (
              <input type="text" placeholder="Your Name" />
            ) : (
              <></>
            )}
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="login-form-btn">{signState}</button>
          </form>
          <div className="form-switch">
            {signState ==="Sign In" ? 
            <p>New to Netflix? <span onClick={() =>{setSignState("Sign Up")}} >Sign Up Now</span></p>:
            <p>Already a memeber? <span onClick={() =>{setSignState("Sign In")}} >Sign In Now</span></p>}
            </div>
        </div>
      </div>
    </>
  );
};

export default Login;
