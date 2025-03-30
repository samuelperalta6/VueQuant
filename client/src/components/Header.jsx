import React from "react";
import { useNavigate } from "react-router-dom";
import API from "../axiosConfig";
import { useUser } from "../context/UserContext";

const Header = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleLogout = async () => {
    try {
      await API.post("/auth/logout");
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <header className="bg-white shadow-md h-16 flex items-center px-6 justify-between">
      <h1 className="text-xl font-bold text-gray-800">VueQuant</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
