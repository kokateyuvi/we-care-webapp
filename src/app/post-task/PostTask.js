"use client";

import { addTask } from "@/services/taskService";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";

const TaskDetails = ({ onNext }) => {
  const [task, setTask] = useState({
    title: "",
    selectedDate: null,
    location: "",
    budget: "",
  });

  const handleDateChange = (date) => {
    setTask({ ...task, selectedDate: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(task);
      // Call the addTask function to save the task
      const result = await addTask(task);

      // Display success message
      toast.success("Task Added successfully");

      // Log the result to the console (you can remove this line if not needed)
      console.log(result);

      // Clear the form after successful submission
      setTask({
        title: "",
        selectedDate: null,
        location: "",
        budget: "",
      });

      // Invoke onNext function to proceed to the next step (if needed)
      // Assuming onNext is a function to handle the next step
    } catch (error) {
      console.error("Error creating task:", error);
      // Handle network errors or other exceptions
      // Display an error message (optional)
      toast.error("Failed to add task");
    }
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
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium text-gray-600">
          When do you need this done?
        </label>
        <DatePicker
          className="w-full p-2 border rounded"
          selected={task.selectedDate}
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
          value={task.location}
          onChange={(e) => setTask({ ...task, location: e.target.value })}
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
          value={task.budget}
          onChange={(e) => setTask({ ...task, budget: e.target.value })}
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
