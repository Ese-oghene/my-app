
import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const { login, signup } = useAuth();
  const [isLoginMode, setIsLoginMode] = useState(true);

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_no, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLoginMode) {
        await login(email, password);
        alert("Login successful!");
        navigate("/dashboard"); // ✅ redirect after login
      } else {
        if (password !== confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
        await signup(name, email, password, phone_no);
        alert("Signup successful!");
        navigate("/dashboard"); // ✅ redirect after login
      }
    } catch (err) {
      console.error(err.response?.data || err.message); 
    alert(err.response?.data?.message || "Something went wrong, please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[430px] bg-white p-8 rounded-2xl shadow-lg">
        {/* Header title */}
        <div className="flex justify-center mb-4">
          <h2 className="text-3xl font-semibold text-center">
            {isLoginMode ? "Login" : "Sign Up"}
          </h2>
        </div>

        {/* Tab Control */}
        <div className="relative flex h-12 mb-6 border-gray-300 rounded-full overflow-hidden">
          <button
            onClick={() => setIsLoginMode(true)}
            className={`w-1/2 text-lg font-medium transition-all z-10 ${
              isLoginMode ? "text-white" : "text-black"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLoginMode(false)}
            className={`w-1/2 text-lg font-medium transition-all z-10 ${
              !isLoginMode ? "text-white" : "text-black"
            }`}
          >
            Sign Up
          </button>
          <div
            className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 transition-all duration-300 ${
              isLoginMode ? "left-0" : "left-1/2"
            }`}
          ></div>
        </div>

        {/* Form section */}
        <form onSubmit={handleSubmit} className="space-y-4">
            
          {!isLoginMode && (
            <>
                <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
                />

                <input
                type="tel"
                placeholder="Phone Number"
                value={phone_no}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
                />
            </>
            )}


          {/* shared input field */}
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
          />

          

          {/* signup field */}
          {!isLoginMode && (
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
            />
          )}

          {/* Forget Password for login */}
          {isLoginMode && (
            <div className="text-right">
              <p className="text-cyan-600 hover:underline">Forgot Password?</p>
            </div>
          )}

          {/* Shared button */}
          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition"
          >
            {isLoginMode ? "Login" : "Sign Up"}
          </button>

          {/* Switch Link */}
          <p className="text-center text-gray-600">
            {isLoginMode ? "Don't have an account? " : "Already have an account? "}
            <span
              onClick={() => setIsLoginMode(!isLoginMode)}
              className="text-cyan-600 hover:underline cursor-pointer"
            >
              {isLoginMode ? "Signup now" : "Login"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
