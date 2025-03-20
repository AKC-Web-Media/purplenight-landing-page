import React from "react";
import { motion } from "framer-motion";
import Subscription from "./Subscription";

function HeroSection({ ref }) {
  return (
    <motion.section
      ref={ref}
      id="hero"
      className="bg-stone-100 py-16 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
            }}
            className="md:col-span-1"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Purplenight evolves as your need arises
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              We try to be generous towards our content generation but we got
              bills to pay as well. The Free tier is a nice one as well.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open("https://purplenight.hyperingenious.tech", "_blank")
              }
              className="bg-black text-white rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2"
            >
              Try out now <span className="text-xl">&rarr;</span>
            </motion.button>
          </motion.div>

          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2, ease: "easeOut" } },
            }}
            className="md:col-span-2 flex flex-col md:flex-row gap-4"
          >
            <Subscription />
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}

export default HeroSection;
