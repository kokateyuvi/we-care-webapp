"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SignUpModal from "./components/SignUpModal/SignUpModal";
import LogInModal from "./components/LogInModal/LogInModal";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState("");

  const openModal = (modalType) => {
    setShowModal(modalType);
    setMenuOpen(false);
  };

  const closeModal = () => {
    setShowModal("");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="container flex items-center justify-between px-6 py-2 mx-auto md:px-10 lg:px-16">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <p className="text-xl font-semibold text-blue-600 transition duration-300 ease-in-out hover:text-blue-500">
              SeniorSupporters
            </p>
          </Link>
        </div>
        <div className="hidden space-x-3 md:flex">
          <Link href="/post-a-task">
            <p className="text-gray-600 transition duration-300 ease-in-out hover:text-blue-500">
              Post a Task
            </p>
          </Link>
          <Link href="/categories">
            <p className="text-gray-600 transition duration-300 ease-in-out hover:text-blue-500">
              Categories
            </p>
          </Link>
          <Link href="/browse-tasks">
            <p className="text-gray-600 transition duration-300 ease-in-out hover:text-blue-500">
              Browse Tasks
            </p>
          </Link>
          <Link href="/how-it-works">
            <p className="text-gray-600 transition duration-300 ease-in-out hover:text-blue-500">
              How it Works
            </p>
          </Link>
        </div>
        <div className="hidden space-x-2 md:flex">
          <button
            onClick={() => openModal("LOG_IN")}
            className="text-gray-600 transition duration-300 ease-in-out hover:text-blue-500"
          >
            Log In
          </button>
          <button
            onClick={() => openModal("SIGN_UP")}
            className="px-4 py-2 text-white transition duration-300 ease-in-out bg-blue-500 rounded-full hover:bg-blue-600"
          >
            Sign Up
          </button>
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
              <Link href="/post-a-task">
                <p className="block mb-2 text-black cursor-pointer hover:text-gray-400">
                  Post a Task
                </p>
              </Link>
              <Link href="/categories">
                <p className="block mb-2 text-black cursor-pointer hover:text-gray-400">
                  Categories
                </p>
              </Link>
              <Link href="/browse-tasks">
                <p className="block mb-2 text-black cursor-pointer hover:text-gray-400">
                  Browse Tasks
                </p>
              </Link>
              <Link href="/how-it-works">
                <p className="block mb-2 text-black cursor-pointer hover:text-gray-400">
                  How it Works
                </p>
              </Link>
              <button
                onClick={() => openModal("SIGN_UP")}
                className="block mb-2 text-black cursor-pointer hover:text-gray-400"
              >
                Sign Up
              </button>
              <button
                onClick={() => openModal("LOG_IN")}
                className="block text-black cursor-pointer hover:text-gray-400"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal === "SIGN_UP" && <SignUpModal onClose={closeModal} />}
      {showModal === "LOG_IN" && <LogInModal onClose={closeModal} />}
    </header>
  );
};

export default Header;
