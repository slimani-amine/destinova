import React from "react";
import Button from "../layouts/Button";
import img from "../assets/img/hero.jpg";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
  const backgroundColor = `bg-brightColor`;

  return (
    <>
      <div className="min-h-screen lg:min-h-[90vh] flex flex-col justify-center lg:flex-row items-center md:mx-32 mx-5 ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col text-center lg:text-start gap-5"
        >
          <h1 className="font-semibold text-5xl leading-tight">
            Discover the Best Destinations
          </h1>
          <p>
            With Destinova you can experience new travel and the best tourist
            destinations that we have to offer
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="lg:pl-24"
          >
            <Link to="destination" spy={true} smooth={true} duration={500}>
              <Button title="Destinations" backgroundColor={backgroundColor} />
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-14 lg:mt-0 w-full lg:w-4/5"
        >
          <img src={img} alt="img" />
        </motion.div>
      </div>
    </>
  );
};

export default Home;
