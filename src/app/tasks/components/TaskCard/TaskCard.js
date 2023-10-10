import React from "react";

const TaskCard = ({
  title,
  description,
  budget,
  location,
  selectedDate,
  onClick,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="mb-2 text-xl font-bold text-gray-800">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      <div className="flex flex-col mb-4 md:flex-col md:justify-between">
        <div className="flex items-center mb-2 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-1 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 17l-4-4m0 0l4-4m-4 4h14"
            />
          </svg>
          <span className="text-gray-700">Budget: Rs.{budget}</span>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-1 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l-7-7 7-7 7 7-7 7zm0 0v-14"
            />
          </svg>
          <span className="text-gray-700">Location: {location}</span>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-1 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <span className="text-gray-700">Date: {selectedDate}</span>
        </div>
      </div>
      <button
        className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        onClick={onClick}
      >
        View Details
      </button>
    </div>
  );
};

export default TaskCard;
