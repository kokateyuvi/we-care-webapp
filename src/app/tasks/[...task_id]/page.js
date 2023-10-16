"use client";
import React, { useEffect, useState } from "react";
import { getOneTask, updateTask } from "@/services/taskService";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { FaUser, FaMapMarker, FaCalendar } from "react-icons/fa";
import toast from "react-hot-toast";
const InfoSection = ({ icon, title, value }) => (
  <div className="flex items-center mb-4 text-gray-600">
    <div className="mr-3">{icon}</div>
    <div className="flex flex-col">
      <span className="text-sm font-semibold">{title}</span>
      <span className="font-bold">{value}</span>
    </div>
  </div>
);

const OneTask = () => {
  const [loading, setLoading] = useState(true);
  const [taskData, setTaskData] = useState(null);
  const { data: session } = useSession();
  const email = session?.user?.name;
  const params = useParams();
  const task_id = params.task_id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const task = await getOneTask(task_id);
        setTaskData(task);
      } catch (error) {
        console.error("Error fetching task:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleMakeOffer = async () => {
    try {
      if (taskData.status === "COMPLETED") {
        // Show a toast message indicating that the task is completed
        toast.error("Task is already completed. You cannot make an offer.");
      } else {
        const response = await updateTask(task_id, "ASSIGNED");
        const updatedTask = await getOneTask(task_id);
        setTaskData(updatedTask);
        toast.success(response.message);
      }
    } catch (error) {
      console.error("Error making an offer:", error);
    }
  };

  return (
    <div className="container p-8 mx-auto lg:p-8 xl:p-8">
      {taskData && (
        <div className="flex flex-col justify-between p-4 bg-white rounded-lg shadow-lg lg:p-8 xl:p-8 md:flex-row">
          <div className="mb-8 md:mr-12 lg:pr-12 xl:pr-20 md:mb-0">
            <div
              className={`mb-6 text-lg lg:text-sm xl:text-sm font-semibold text-white py-1 px-3 inline-block rounded-full ${
                taskData.status === "OPEN"
                  ? "bg-green-500"
                  : taskData.status === "ASSIGNED"
                  ? "bg-yellow-500"
                  : taskData.status === "COMPLETED"
                  ? "bg-blue-600"
                  : ""
              }`}
            >
              {taskData.status}
            </div>
            <h2 className="mb-6 text-2xl font-semibold lg:text-3xl">
              {taskData.title}
            </h2>

            <InfoSection
              icon={<FaUser size={20} />}
              title="POSTED BY"
              value={taskData.userEmail}
            />
            <InfoSection
              icon={<FaMapMarker size={20} />}
              title="LOCATION"
              value={taskData.location}
            />
            <InfoSection
              icon={<FaCalendar size={20} />}
              title="TO BE DONE ON"
              value={new Date(taskData.selectedDate).toLocaleString()}
            />

            <div className="mt-4 text-gray-700">
              <strong>DESCRIPTION:</strong> {taskData.description}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-6 bg-gray-200 rounded-lg md:w-1/3 lg:w-2/4 xl:w-2/4">
            <div className="mb-4 text-sm font-semibold lg:text-base">
              TASK BUDGET
            </div>
            <div className="mb-6 text-xl font-extrabold text-blue-600 lg:text-3xl">
              Rs. {taskData.budget}
            </div>
            <button
              className={`px-4 py-2 text-sm font-bold text-white bg-blue-500 rounded-full md:text-lg ${
                taskData.status === "COMPLETED"
                  ? "cursor-not-allowed"
                  : "hover:bg-blue-700"
              }`}
              onClick={handleMakeOffer}
              disabled={taskData.status === "COMPLETED"} // Disable the button if the task is completed
            >
              {taskData.status === "COMPLETED"
                ? "Task is Completed"
                : "Make an Offer"}
            </button>
          </div>
        </div>
      )}
      {loading && (
        <div className="mt-8 text-center text-gray-600">Loading...</div>
      )}
      {!loading && !taskData && (
        <div className="mt-8 text-center text-gray-600">Task not found.</div>
      )}
    </div>
  );
};

export default OneTask;
