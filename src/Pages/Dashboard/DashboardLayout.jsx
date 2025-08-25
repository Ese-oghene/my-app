// src/Pages/Dashboard.jsx
// import { useAuth } from "../Context/AuthContext";
import { useAuth } from "../../Context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();

  if (!user) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[400px]">
        <h1 className="text-2xl font-bold mb-4">Welcome, {user.name} 👋</h1>
        <p className="mb-2"><strong>Email:</strong> {user.email}</p>
        <p className="mb-2"><strong>Phone:</strong> {user.phone_no}</p>
        <p className="mb-6"><strong>Role:</strong> {user.role}</p>

        <button 
          onClick={logout} 
          className="w-full p-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
