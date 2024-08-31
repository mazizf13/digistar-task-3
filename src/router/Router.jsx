import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import Beranda from "../pages/Beranda";
import Login from "../pages/Login";
import AboutUs from "../pages/AboutUs";

export default function Router() {
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Beranda />
            </PrivateRoute>
          }
        />
        <Route
          path="/beranda"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Beranda />
            </PrivateRoute>
          }
        />
        <Route
          path="/about-us"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <AboutUs />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
