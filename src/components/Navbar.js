"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="py-2 text-green-600 bg-white ">
      <div className="container flex items-center justify-between px-2 mx-auto">
        <div className="text-xl font-bold">
          <span className="cursor-pointer">SeniorSupporters</span>
        </div>
        <div className="hidden space-x-2 md:flex">
          <Link
            to="post-task"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="px-3 py-1 text-sm text-white bg-green-600 rounded-full cursor-pointer hover:text-gray-400"
          >
            Post a Task
          </Link>
          <Link
            to="categories"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-sm text-black cursor-pointer hover:text-gray-400"
          >
            Categories
          </Link>
          <Link
            to="browse-tasks"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-sm text-black cursor-pointer hover:text-gray-400"
          >
            Browse Tasks
          </Link>
          <Link
            to="how-it-works"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-sm text-black cursor-pointer hover:text-gray-400"
          >
            How it Works
          </Link>
        </div>
        <div className="hidden space-x-2 md:flex">
          <Link
            to="signup"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-sm text-black cursor-pointer hover:text-gray-400"
          >
            Sign Up
          </Link>
          <Link
            to="login"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-sm text-black cursor-pointer hover:text-gray-400"
          >
            Log In
          </Link>
          <Link
            to="become-tasker"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="px-4 py-1 text-sm text-green-600 bg-green-100 rounded-full cursor-pointer hover:text-gray-400"
          >
            Become a Tasker
          </Link>
        </div>
        <div className="md:hidden">
          <button
            className="mt-4 text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="absolute p-4 bg-green-600 rounded shadow-lg md:hidden top-10 right-4">
            <Link
              to="post-task"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block mb-2 text-black cursor-pointer hover:text-gray-400"
            >
              Post a Task
            </Link>
            <Link
              to="categories"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block mb-2 text-black cursor-pointer hover:text-gray-400"
            >
              Categories
            </Link>
            <Link
              to="browse-tasks"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block mb-2 text-black cursor-pointer hover:text-gray-400"
            >
              Browse Tasks
            </Link>
            <Link
              to="how-it-works"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block mb-2 text-black cursor-pointer hover:text-gray-400"
            >
              How it Works
            </Link>
            <Link
              to="signup"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block mb-2 text-black cursor-pointer hover:text-gray-400"
            >
              Sign Up
            </Link>
            <Link
              to="login"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block text-black cursor-pointer hover:text-gray-400"
            >
              Log In
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
