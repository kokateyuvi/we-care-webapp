"use client";
import React, { useState, useEffect } from "react";
import TaskCard from "./components/TaskCard/TaskCard";
import { getAllTasks } from "@/services/taskService";

const BrowseTask = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasksData = await getAllTasks();
        setTasks(tasksData);
      } catch (error) {
        // Handle error (e.g., show an error message)
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData(); // Fetch tasks when the component mounts
  }, []);

  const handleTaskClick = (taskId) => {
    // Fetch detailed information for the selected task using taskId
    // Update the selected task state with the fetched data
    const selectedTaskData = tasks.find((task) => task._id === taskId);
    setSelectedTask(selectedTaskData);
  };

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center">Available Tasks</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2">
        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            task_id={task._id}
            title={task.title}
            description={task.description}
            budget={task.budget}
            location={task.location}
            selectedDate={task.selectedDate}
            status={task.status} // Pass task status as a prop
            onClick={() => handleTaskClick(task._id)}
          />
        ))}
      </div>
      {selectedTask && (
        <div className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-center">Selected Task</h2>
          <div className="max-w-md p-6 mx-auto bg-white rounded shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">{selectedTask.title}</h3>
            <p className="mb-4 text-gray-600">{selectedTask.description}</p>
            <div className="flex items-center mb-4">
              <span className="mr-2 font-semibold text-blue-600">Budget:</span>$
              {selectedTask.budget}
            </div>
            <div className="flex items-center">
              <span className="mr-2 font-semibold text-blue-600">
                Location:
              </span>
              {selectedTask.location}
            </div>
            <div className="mt-4 text-gray-600">
              <span className="mr-2 font-semibold text-blue-600">
                Selected Date:
              </span>
              {new Date(selectedTask.selectedDate).toLocaleDateString(
                undefined,
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrowseTask;
