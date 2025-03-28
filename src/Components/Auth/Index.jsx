import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Acceuil = React.lazy(() => import("../Auth/Acceuil/Index"));
const Dashboard = React.lazy(() => import("../Admin/Dashboard"));
const Settings = React.lazy(() => import("../Admin/Settings"));
const Tables = React.lazy(() => import("../Admin/Tables"));
const Maps = React.lazy(() => import("../Admin/Maps"));
const Login = React.lazy(() => import("../Auth/Login"));
const Register = React.lazy(() => import("../Auth/Register"));
const Landing = React.lazy(() => import("../Landing"));
const Profile = React.lazy(() => import("../Profile"));

import ErrorPage from "../ErrorPage";

function index() {
  return (
    <Router className="flex flex-col justify-between relative h-screen ">
      <Suspense
        fallback={
          <div className="text-amber-600 m-auto mt-20 text-9xl h-screen w-full text-center">
            <p className="m-auto">Chargement en Cours...</p>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Acceuil />} />
          {/* Admin url */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="tables" element={<Tables />} />
          <Route path="maps" element={<Maps />} />
          {/* Frond end url */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="landing" element={<Landing />} />
          <Route path="profile" element={<Profile />} />
          {/* Error page url */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default index;
