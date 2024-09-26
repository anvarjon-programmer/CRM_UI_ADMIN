import React from "react";

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {/* First Card: Module Name */}
      <div className="bg-[#D5D5D5] flex items-center justify-between p-4 rounded-lg shadow-lg text-black">
        <button>{"<"}</button>
        <span className="text-lg font-bold">SMM</span>
        <button>{">"}</button>
      </div>

      {/* Second Card: Module Selector */}
      <div className="bg-gray-200 flex items-center justify-between p-4 rounded-lg shadow-lg">
        <button>{"<"}</button>
        <span className="text-lg font-bold">Modul: All</span>
        <button>{">"}</button>
      </div>

      {/* Third Card: Number of Students */}
      <div className="bg-gray-200 flex flex-col items-center p-4 rounded-lg shadow-lg">
        <span className="text-lg font-semibold">O'quvchilar soni</span>
        <div className="text-blue-500 flex items-center gap-2">
          <i className="fas fa-user-circle text-3xl"></i>
          <span className="text-2xl font-bold">125</span>
        </div>
      </div>

      {/* Fourth Card: Module Progress */}
      <div className="bg-gray-200 flex flex-col items-center p-4 rounded-lg shadow-lg">
        <span className="text-lg font-semibold">Modul progress</span>
        <div className="relative">
          <svg className="w-16 h-16" viewBox="0 0 36 36">
            <path
              className="text-gray-300"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              className="text-blue-500"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="75, 100"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">
            75%
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
