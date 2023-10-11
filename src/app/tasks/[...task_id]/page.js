"use client";
import React, { useEffect, useState } from "react";
import { getOneTask } from "@/services/taskService";
import { useParams } from "next/navigation";

const OneTask = () => {
  const [loading, setLoading] = useState(true);
  const [taskData, setTaskData] = useState(null);

  const params = useParams();
  const task_id = params.task_id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const task = await getOneTask(task_id);
        setTaskData(task);
      } catch (error) {
        // Handle error (e.g., show an error message)
        console.error("Error fetching task:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Fetch task when the component mounts
  }, []);

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center">Task Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : taskData ? (
        <div className="max-w-md p-6 mx-auto bg-white rounded shadow-lg">
          <h3 className="mb-2 text-xl font-semibold">{taskData.title}</h3>
          <p className="mb-4 text-gray-600">{taskData.description}</p>
          <div className="flex items-center mb-4">
            <span className="mr-2 font-semibold text-blue-600">Budget:</span>Rs.
            {taskData.budget}
          </div>
          <div className="flex items-center">
            <span className="mr-2 font-semibold text-blue-600">Location:</span>
            {taskData.location}
          </div>
          <div className="mt-4 text-gray-600">
            <span className="mr-2 font-semibold text-blue-600">
              Selected Date:
            </span>
            {new Date(taskData.selectedDate).toISOString()}
          </div>
        </div>
      ) : (
        <p>Task not found.</p>
      )}
    </div>
  );
};

export default OneTask;
