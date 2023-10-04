import React from "react";
import Image from "next/image";
import taskImage from "../TaskDescriptionComponent/elements/TaskDescriptionComponent.webp"; // Replace this with the actual path to your image

const TaskDescriptionComponent = () => {
  return (
    <div className="py-16 text-center ">
      <h1 className="mb-6 text-4xl font-bold">Describe what you need done</h1>
      <p className="mb-8 text-lg">
        Describe what you need done in a few sentences. Keep it simple and clear
        to attract the best Taskers.
      </p>
      <div
        className="mx-auto mb-8 rounded-lg shadow-lg"
        style={{ width: "400px", height: "300px", position: "relative" }}
      >
        <Image
          src={taskImage}
          alt="Task Description"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <p className="mb-8 text-lg">Post your task for free</p>
      <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
        Post Your Task
      </button>
    </div>
  );
};

export default TaskDescriptionComponent;
