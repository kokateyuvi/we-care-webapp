import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="mb-4 text-5xl font-bold text-red-500">404</h1>
      <p className="mb-8 text-xl text-gray-700">
        Oops! The page youre looking for does not exist.
      </p>
      <p className="mb-8 text-lg text-gray-600">
        Dont worry, we can help you find your way back.
      </p>
      <Link href="/">
        <span className="mb-4 text-lg text-blue-500 hover:underline">
          Return to Home Page
        </span>
      </Link>
      <p className="text-sm text-gray-500">
        If you believe this is a mistake, please contact support.
      </p>
      <p className="mt-4 text-sm font-bold text-red-500">
        We are still in the development phase. Some features might not be fully
        functional yet.
      </p>
    </div>
  );
};

export default NotFound;
