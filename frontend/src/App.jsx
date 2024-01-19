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
import ProfileScreen from "./screens/ProfileScreen";
import AdminDashboard from "./screens/AdminDashboard";
import AddProjects from "./screens/AddProjects";
import ImgUploadTest from "./screens/imgUploadTest";

import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
function App() {
  // const [count, setCount] = useState(0)
  const [isloading, setIsloading] = useState(true);

  const user = localStorage.getItem("userState");

  const userData = user ? JSON.parse(user).currentUser.user : null;
  console.log({ userData: userData });

  const isAdmin = userData ? userData.isAdmin : false;

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 5000);
  }, [isloading]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {isloading ? (
        <div className="loadingContainer">
          <HashLoader color="#5ce6d4" size={50} isloading={isloading} />
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
            {/* <Route path="/profile" element={<ProfileScreen />} /> */}
            <Route
              path="/profile"
              element={isAdmin ? <AdminDashboard /> : <ProfileScreen />}
            />
            <Route path="/profile/admin/addProject" element={<AddProjects />} />
            <Route path="/imgUploadTest" element={<ImgUploadTest />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
