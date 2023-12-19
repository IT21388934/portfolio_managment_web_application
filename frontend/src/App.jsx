// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import HashLoader from "react-spinners/HashLoader";

//components and screens
import Header from "./components/common/Heder";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ProjectScreen from "./screens/ProjectScreen";

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
          <Header />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/projects" element={<ProjectScreen />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
