import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { to: "/dashboard", label: "Dashboard", icon: "📊" },
    { to: "/analytics", label: "Analytics", icon: "📈" },
    { to: "/journal", label: "Journal", icon: "📘" },
    { to: "/resources", label: "Resources", icon: "📚" },
  ];

  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen p-6 shadow-lg">
      <h2 className="text-2xl font-semibold mb-8 tracking-tight">VueQuant</h2>
      <nav className="space-y-4">
        {links.map(({ to, label, icon }) => (
          <Link
            key={to}
            to={to}
            className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200"
          >
            <span className="text-lg">{icon}</span>
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
