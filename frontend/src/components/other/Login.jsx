import "./loginScreen.css";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { publicRequest } from "../../../requestMethods";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { error, isAuthenticating } = useSelector((state) => state.user);

  if (isAuthenticating) {
    window.location.href = "/";
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const loginUser = {
      email,
      password,
    };
    login(dispatch, loginUser);
  };
  return (
    <>
      <div className="container2">
        <div className="container2">
          <div className="loginOrSignUpContainer">
            <div className="optionContainer">
              <Link to="/login" className="btn">
                Login
              </Link>
              <Link to="/singUp" className="btn">
                Register
              </Link>
            </div>

            <motion.div
              className="smallContainer"
              initial={{ opacity: 0, rotateY: -100 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{
                duration: 1,
                delay: 0.6,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <div className="option">LOGIN</div>
              <div className="welcome">Welcome ! </div>
              <div className="formContainer">
                <form>
                  <div className="formGroup">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="formGroup">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button className="btn" type="submit" onClick={handleLogin}>
                    Login
                  </button>
                </form>
                {error && (
                  <span style={{ color: "red", marginTop: "10px" }}>
                    Something went wrong!
                  </span>
                )}
                <div style={{ marginTop: "10px" }}>
                  <Link style={{ color: "lightblue", fontSize: "14px" }} to="/">
                    Back to Home
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
