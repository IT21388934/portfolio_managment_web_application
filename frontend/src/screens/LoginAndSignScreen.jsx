import "./loginScreen.css";
import { useState } from "react";

import Login from "../components/other/Login";
import SignUp from "../components/other/SingUp";

export default function LoginScreen() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <div className="container2">
        <div className="loginOrSignUpContainer">
          <div className="optionContainer">
            <button className="btn" onClick={() => setIsLogin(true)}>
              Login
            </button>
            <button className="btn" onClick={() => setIsLogin(false)}>
              Register
            </button>
          </div>
          {isLogin ? <Login /> : <SignUp />}
        </div>
      </div>
    </>
  );
}
