import React from "react";
import { MdLocationOn, MdEvent } from "react-icons/md";
import Link from "next/link";

const TaskCard = ({
  title,
  description,
  budget,
  location,
  selectedDate,
  status,
  onClick,
  task_id,
}) => {
  // Function to capitalize the first letter of each word
  const capitalizeFirstLetter = (str) => {
    if (typeof str !== "string" || str.trim() === "") {
      return str;
    }
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formattedTitle = capitalizeFirstLetter(title);
  const formattedDescription = capitalizeFirstLetter(description);
  const formattedLocation = capitalizeFirstLetter(location);
  const formattedBudget = `Rs.${parseFloat(budget).toFixed(2)}`;

  let statusColorClass = "";
  switch (status.toLowerCase()) {
    case "open":
      statusColorClass = "text-green-500"; // Green color for open status
      break;
    case "assigned":
      statusColorClass = "text-yellow-500"; // Yellow color for assigned status
      break;
    case "completed":
      statusColorClass = "text-red-500"; // Red color for completed status
      break;
    default:
      statusColorClass = "text-gray-700"; // Default gray color for other statuses
  }

  return (
    <div className="relative p-4 bg-white rounded-lg shadow-md">
      <h3 className={`mb-2 text-xl font-semibold `}>{formattedTitle}</h3>
      <p className="mb-4 text-gray-600">{formattedDescription}</p>
      <div className="flex flex-col mb-4 md:flex-col md:justify-between">
        <div className="flex items-center">
          <MdLocationOn className="w-5 h-5 mr-2 text-gray-700" />
          <span className="text-gray-700">Location: {formattedLocation}</span>
        </div>
        <div className="flex items-center">
          <MdEvent className="w-5 h-5 mr-2 text-gray-700" />
          <span className="text-gray-700">Date: {selectedDate}</span>
        </div>
        <div
          className={`absolute bottom-2 right-2 text-gray-700 ${statusColorClass}`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      </div>
      <div className="absolute flex flex-col p-2 font-extrabold text-gray-800 rounded-full top-2 right-2">
        {formattedBudget}
        <span className="w-20 h-1 bg-blue-600 rounded-full"></span>
      </div>
      <Link href={`/tasks/${task_id}`}>
        <button
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          onClick={onClick}
        >
          View Details
        </button>
      </Link>
    </div>
  );
};

export default TaskCard;
