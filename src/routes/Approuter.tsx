import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../common/ProtectedRoute";
import CreateFarmerProfile from "../components/CreateProfile/CreateFarmerProfile/CreateFarmerProfile";
import CreatePilotProfile from "../components/CreateProfile/CreatePilotProfile/CreatePilotProfile";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Singup from "../pages/Signup/Signup";
import FarmerDashboard from "../pages/Dashboard/FarmerDashboard/FarmerDashboard";

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
        <Route path="farmer" element={<FarmerDashboard />} />
        <Route path="create-farmer-profile" element={<CreateFarmerProfile />} />
        <Route path="create-pilot-profile" element={<CreatePilotProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
