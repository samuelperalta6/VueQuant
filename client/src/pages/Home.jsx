import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to VueQuant 📊</h1>
      <p className="text-lg mb-6 text-gray-600">
        Your private trading journal. Track your stock & options plays like a pro.
      </p>
      <div className="flex gap-4">
        <Link to="/login">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
