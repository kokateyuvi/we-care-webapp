"use client";
import React, { useState, useEffect } from "react";
import TaskCard from "./components/TaskCard/TaskCard";
import { getAllTasks } from "@/services/taskService";
import { motion } from "framer-motion";
import { Manrope } from "next/font/google";
const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BrowseTask = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedTasks, setDisplayedTasks] = useState([]);
  const [searchDate, setSearchDate] = useState("");

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
      const titleMatch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
      const descriptionMatch =
        task.description &&
        task.description.toLowerCase().includes(searchTerm.toLowerCase());
      const budgetMatch = task.budget.toString().includes(searchTerm);
  
      // Check if the selectedDate property is a Date object before calling the toLocaleDateString() method.
      const dateMatch =
        task.selectedDate &&
        typeof task.selectedDate === "object" &&
        formatDate(task.selectedDate) === formatDate(new Date(searchDate)); // Format the dates
  
      return titleMatch || (descriptionMatch && budgetMatch) || dateMatch;
    });
  
    setDisplayedTasks(filteredTasks);
  }, [searchTerm, tasks, searchDate]);
  


  return (
    <section className={manrope.className}>
      <div className="container mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center text-gray-800">
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
    </section>
  );
};

export default BrowseTask;
