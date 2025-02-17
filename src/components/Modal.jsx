import React, { useEffect } from "react";
import Button from "../layouts/Button";

const Modal = ({ isOpen, onClose, title, onSubmit }) => {
  console.log("🚀 ~ Modal ~ onSubmit:", onSubmit)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div
            className="relative bg-white rounded-lg p-8 w-full max-w-md shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Book Tickets for {title}</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent outline-none"
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
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent outline-none"
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
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Date</label>
                <input
                  type="date"
                  required
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent outline-none"
                />
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded transition duration-200"
                >
                  Cancel
                </button>
                <Button title="Book Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal; 