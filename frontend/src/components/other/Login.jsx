import "./loginScreen.css";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LoginScreen() {
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
                    <input type="email" id="email" placeholder="Enter email" />
                  </div>
                  <div className="formGroup">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter password"
                    />
                  </div>
                  <button className="btn" type="submit">
                    Login
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
