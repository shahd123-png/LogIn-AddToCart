import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../containers/Home/HomePage"
import LoginPage from "../containers/Login/LoginPage";
const AppRouter = () => {
  return (  
    <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/home/:username" element={<HomePage/>} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRouter;
