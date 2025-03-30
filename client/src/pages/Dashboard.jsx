import React, { useContext } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-1">Welcome, {user?.username || "Trader"}!</h2>
          <p className="text-sm text-gray-500 mb-4">{user?.email}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium">Total Trades</h3>
              <p className="text-2xl font-bold mt-2">112</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium">Profit</h3>
              <p className="text-2xl font-bold mt-2 text-green-500">$2,340</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium">Losses</h3>
              <p className="text-2xl font-bold mt-2 text-red-500">$860</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;


