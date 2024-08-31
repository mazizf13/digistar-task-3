import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import Beranda from "../pages/Beranda";
import Login from "../pages/Login";
import AboutUs from "../pages/AboutUs";
import Help from "../pages/Help";
import Media from "../pages/Media";
import Contact from "../pages/Contact";

export default function Router() {
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";

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
        <Route
          path="/help"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Help />
            </PrivateRoute>
          }
        />
        <Route
          path="/media"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Media />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Contact />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
