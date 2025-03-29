import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <h1 className="text-5xl font-extrabold mb-6 text-center">Welcome to <span className="text-blue-600">VueQuant</span></h1>
      <p className="text-lg text-center max-w-xl mb-8">
        VueQuant is your all-in-one trading journal and analytics platform. Log trades, track performance, and master your strategy.
      </p>

      <div className="flex space-x-4">
        <Link
          to="/login"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-xl hover:bg-gray-400 transition duration-300"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;