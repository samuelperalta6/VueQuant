import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md h-16 flex items-center px-6 justify-between">
      <h1 className="text-xl font-bold text-gray-800">VueQuant</h1>
      <div>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
