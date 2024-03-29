import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "react-toastify/ReactToastify.min.css";
import { publicRequest } from "../../../requestMethods";
import {
  successMessage,
  errorMessage,
  warnMessage,
} from "../../toastMessage/toastMessage";

export default function SignUp() {
  const navigate = useNavigate();
  //set data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const [status, setStatus] = useState("success"); //["success", "error", "warn"

  //handle signUp
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      const message = "Password doesn't match";

      warnMessage(message);
    } else {
      const newUser = {
        name,
        email,
        password,
      };
      try {
        const res = await publicRequest.post("/users/register", newUser);
        const { user, success, message } = res.data;
        console.log(user, success, message);

        successMessage(message);
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        navigate("/login");
      } catch (err) {
        const data = err.response.data;
        const message = data.message;
        console.log(data);

        errorMessage(message);
      }
    }
  };

  //Toast messages

  return (
    <>
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
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
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
                    value={password}
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="formGroup">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button className="btn" type="submit" onClick={handleRegister}>
                  Register
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </>
    // </ToastContainer>
  );
}
