import React from 'react'
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-16 bg-gray-50 mt-20" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* SVG Illustration */}

          <motion.div className="w-full flex justify-center md:justify-start"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <svg
              className="w-full max-w-xs md:max-w-md h-auto"
              viewBox="0 0 800 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="800" height="600" fill="#F9FAFB" />
              <path
                d="M400 150C450 150 480 200 480 250C480 300 450 350 400 350C350 350 320 300 320 250C320 200 350 150 400 150Z"
                fill="#3B82F6"
              />
              <rect
                x="300"
                y="370"
                width="200"
                height="20"
                rx="10"
                fill="#3B82F6"
              />
              <rect
                x="280"
                y="400"
                width="240"
                height="20"
                rx="10"
                fill="#93C5FD"
              />
              <rect
                x="260"
                y="430"
                width="280"
                height="20"
                rx="10"
                fill="#BFDBFE"
              />
              <text
                x="400"
                y="500"
                textAnchor="middle"
                fill="#374151"
                fontSize="24"
                fontWeight="600"
              >
                Smart. Simple. Secure.
              </text>
            </svg>
          </motion.div>

          {/* Text Content */}
          <motion.div className="text-center md:text-left"
             initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About <span className="text-blue-600">SmartSave</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              SmartSave is your trusted savings companion. We empower users to
              automate savings, build wealth effortlessly, and achieve their
              financial goals with transparency and security.
            </p>
            <p className="text-gray-600 text-base">
              Whether you're saving for a vacation, emergency fund, or long-term
              investment, SmartSave offers flexible tools that grow with your
              needs. Our platform is built with bank-level security and designed
              for all income levels.
            </p>
            <motion.button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
            
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(59,130,246,0.4)" }}
            whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
