import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../layouts/Button";
import toast from "react-hot-toast";

const BookingForm = () => {
  const { destination } = useParams();
  console.log("🚀 ~ BookingForm ~ destination:", destination)
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Ticket reserved successfully! Please check in at the counter.", {
      duration: 4000,
      position: "top-center",
      style: {
        background: "#ff6b6b",
        color: "#fff",
      },
    });
    navigate('/');
    
  };

  return (
    <div className="min-h-screen py-16 px-4 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">
          Book Tickets for {destination}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              required
              pattern="[0-9]{8}"
              placeholder="Enter 8-digit phone number"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Number of Tickets
            </label>
            <input
              type="number"
              min="1"
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <input
              type="date"
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
            >
              Cancel
            </button>
            <Button title="Book Now" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm; 