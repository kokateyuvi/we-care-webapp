// Import necessary libraries and components
"use client";
import React from "react";
import { useSession } from "next-auth/react";

const Profile = () => {
  // Get user session data
  const { data: session } = useSession();

  // If user is not authenticated, redirect to login page
  if (!session?.user) {
    // You can also use Next.js router for client-side navigation
    // useRouter().push("/login");
    return (
      <p className="mt-8 text-center">
        You are not logged in. Please log in to view this page.
      </p>
    );
  }

  // Extract user information from session data
  const { user } = session;

  // Render profile information
  return (
    <div className="container p-4 mx-auto mt-8">
      <h1 className="mb-4 text-3xl font-semibold text-center">
        Profile Information
      </h1>
      <div className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-md">
        <p className="mb-4">
          <strong className="text-blue-600">Name:</strong> {user.name}
        </p>
        <p className="mb-4">
          <strong className="text-blue-600">Email:</strong> {user.email}
        </p>
        {/* Add more user information here as needed */}
      </div>
    </div>
  );
};

export default Profile;
