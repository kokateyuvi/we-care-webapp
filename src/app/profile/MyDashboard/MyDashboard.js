"use client"
import React, { useState, useEffect } from 'react';
import Profile from '../Profile';
import Image from 'next/image';
import bronze from './images/ads_bronze.png';

const MyDashboard = () => {
  const [earnings, setEarnings] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch('/api/earnings');
      const data = await response.json();
      setEarnings(data.earnings);
      setLoading(false);
    }

    fetchData();
  }, []);

  // Calculate the width of the progress bar based on earnings
  const progressBarWidth = (earnings / 400) * 100;

  return (
    <div className="p-4 md:p-8 flex flex-col md:flex-row">
      <div className="left-menu w-full md:w-1/4 md:block hidden">
        <Profile />
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 md:w-3/4">
        <div className="heading">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
            My Tasker Dashboard
          </h1>
        </div>

        <div className="mt-4 md:mb-8 text-lg text-gray-800 flex items-center">
          <div className="img">
            <Image src={bronze} alt="bronze" width={100} height={100} />
          </div>
          <div className="badge text-xl ml-4">
            <p className="font-bold">Bronze</p>
            <span className="text-xs">20% service fee</span>
          </div>
        </div>

        <div className="mt-4 text-lg text-gray-800">
          <p className="font-semibold">Your scores</p>
          <p className="text-base text-gray-600">
            Your Earnings (last 30 days)
          </p>
          <p className="text-base text-gray-600">
            Your earnings are €400 away from Silver and lowering service fees.
          </p>
        </div>

        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block text-blue-600">
                {earnings} €
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-blue-600">
                €400
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
            <div
              style={{ width: `${progressBarWidth}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
            ></div>
          </div>
        </div>

        <div className="mt-4 text-lg text-gray-800">
          <p className="font-semibold">NEXT TIER BENEFITS</p>
          <div className="mt-4 text-gray-900 flex items-center space-x-4">
            <div className="dollar icons text-3xl text-blue-600">&#36;</div>
            <div>
              <p className="text-lg font-semibold text-gray-900 mt-2">
                Reach Silver for lower service fees!
              </p>
              <p className="text-lg font-semibold text-gray-600 mt-2">
                Pay less with a service fee of 15%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDashboard;
