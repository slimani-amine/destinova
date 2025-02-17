import React, { useState } from "react";
import { statsData } from "../data/statsData";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Stats = () => {
  const [isInView, setIsInView] = useState(false);

  const parseNumber = (numberString) => {
    // Remove any non-numeric characters except decimal points
    const numericValue = numberString.replace(/[^0-9.]/g, "");
    return parseFloat(numericValue);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Numbers Speak
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of travelers around the world
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onViewportEnter={() => setIsInView(true)}
              className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
            >
              <h3 className="text-4xl font-bold text-[#ff5252] mb-2">
                {stat.number.includes("k") ? (
                  <>
                    {isInView && (
                      <CountUp
                        start={0}
                        end={parseNumber(stat.number)}
                        duration={2.5}
                        decimals={stat.number.includes(".") ? 1 : 0}
                      />
                    )}
                    k+
                  </>
                ) : stat.number.includes("/") ? (
                  stat.number
                ) : (
                  isInView && (
                    <CountUp
                      start={0}
                      end={parseNumber(stat.number)}
                      duration={2.5}
                      decimals={stat.number.includes(".") ? 1 : 0}
                    />
                  )
                )}
              </h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {stat.title}
              </h4>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
