import { useState } from "react";
import "./App.css";
import Form from "./modules/form";
import Dashboard from "./modules/form/dashboard";
import { Route, Routes, Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children, auth = false }) => {
  const isLogedIn = localStorage.getItem("user:token") !== null || false;

  if (!isLogedIn && auth) {
    return <Navigate to="/user/sign_in" />;
  } else if (isLogedIn && ["/user/sign_in", "/user/sign_up"].includes(window.location.pathname)) {
    return <Navigate to="/" />;
  }

  return children;
};

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes auth={true}>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/user/sign_in"
          element={
            <ProtectedRoutes>
              <Form isSignInPage={true} />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/user/sign_up"
          element={
            <ProtectedRoutes>
              <Form isSignInPage={false} />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default App;
