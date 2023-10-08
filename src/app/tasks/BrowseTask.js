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

  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center">Available Tasks</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            title={task.title}
            description={task.description}
            budget={task.budget}
            location={task.location}
            selectedDate={task.selectedDate}
            onClick={() => setSelectedTask(task)}
          />
        ))}
      </div>
      {selectedTask && (
        <div className="mt-12">
          <h2 className="mb-4 text-2xl font-bold">Selected Task</h2>
          <TaskCard
            title={selectedTask.title}
            description={selectedTask.description}
            budget={selectedTask.budget}
            location={selectedTask.location}
            selectedDate={selectedTask.selectedDate}
          />
        </div>
      )}
    </div>
  );
};

export default BrowseTask;
