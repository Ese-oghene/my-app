import React from 'react'
import { motion } from "framer-motion";

const HowWorks = () => {

    const steps = [
    {
      title: "Sign Up",
      description: "Create a free SmartSave account in seconds.",
      icon: (
        <svg
          className="w-16 h-16 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"
          />
        </svg>
      ),
      animation: "animate-pulse",
    },
    {
      title: "Set a Goal",
      description: "Tell us what you're saving for and how much.",
      icon: (
        <svg
          className="w-16 h-16 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c.458 0 .912.07 1.346.205a1 1 0 00.767-1.843A5.985 5.985 0 0012 6a6 6 0 100 12 6 6 0 001.346-.154 1 1 0 10-.653-1.898A4 4 0 1112 8z"
          />
        </svg>
      ),
      animation: "animate-bounce",
    },
    {
      title: "Save Automatically",
      description: "Let SmartSave grow your savings while you relax.",
      icon: (
        <svg
          className="w-16 h-16 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h2l1 9h12l1-9h2M16 10V6a4 4 0 00-8 0v4"
          />
        </svg>
      ),
      animation: "animate-pulse",
    },
  ];
  return (
     <section className="bg-white py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 className="text-4xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
        How It Works
        </motion.h2>
        <motion.p className="text-gray-600 text-lg mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
        >
          Get started in just three simple steps
        </motion.p>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div key={index} className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }} 
            >
              <div
                className={`bg-blue-100 p-6 rounded-full mb-6 ${step.animation}`}
              >
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWorks
