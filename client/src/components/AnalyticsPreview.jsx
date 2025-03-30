import React from "react";

const AnalyticsPreview = () => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        📊 Analytics Overview
      </h2>
      <div className="h-48 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center rounded-lg border border-dashed border-gray-300">
        <span className="text-gray-500 text-sm italic">
          Analytics Chart Placeholder (Coming Soon)
        </span>
      </div>
    </div>
  );
};

export default AnalyticsPreview;
