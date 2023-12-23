import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
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
          <div className="option">REGISTER</div>
          <div className="welcome">Welcome ! </div>
          <div className="formContainer">
            <form>
              <div className="formGroup">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter name" />
              </div>
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
              <div className="formGroup">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm password"
                />
              </div>
              <button className="btn" type="submit">
                Register
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
