import React from 'react';
import Profile from '../Profile';
import Image from 'next/image';
import creditCard from './images/credit-card.png';
import bankAccount from './images/bank-account.png';

const PaymentMethods = () => {
  return (
    <div className="p-4 md:p-8 flex flex-col md:flex-row">
      {/* Conditionally render the Profile component based on screen size */}
      <div className="left-menu w-full md:w-1/4 md:block hidden">
        <Profile />
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 md:w-3/4">
        <div className="heading">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Payment Methods
          </h1>
        </div>

        <div className="mt-6 text-lg text-gray-800 flex flex-col items-center md:flex-row md:justify-between">
          <div className="payment-method flex flex-col items-center">
            <Image src={creditCard} alt="credit card" width={100} height={100} />
            <h2 className="mt-4 font-bold text-xl text-gray-800">Make Payments</h2>
            <p className="text-base text-gray-600">
              Once a task is completed, you can request payment from the Job Poster, who will then release it to your nominated account.
            </p>
          </div>

          <div className="payment-method flex flex-col items-center mt-6 md:mt-0">
            <Image src={bankAccount} alt="bank account" width={100} height={100} />
            <h2 className="mt-4 font-bold text-xl text-gray-800">Receive Payments</h2>
            <p className="text-base text-gray-600">
              To receive payments, you need to provide your payment and billing information.
            </p>
          </div>
        </div>

        <div className="mt-6 text-lg text-gray-800">
          <p className="font-semibold text-xl">Billing Address</p>
          <p className="text-base text-gray-600">
            Add your billing address for secure transactions.
          </p>
          <div className="mt-4">
            <div className="text-gray-800 font-semibold">Address</div>
            <input
              type="text"
              className="input-field"
              placeholder="1 O’Connell Street"
            />
          </div>
          <div className="mt-4">
            <div className="text-gray-800 font-semibold">Cant find your address?</div>
            <a href="#" className="text-blue-500 hover:underline">Enter manually</a>
          </div>
        </div>

        <div className="mt-6 text-lg text-gray-800">
          <p className="font-semibold text-xl">Bank Account Details</p>
          <p className="text-base text-gray-600">
            Please provide your bank details to receive payments. Rest assured, we wont deduct any funds from your account.
          </p>
          <div className="mt-4">
            <div className="text-gray-800 font-semibold">Account Holder Name</div>
            <input
              type="text"
              className="input-field"
              placeholder="Your Full Name"
            />
          </div>
          <div className="mt-4">
            <div className="text-gray-800 font-semibold">Account Number</div>
            <input
              type="text"
              className="input-field"
              placeholder="Your Account Number"
            />
          </div>
          <div className="mt-6">
            <button className="btn btn-primary">Add Bank Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
