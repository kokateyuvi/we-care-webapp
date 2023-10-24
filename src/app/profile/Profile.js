"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
  const { data: session } = useSession();

  if (!session?.user) {
    return (
      <div className="container mt-8">
        <p className="text-center text-red-600 text-xl font-semibold">
          You are not logged in. Please log in to view this page.
        </p>
      </div>
    );
  }

  const { user } = session;

  const handleLogOut = () => {
    signOut();
  };

  return (
    <div className="container mx-auto p-8 block ">
      <div className="max-w-md mx-auto bg-gray-100 rounded-lg shadow-md py-8">
        <div className="text-center mb-4">
          <Image
            src={user.picture}
            alt={user.name}
            width={200}
            height={200}
            className="w-20 h-20 rounded-full mx-auto border-4 border-blue-500"
          />
          <p className="mt-2 text-xl font-semibold text-gray-800">{user.name}</p>
        </div>
        <div className="text-center my-4">
          <Link href="/profile/MyDashboard">
            <p className="my-2 text-base text-gray-800 hover:underline">My Tasker Dashboard</p>
          </Link>
          <Link href="/profile/list-services">
            <p className="my-2 text-base text-gray-800 hover:underline">List my services</p>
          </Link>
          <Link href="/profile/payments-history">
            <p className="my-2 text-base text-gray-800 hover:underline">Payments history</p>
          </Link>
          <Link href="/profile/payment-methods">
            <p className="my-2 text-base text-gray-800 hover:underline">Payment methods</p>
          </Link>
          <Link href="/profile/notifications">
            <p className="my-2 text-base text-gray-800 hover:underline">Notifications</p>
          </Link>
          <Link href="/profile/settings">
            <p className="my-2 text-base text-gray-800 hover:underline">Settings</p>
          </Link>
        </div>
    
      </div>
    </div>
  );
};

export default Profile;
