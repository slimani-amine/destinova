import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider.css";
import DestinationCard from "../layouts/DestinationCard";
import { useNavigate } from "react-router-dom";
import Button from "../layouts/Button";
import { destinationsData } from "../data/destinationsData";

const Destination = () => {
  const navigate = useNavigate();

  // Sort destinations by score and take top 6
  const destinations = Object.values(destinationsData)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col justify-center md:mx-12 mx-5">
      <h1 className="font-medium text-center text-4xl lg:mt-0 mt-16 mb-8">
        Most Popular Destinations
      </h1>

      <div className="mt-12 mb-10">
        <Slider {...settings}>
          {destinations.map((destination, index) => (
            <div key={index} className="px-5 mb-12">
              <DestinationCard {...destination} rating={destination.rating} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex justify-center mt-8">
        <Button
          title="Show All Destinations"
          onClick={() => navigate("/destinations")}
        />
      </div>
    </div>
  );
};

export default Destination;
