import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
     <Routes>
       {/* 🌐 Public Routes */}
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />

       {/* 🔒 Protected Route */}
       <Route
         path="/dashboard"
         element={
           <ProtectedRoute>
             <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
