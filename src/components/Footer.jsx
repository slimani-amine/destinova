import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-darkBackground text-white"
    >
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5 ">
        <div className=" w-full md:w-1/4 flex flex-col max-md:items-center">
          <h1 className=" font-semibold text-xl pb-4">TripPixie</h1>
          <p className=" text-sm max-md:text-center">
            With TripPixie you can experience new travel and the best tourist
            destinations that we have to offer
          </p>
        </div>
        <div className="flex flex-col max-md:items-center">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
            Destination
          </h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Paris, France
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Dubai, UAE
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Venice, Italy
            </a>
          </nav>
        </div>
        <div className="flex flex-col max-md:items-center">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">About</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Contact Us
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Testimonial
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Rating
            </a>
          </nav>
        </div>
        <div className="flex flex-col max-md:items-center">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Follow Us</h1>
          <nav className=" flex md:flex-col md:items-center gap-2">
            <BsFacebook
              size={25}
              className="hover:text-brightColor transition-all cursor-pointer"
            />
            <RiTwitterXFill
              size={25}
              className=" hover:text-brightColor transition-all cursor-pointer"
            />
            <BsInstagram
              size={25}
              className=" hover:text-brightColor transition-all cursor-pointer"
            />
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright {new Date().getFullYear()} | All rights reserved
          </p>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
