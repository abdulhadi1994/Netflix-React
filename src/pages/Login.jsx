import { useState, useEffect } from "react";
import NavLogo from "../assets/logo.png";
import { auth } from "../firebase/firebase.js";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate();


  function signUp(event) {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
       if (error) {
          setError("This email is already in use. Please try a different email.");
        } else {
          setError("An error occurred. Please try again.");
        }
      });
  }

  return (
    <>
      <div className="login">
        <img src={NavLogo} className="login__logo no-cursor" />
        <div className="login-form">
          <h1 className="login-form-heading">Sign Up</h1>
          <form onSubmit={signUp}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="login-form-btn" type="submit">
              Sign Up
            </button>
          </form>
          {error && <p className="error-message">{error}</p>} 
          <div className="form-switch">
            <p>
              Already a memeber?<span>Sign In Now</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
