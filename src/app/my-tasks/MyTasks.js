"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getUserTasks } from "@/services/taskService";

const MyTasks = () => {
  const { data: session, status } = useSession();
  const [userTasks, setUserTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userEmail = session?.user?.email;

  useEffect(() => {
    const fetchUserTasks = async () => {
      try {
        setLoading(true);
        setError(null);
        const tasks = await getUserTasks(userEmail);
        setUserTasks(tasks);
      } catch (error) {
        console.error("Error fetching user tasks:", error);
        setError("Failed to fetch tasks. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (status === "authenticated") {
      fetchUserTasks();
    }
  }, [userEmail, status]);

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">My Tasks</h1>
      {loading && <div className="my-8 text-center">Loading tasks...</div>}
      {error && <div className="my-8 text-red-500">Error: {error}</div>}
      {!loading && userTasks.length === 0 && (
        <div className="my-8 text-gray-500">No tasks found.</div>
      )}
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {userTasks.map((task) => (
          <li key={task._id} className="p-4 bg-white rounded shadow">
            <strong>Title:</strong> {task.title}
            <br />
            <strong>Budget:</strong> {task.budget}
            <br />
            <strong>Selected Date:</strong> {task.selectedDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyTasks;
