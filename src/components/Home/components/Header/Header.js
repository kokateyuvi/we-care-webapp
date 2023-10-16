"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto md:py-2 md:px-8 lg:px-8">
        <Link href="/">
          <p className="text-3xl font-semibold text-blue-600 cursor-pointer hover:text-blue-500">
            WeCare
          </p>
        </Link>

        <div className="hidden space-x-3 md:flex">
          <NavItem href="/post-task" onClick={handleMenuItemClick}>
            Post a task
          </NavItem>
          <NavItem href="/categories" onClick={handleMenuItemClick}>
            Categories
          </NavItem>
          <NavItem href="/tasks" onClick={handleMenuItemClick}>
            Browse tasks
          </NavItem>
          {session ? (
            <NavItem href="/my-tasks" onClick={handleMenuItemClick}>
              My tasks
            </NavItem>
          ) : (
            <NavItem href="/how-it-works" onClick={handleMenuItemClick}>
              How it Works
            </NavItem>
          )}
        </div>

        <div className="hidden space-x-2 md:flex">
          {session ? (
            <>
              <NavItem href="/profile" onClick={handleMenuItemClick}>
                Profile
              </NavItem>
              <NavItem href="/api/auth/signout" onClick={signOut}>
                Logout
              </NavItem>
            </>
          ) : (
            <>
              <NavItem href="/login" onClick={handleMenuItemClick}>
                Log In
              </NavItem>
              <NavItem href="/signup" onClick={handleMenuItemClick}>
                Sign Up
              </NavItem>
            </>
          )}
        </div>

        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 transition duration-300 ease-in-out hover:text-blue-500"
          >
            {menuOpen ? (
              ""
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
              className="absolute text-gray-600 transition duration-300 ease-in-out top-6 right-4 hover:text-gray-800"
            >
              <FontAwesomeIcon icon={faTimes} className="text-2xl" />
            </button>
            <div className="flex flex-col items-center mt-2 space-y-6">
              <NavItem href="/" onClick={handleMenuItemClick}>
                Home
              </NavItem>
              <NavItem href="/post-task" onClick={handleMenuItemClick}>
                <span className="px-4 py-2 text-sm text-white bg-blue-600 rounded-full hover:bg-blue-500">
                  {" "}
                  Post a task
                </span>
              </NavItem>

              <NavItem href="/tasks" onClick={handleMenuItemClick}>
                Browse tasks
              </NavItem>
              {session ? (
                <NavItem href="/my-tasks" onClick={handleMenuItemClick}>
                  My tasks
                </NavItem>
              ) : (
                <NavItem href="/how-it-works" onClick={handleMenuItemClick}>
                  How it Works
                </NavItem>
              )}
              {session ? (
                <>
                  <NavItem href="/profile" onClick={handleMenuItemClick}>
                    Profile
                  </NavItem>
                  <NavItem href="/api/auth/signout" onClick={signOut}>
                    Logout
                  </NavItem>
                </>
              ) : (
                <>
                  <NavItem href="/login" onClick={handleMenuItemClick}>
                    Log In
                  </NavItem>
                  <NavItem href="/signup" onClick={handleMenuItemClick}>
                    Sign Up
                  </NavItem>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const NavItem = ({ href, onClick, children }) => (
  <Link href={href}>
    <p
      onClick={onClick}
      className="text-sm text-gray-600 transition duration-300 ease-in-out cursor-pointer hover:text-blue-500"
    >
      {children}
    </p>
  </Link>
);

export default Header;
