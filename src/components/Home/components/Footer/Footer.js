import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 text-white bg-gray-800">
      <div className="container flex flex-col items-center justify-between mx-auto lg:flex-row">
        <div className="mb-8 text-center lg:mb-0 lg:text-left lg:w-1/2">
          <h2 className="mb-4 text-2xl font-bold">
            Needy College Students Ready to Help Older People!
          </h2>
          <p className="text-lg">
            Empowering students to assist the elderly with their tasks and
            errands.
          </p>
        </div>
        <div className="mb-8 text-center lg:mb-0 lg:text-left lg:w-1/2">
          <h2 className="mb-4 text-2xl font-bold">
            Need assistance with a task?
          </h2>
          <p className="text-lg">
            Describe your task clearly to attract the best Taskers. Our students
            are here to help you!
          </p>
          <button className="px-8 py-3 mt-6 text-lg font-semibold text-white transition duration-300 bg-blue-600 rounded-full hover:bg-blue-700">
            Post Your Task
          </button>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} We-Care. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
