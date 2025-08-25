import React from 'react'
import Navbar from "./Navbar"; // ✅ Import the Navbar
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <>
    <section className="relative w-full h-screen bg-gradient-to-r from-blue-50 to-white">
      {/* Navbar (fixed at top) */}
      <Navbar />

      {/* Hero Content */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 h-full pt-20">
        {/* Text */}
        <motion.div className="md:w-1/2 text-center md:text-left"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-4">
            Save Smarter, <br /> Grow Faster 🚀
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Smart Save helps you track expenses, set financial goals, and
            achieve financial freedom with ease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md">
              Get Started
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold shadow-md">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div className="md:w-1/2 mt-10 md:mt-0"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="/images/think.png"
            alt="Smart Save App"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
    </>
  )
}

export default HeroSection

