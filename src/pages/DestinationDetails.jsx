import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../layouts/Button";
import { useModal } from "../context/ModalContext";
import toast from "react-hot-toast";
import { destinationsData } from "../data/destinationsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { Link as ScrollLink, scroller } from "react-scroll";
import { motion } from "framer-motion";

const DestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { openModal } = useModal();
  const destination = destinationsData[id] || null;

  if (!destination) {
    return (
      <div className="min-h-screen py-20 px-8 md:px-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Destination Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The destination you're looking for doesn't exist.
          </p>
          <Button title="Go Back" onClick={() => navigate(-1)} />
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    openModal({
      title: destination.title,
      onSubmit: (e) => {
        e.preventDefault();
        toast.success(
          "Ticket reserved successfully! Please check in at the counter.",
          {
            duration: 4000,
            position: "top-center",
            style: {
              background: "#ff6b6b",
              color: "#fff",
            },
          }
        );
      },
    });
  };

  const discountedPrice =
    destination.price - (destination.price * destination.discount) / 100;

  const stars = [...Array(5)].map((_, index) => (
    <FontAwesomeIcon
      key={index}
      icon={
        index < Math.round(destination.rating || 0)
          ? faStarSolid
          : faStarRegular
      }
      className="text-yellow-400"
    />
  ));

  const handleBack = () => {
    navigate(-1);
    setTimeout(() => {
      scroller.scrollTo("destination", {
        duration: 800,
        smooth: true,
        offset: -100,
      });
    }, 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20 px-8 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          onClick={handleBack}
          className="mb-8 text-gray-600 hover:text-gray-800 flex items-center gap-2 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <div className="relative">
            <img
              src={destination.mainImage}
              alt={destination.title}
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
            {destination.discount > 0 && (
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg transform -rotate-12">
                SAVE {destination.discount}%
              </div>
            )}
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-semibold">{destination.title}</h1>
            <div className="flex items-center gap-1">
              {stars}
              {destination.rating !== undefined && (
                <span className="ml-2 text-sm text-gray-600">
                  ({destination.rating.toFixed(1)})
                </span>
              )}
            </div>
            <p className="text-gray-600 leading-relaxed">
              {destination.description}
            </p>
            <div className="flex items-baseline gap-2">
              {destination.discount > 0 ? (
                <>
                  <span className="text-3xl font-bold text-green-600">
                    ${discountedPrice.toFixed(2)}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    ${destination.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-red-500 font-semibold">
                    ({destination.discount}% OFF)
                  </span>
                </>
              ) : (
                <span className="text-3xl font-bold text-green-600">
                  ${destination.price.toFixed(2)}
                </span>
              )}
            </div>
            <div className="pt-4">
              <Button title="Book Now" onClick={handleBooking} />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-medium mb-4">Highlights</h2>
              <ul className="space-y-2">
                {destination.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-medium mb-4">Best Time to Visit</h2>
              <p className="text-gray-600">{destination.bestTimeToVisit}</p>
            </div>

            <div>
              <h2 className="text-2xl font-medium mb-4">
                Recommended Duration
              </h2>
              <p className="text-gray-600">{destination.duration}</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium mb-4">Package Includes</h2>
            <ul className="space-y-2">
              {destination.includes.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <svg
                    className="w-5 h-5 text-brightColor"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationDetails;
