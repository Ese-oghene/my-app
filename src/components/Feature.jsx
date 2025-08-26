import React from 'react'
import { motion } from "framer-motion";

const features = [
  {
    title: "Automated Savings",
    description:
      "Set it and forget it—SmartSave automatically moves money into your savings goals.",
    icon: (
      <svg
        className="w-12 h-12 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 12c0 7-7 9-7 9s-7-2-7-9a7 7 0 1114 0z"
        />
      </svg>
    ),
  },
  {
    title: "Goal Tracking",
    description:
      "Track progress toward personal savings goals with visual insights.",
    icon: (
      <svg
        className="w-12 h-12 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 19V6m4 13V9m4 10V4M5 19v-4"
        />
      </svg>
    ),
  },
  {
    title: "Secure & Transparent",
    description:
      "Bank-level encryption ensures your data and funds stay protected.",
    icon: (
      <svg
        className="w-12 h-12 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 11c1.657 0 3-1.343 3-3V4a3 3 0 00-6 0v4c0 1.657 1.343 3 3 3z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 20h14a2 2 0 002-2v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];


const Feature = () => {
  return (
   <section className="bg-gray-50 py-20 px-6 md:px-20" id="features">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Why Choose <span className="text-blue-600">SmartSave</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Simple, secure, and smart savings features designed for your everyday
          goals.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Feature
