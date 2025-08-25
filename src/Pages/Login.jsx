import React from 'react'
import { useState } from "react";
import { useAuth } from "../Context/AuthContext";

const Login = () => {

  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert("Login successful!");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <>
       <form onSubmit={handleSubmit} className="p-6 max-w-sm mx-auto">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Login
      </button>
    </form>
    </>
  )
}

export default Login
