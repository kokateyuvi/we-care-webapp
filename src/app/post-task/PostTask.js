"use client"
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { addTask } from "@/services/taskService";

const TaskDetails = ({ onNext }) => {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  const userName = session?.user?.name;

  const status = "OPEN";

  const [task, setTask] = useState({
    title: "",
    selectedDate: null,
    streetAddress: "",
    streetAddressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    budget: "",
  });

  const handleDateChange = (date) => {
    setTask((prevTask) => ({ ...prevTask, selectedDate: date }));
  };

  const handleGetLocation = () => {
    // Your geolocation code here
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const taskWithUserEmail = { ...task, userEmail, userName, status };
      const result = await addTask(taskWithUserEmail);

      toast.success(result.message);
      setTask({
        title: "",
        selectedDate: null,
        streetAddress: "",
        streetAddressLine2: "",
        city: "",
        state: "",
        postalCode: "",
        budget: "",
      });
      // Assuming onNext is a function to handle the next step
    } catch (error) {
      console.error("Error creating task:", error);
      toast.error("Failed to add task");
    }
  };

  return (
    <div className="max-w-md p-6 mx-auto bg-white rounded shadow-md">
      <h1 className="mb-6 text-2xl font-semibold text-center text-gray-800">
        Task Details
      </h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          What do you need done?
        </label>
        <input
          type="text"
          className="w-full p-2 mt-1 border rounded focus:outline-none focus:border-blue-500"
          placeholder="E.g. Help move my sofa"
          value={task.title}
          onChange={(e) =>
            setTask((prevTask) => ({ ...prevTask, title: e.target.value }))
          }
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          When do you need this done?
        </label>
        <DatePicker
          className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          selected={task.selectedDate}
          onChange={handleDateChange}
          placeholderText="Select a date"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Whats your budget for this task?
        </label>
        <input
          type="text"
          className="w-full p-2 mt-1 border rounded focus:outline-none focus:border-blue-500"
          placeholder="Enter your budget"
          value={task.budget}
          onChange={(e) =>
            setTask((prevTask) => ({ ...prevTask, budget: e.target.value }))
          }
        />
      </div>
      <div className="mb-4 flex space-x-2">
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Street Address
          </label>
          <input
            type="text"
            className="w-full p-2 mt-1 border rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter Street Address"
            value={task.streetAddress}
            onChange={(e) =>
              setTask((prevTask) => ({
                ...prevTask,
                streetAddress: e.target.value,
              }))
            }
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Street Address Line 2
          </label>
          <input
            type="text"
            className="w-full p-2 mt-1 border rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter Street Address Line 2"
            value={task.streetAddressLine2}
            onChange={(e) =>
              setTask((prevTask) => ({
                ...prevTask,
                streetAddressLine2: e.target.value,
              }))
            }
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          City
        </label>
        <input
          type="text"
          className="w-full p-2 mt-1 border rounded focus:outline-none focus:border-blue-500"
          placeholder="Enter City"
          value={task.city}
          onChange={(e) =>
            setTask((prevTask) => ({ ...prevTask, city: e.target.value }))
          }
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          State / Province
        </label>
        <input
          type="text"
          className="w-full p-2 mt-1 border rounded focus:outline-none focus:border-blue-500"
          placeholder="Enter State / Province"
          value={task.state}
          onChange={(e) =>
            setTask((prevTask) => ({ ...prevTask, state: e.target.value }))
          }
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Postal / Zip Code
        </label>
        <input
          type="text"
          className="w-full p-2 mt-1 border rounded focus:outline-none focus:border-blue-500"
          placeholder="Enter Postal / Zip Code"
          value={task.postalCode}
          onChange={(e) =>
            setTask((prevTask) => ({ ...prevTask, postalCode: e.target.value }))
          }
        />
      </div>
      <div className="flex justify-end mb-4 text-right">
        <button
          className="px-3 py-2 text-sm text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none"
          onClick={handleGetLocation}
        >
          Get My Location
        </button>
      </div>
      <button
        className="w-full py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none"
        onClick={handleSubmit}
      >
        Next
      </button>
    </div>
  );
};

export default TaskDetails;
