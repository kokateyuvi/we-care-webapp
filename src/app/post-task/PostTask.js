"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TaskDetails = ({ onNext }) => {
  const [title, setTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    const taskDetails = {
      title,
      selectedDate,
      location,
      budget,
    };
    console.log("Task Details:", taskDetails);
    onNext(taskDetails);
  };

  return (
    <div className="max-w-md p-6 mx-auto bg-white rounded shadow-md">
      <h1 className="mb-6 text-2xl font-semibold">Task Details</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          What do you need done?
        </label>
        <input
          type="text"
          className="w-full p-2 mt-1 border rounded"
          placeholder="E.g. Help move my sofa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium text-gray-600">
          When do you need this done?
        </label>
        <DatePicker
          className="w-full p-2 border rounded"
          selected={selectedDate}
          onChange={handleDateChange}
          placeholderText="Select a date"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Where do you need this done?
        </label>
        <input
          type="text"
          className="w-full p-2 mt-1 border rounded"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Whats your budget for this task?
        </label>
        <input
          type="text"
          className="w-full p-2 mt-1 border rounded"
          placeholder="Enter your budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
      </div>
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Next
      </button>
    </div>
  );
};

export default TaskDetails;
