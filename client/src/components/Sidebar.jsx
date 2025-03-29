import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen p-5">
      <nav className="space-y-4">
        <Link to="/dashboard" className="block hover:text-blue-400">
          📊 Dashboard
        </Link>
        <Link to="/analytics" className="block hover:text-blue-400">
          📈 Analytics
        </Link>
        <Link to="/journal" className="block hover:text-blue-400">
          📘 Journal
        </Link>
        <Link to="/resources" className="block hover:text-blue-400">
          📚 Resources
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
