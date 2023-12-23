import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import HashLoader from "react-spinners/HashLoader";

// //components and screens

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ProjectScreen from "./screens/ProjectScreen";
import Skills from "./components/other/Skills";
import ContactScreen from "./screens/ContactScreen";
import Login from "./components/other/Login";
import SignUp from "./components/other/SingUp";

function App() {
  // const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, [isLoading]);

  return (
    <>
      {/* <div className="mainContainer"></div> */}
      {isLoading ? (
        <div className="loadingContainer">
          <HashLoader color="#5ce6d4" size={50} isLoading={isLoading} />
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/singUp" element={<SignUp />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/projects" element={<ProjectScreen />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<ContactScreen />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
