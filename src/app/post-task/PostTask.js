"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { addTask } from "@/services/taskService";

const TaskDetails = ({ onNext }) => {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  const status = "OPEN";

  const [task, setTask] = useState({
    title: "",
    selectedDate: null,
    location: "",
    budget: "",
  });

  const handleDateChange = (date) => {
    setTask((prevTask) => ({ ...prevTask, selectedDate: date }));
  };

  const handleGetLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          try {
            const response = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_GOOGLE_MAPS_API_KEY`
            );
            const data = await response.json();

            if (data.status === "OK" && data.results.length > 0) {
              const address = data.results[0].formatted_address;
              setTask((prevTask) => ({ ...prevTask, location: address }));
            } else {
              console.error("Error getting location details:", data.status);
              toast.error(
                "Error getting your location details. Please try again."
              );
            }
          } catch (error) {
            console.error("Error getting location details:", error);
            toast.error(
              "Error getting your location details. Please try again."
            );
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          toast.error("Error getting your location. Please try again.");
        }
      );
    } else {
      toast.error("Geolocation is not supported by your browser.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const taskWithUserEmail = { ...task, userEmail, status };
      const result = await addTask(taskWithUserEmail);

      toast.success("Task Added successfully");
      setTask({
        title: "",
        selectedDate: null,
        location: "",
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
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Where do you need this done?
        </label>
        <input
          type="text"
          className="w-full p-2 mt-1 border rounded focus:outline-none focus:border-blue-500"
          placeholder="Enter your location"
          value={task.location}
          onChange={(e) =>
            setTask((prevTask) => ({ ...prevTask, location: e.target.value }))
          }
        />
      </div>
      <div className="flex justify-end mb-4 text-right">
        <button
          className="flex justify-end px-2 py-2 text-xs text-right text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none"
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
