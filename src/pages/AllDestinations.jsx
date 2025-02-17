import React from "react";
import DestinationCard from "../layouts/DestinationCard";
import { destinationsData } from "../data/destinationsData";

const AllDestinations = () => {
  const destinations = Object.values(destinationsData);

  return (
    <div className="min-h-screen py-16 px-8 md:px-12">
      <h1 className="text-4xl font-semibold text-center mb-12">
        All Destinations
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <DestinationCard key={index} {...destination} />
        ))}
      </div>
    </div>
  );
};

export default AllDestinations;
