import React from "react";
import Image from "next/image";
import img from "./elements/img1.jpg";
import Link from "next/link";
import { Lobster } from "next/font/google";

const lobster = Lobster({
  weight: ["400"],
  subsets: ["latin"],
});
const TaskComponent = () => {
  return (
    <div className={`max-w-2xl py-16 mx-auto text-center ${lobster.className}`}>
      <h1 className="mb-6 text-3xl font-bold text-blue-600">
        Needy College Students Ready to Help Older People!
      </h1>
      <p className="mb-8 text-lg text-gray-700">
        Empowering students to assist the elderly with their tasks and errands.
      </p>
      <div className="relative flex justify-center mb-8 overflow-hidden text-center rounded-lg shadow-lg">
        <Image
          src={img}
          alt="College student helping an elderly person"
          priority
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
      <p className="mb-8 text-lg text-gray-700">
        Need assistance with a task? Let our students help you!
      </p>
      <Link href={"/post-task"}>
        <button className="px-6 py-3 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
          Post Your Task
        </button>
      </Link>
    </div>
  );
};

export default TaskComponent;
