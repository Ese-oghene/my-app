import { createContext, useState, useContext, useEffect } from "react";
import api from "../utils/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUser(); // try to load user if token exists
    }else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    const res = await api.post("/login", { email, password });
    const { token, user } = res.data.data;

    localStorage.setItem("token", token);
    setUser(user);
  };

  const signup = async (name, email, password, phone) => {
    const res = await api.post("/register", {
      name,
      email,
      password,
      password_confirmation: password,
      phone_no: phone,
    });

    const { token, user } = res.data.data;

    localStorage.setItem("token", token);
    setUser(user);
  };

  const fetchUser = async () => {
    try {
      const res = await api.get("/user"); // will now include Bearer token
    setUser(res.data.data.user); // same shape as login/register
    //setUser(res.data); // Laravel returns the authenticated user
      
    } catch (error) {
      console.error("⚠️ Failed to fetch user:", err);
      localStorage.removeItem("token");
      setUser(null);
    } finally {
      setLoading(false);
    }
    
  };

  const logout = async () => {

      try {
        await api.post("/logout"); // API call to backend
      } catch (error) {
        console.error("Logout failed:", error);
      } finally {
        localStorage.removeItem("token");
        setUser(null);
      }
    // localStorage.removeItem("token");
    // setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);




// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   // Fake login
//   const login = async (email, password) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (email === "test@example.com" && password === "password") {
//           const fakeUser = { id: 1, name: "Test User", email };
//           setUser(fakeUser);
//           resolve(fakeUser);
//         } else {
//           reject(new Error("Invalid credentials"));
//         }
//       }, 1000); // simulate API delay
//     });
//   };

//   // Fake signup
//   const signup = async (name, email, password) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const fakeUser = { id: Date.now(), name, email };
//         setUser(fakeUser);
//         resolve(fakeUser);
//       }, 1000);
//     });
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, signup, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
