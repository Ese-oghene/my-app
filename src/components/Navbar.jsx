import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center">
        {/* Left: Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          SmartSave
        </Link>

        {/* Middle: Navigation Links (Desktop Only) */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/goals">Goals</Link>
          <Link to="/reports">Reports</Link>
        </div>

        {/* Right: Buttons (Desktop Only) */}
       {/* Single Button */}
          <Link
            to="/auth"
            className="hidden md:block  px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="w-7 h-7" />
        </button>
      </nav>

      {/* Overlay */}
      {/* {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )} */}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-bold text-blue-600">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <div className="flex flex-col px-6 py-6 space-y-4 text-gray-700 font-medium">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link to="/goals" onClick={() => setIsOpen(false)}>Goals</Link>
          <Link to="/reports" onClick={() => setIsOpen(false)}>Reports</Link>

          {/* Single Button */}
          <Link
            to="/auth"
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
          {/* Buttons
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg text-blue-600 border border-blue-600 hover:bg-blue-50 font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md"
            onClick={() => setIsOpen(false)}
          >
            Signup
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
