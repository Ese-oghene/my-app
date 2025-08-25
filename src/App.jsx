import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import AuthForm from "./Pages/AuthForm";
import Dashboard from "./Pages/Dashboard/DashboardLayout";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/auth" element={<AuthForm />} />

           {/* Later you can add protected routes like Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        {/* Footer stays across pages */}
      <Footer />
      </Router>
    </>
  )
}

export default App
