"use client";
import React, { useState, useEffect } from "react";
import TaskCard from "./components/TaskCard/TaskCard";
import { getAllTasks } from "@/services/taskService";
import { motion } from "framer-motion";

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BrowseTask = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedTasks, setDisplayedTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasksData = await getAllTasks();
        setTasks(tasksData);
        setDisplayedTasks(tasksData);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredTasks = tasks.filter((task) => {
      const titleMatch = task.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const descriptionMatch =
        task.description &&
        task.description.toLowerCase().includes(searchTerm.toLowerCase());
      const budgetMatch = task.budget.toString().includes(searchTerm);

      return titleMatch || (descriptionMatch && budgetMatch);
    });

    setDisplayedTasks(filteredTasks);
  }, [searchTerm, tasks]);

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center text-blue-600">
        Explore Available Tasks
      </h1>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search by title, description, or budget"
          className="px-4 py-2 text-lg border border-gray-300 rounded-md w-80"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2"
      >
        {displayedTasks.map((task) => (
          <motion.div key={task._id} variants={cardVariants}>
            <TaskCard
              task_id={task._id}
              title={task.title}
              description={task.description}
              budget={task.budget}
              location={task.location}
              selectedDate={task.selectedDate}
              status={task.status}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrowseTask;
