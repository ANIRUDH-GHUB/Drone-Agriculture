import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../common/ProtectedRoute";
import FarmerInfo from "../components/FarmerInfo/FarmerInfo";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Singup from "../pages/Signup/Signup";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Homepage />} /> */}
        {/* <Route path="home" element={<Navigate replace to="/" />} /> */}
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="" element={<Home />} />
        <Route path="register" element={<Singup />} />
        <Route path="login" element={<Login />} />
        <Route path="farmer-profile" element={<FarmerInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
