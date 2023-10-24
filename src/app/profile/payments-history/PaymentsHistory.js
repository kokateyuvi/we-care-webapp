import React from 'react';
import Profile from '../Profile';

const PaymentsHistory = () => {
  return (
    <div className="p-4 md:p-8 flex flex-col md:flex-row">
      <div className="left-menu w-full md:w-1/4 md:block hidden">
        <Profile />
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 md:w-3/4">
        <div className="heading">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Payments History
          </h1>
        </div>

        <div className="mt-6 text-lg text-gray-800">
          <p className="font-semibold text-xl">Earned/Outgoing</p>
          <p className="text-base text-gray-600">Showing all transactions.</p>
        </div>

        <div className="mt-6">
          <div className="flex justify-between items-center border-b-2 border-gray-300">
            <div className="text-xl font-semibold">All</div>
            <div className="text-xl font-semibold text-blue-500">Net earned</div>
          </div>
          <div className="mt-4 text-3xl font-semibold text-blue-500">Rs.0.00</div>
          <div className="mt-2 text-base text-gray-600">0 transactions for 1st Jan 2012 - 23rd Oct 2023</div>
          <div className="mt-6 text-lg text-gray-800">
            <p className="text-base text-gray-600">
              You havent earned from any tasks yet. Still looking for the right task?
            </p>
            <a href="#" className="text-blue-500 hover:underline">Browse tasks</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsHistory;
