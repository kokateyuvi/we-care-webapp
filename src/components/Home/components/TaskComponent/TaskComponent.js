import React from "react";
import Image from "next/image";
import img from "./elements/img1.jpg";

const TaskComponent = () => {
  return (
    <div className="py-16 text-center ">
      <h1 className="mb-6 text-4xl font-bold">
        Needy College Students Ready to Help Older People!
      </h1>
      <p className="mb-8 text-lg">
        Empowering students to assist the elderly with their tasks and errands.
      </p>
      <div
        className="relative mb-8 rounded-lg shadow-lg"
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <div style={{ paddingTop: "75%" /* 4:3 Aspect Ratio */ }}>
          <Image
            src={img}
            alt="College student helping an elderly person"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <p className="mb-8 text-lg">Have a task? Let our students assist you!</p>
      <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
        Post Your Task
      </button>
    </div>
  );
};

export default TaskComponent;
