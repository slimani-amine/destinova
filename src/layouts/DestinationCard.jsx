import React from "react";
import Button from "../layouts/Button";
import toast from "react-hot-toast";
import { useModal } from "../context/ModalContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";

const DestinationCard = (props) => {
  const { openModal, closeModal } = useModal();
  const { price, discount, rating = 0 } = props;
  const discountedPrice = price - (price * discount) / 100;
  const navigate = useNavigate();

  const stars = [...Array(5)].map((_, index) => (
    <FontAwesomeIcon
      key={index}
      icon={index < Math.round(rating || 0) ? faStarSolid : faStarRegular}
      className="text-yellow-400"
    />
  ));

  const handleOpenModal = () => {
    openModal({
      title: props.title,
      onSubmit: () => {
        closeModal();
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

  const handleViewDestination = () => {
    navigate(
      `/destination/${props.title
        .toLowerCase()
        .replace(/, /g, "-")
        .replace(/\s+/g, "-")}`
    );
  };

  // Function to truncate text
  const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="cursor-pointer w-full h-[450px] flex flex-col"
    >
      <div className="h-[250px] overflow-hidden relative group">
        <img
          className="w-full h-full object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110"
          src={props.img}
          alt={props.title}
          onClick={handleViewDestination}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          <FaEye
            className="text-white text-4xl transform scale-0 group-hover:scale-100 transition-transform duration-300"
            onClick={handleViewDestination}
          />
        </div>
        {discount > 0 && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1.5 rounded-lg font-bold shadow-lg transform -rotate-12">
            SAVE {discount}%
          </div>
        )}
      </div>

      <div className="bg-[#F2F2F2] p-5 space-y-3 rounded-b-lg flex-1 flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-medium text-center">{props.title}</h2>
          <p className="text-sm mt-2 text-center">{truncateText(props.para)}</p>
          <div className="flex justify-center items-baseline gap-2 mt-4">
            {discount > 0 ? (
              <>
                <span className="text-2xl font-bold text-green-600">
                  ${discountedPrice.toFixed(2)}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ${price.toFixed(2)}
                </span>
                <span className="text-xs text-red-500 font-semibold">
                  ({discount}% OFF)
                </span>
              </>
            ) : (
              <span className="text-2xl font-bold text-green-600">
                ${price.toFixed(2)}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 mt-2">
            {stars}
            {rating !== undefined && (
              <span className="ml-2 text-sm text-gray-600">
                ({rating.toFixed(1)})
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-row justify-center gap-4">
          <Button
            title="View Details"
            onClick={handleViewDestination}
            backgroundColor="bg-darkBackground"
          />
          <Button title="Book Tickets" onClick={handleOpenModal} />
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
