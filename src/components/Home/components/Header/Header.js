"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    // Close the menu when a menu item is clicked
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="container flex items-center justify-between px-6 py-2 mx-auto md:px-10 lg:px-16">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <p className="text-xl font-semibold text-blue-600 transition duration-300 ease-in-out hover:text-blue-500">
              WeCare
            </p>
          </Link>
        </div>
        <div className="hidden space-x-3 md:flex">
          <Link href="/post-task">
            <p
              onClick={handleMenuItemClick}
              className="text-gray-600 transition duration-300 ease-in-out hover:text-blue-500 cursor-pointer"
            >
              Post a Task
            </p>
          </Link>
          <Link href="/categories">
            <p
              onClick={handleMenuItemClick}
              className="text-gray-600 transition duration-300 ease-in-out hover:text-blue-500 cursor-pointer"
            >
              Categories
            </p>
          </Link>
          <Link href="/tasks">
            <p
              onClick={handleMenuItemClick}
              className="text-gray-600 transition duration-300 ease-in-out hover:text-blue-500 cursor-pointer"
            >
              Browse Tasks
            </p>
          </Link>
          <Link href="/how-it-works">
            <p
              onClick={handleMenuItemClick}
              className="text-gray-600 transition duration-300 ease-in-out hover:text-blue-500 cursor-pointer"
            >
              How it Works
            </p>
          </Link>
        </div>
        <div className="hidden space-x-2 md:flex">
          <Link href="/login">
            <p
              onClick={handleMenuItemClick}
              className="text-gray-600 transition duration-300 ease-in-out hover:text-blue-500 cursor-pointer"
            >
              Log In
            </p>
          </Link>
          <Link href="/signup">
            <p
              onClick={handleMenuItemClick}
              className="text-gray-600 transition duration-300 ease-in-out hover:text-blue-500 cursor-pointer"
            >
              Sign Up
            </p>
          </Link>
        </div>
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 transition duration-300 ease-in-out hover:text-blue-500"
          >
            {menuOpen ? (
              <FontAwesomeIcon icon={faTimes} className="text-2xl" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg md:p-10">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute text-gray-600 transition duration-300 ease-in-out top-4 right-4 hover:text-gray-800"
            >
              <FontAwesomeIcon icon={faTimes} className="text-2xl" />
            </button>
            <div className="flex flex-col items-center mt-8 space-y-6">
              <Link href="/post-task">
                <p
                  onClick={handleMenuItemClick}
                  className="block mb-2 text-black cursor-pointer hover:text-gray-400"
                >
                  Post a Task
                </p>
              </Link>
              <Link href="/categories">
                <p
                  onClick={handleMenuItemClick}
                  className="block mb-2 text-black cursor-pointer hover:text-gray-400"
                >
                  Categories
                </p>
              </Link>
              <Link href="/tasks">
                <p
                  onClick={handleMenuItemClick}
                  className="block mb-2 text-black cursor-pointer hover:text-gray-400"
                >
                  Browse Tasks
                </p>
              </Link>
              <Link href="/how-it-works">
                <p
                  onClick={handleMenuItemClick}
                  className="block mb-2 text-black cursor-pointer hover:text-gray-400"
                >
                  How it Works
                </p>
              </Link>
              <Link href="/login">
                <button
                  onClick={handleMenuItemClick}
                  className="block text-black cursor-pointer hover:text-gray-400"
                >
                  Log In
                </button>
              </Link>
              <Link href="/signup">
                <button
                  onClick={handleMenuItemClick}
                  className="block text-black cursor-pointer hover:text-gray-400"
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
