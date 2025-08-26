import axios from "axios";

const api = axios.create({
  //baseURL: "http://127.0.0.1:8000/api", // your Laravel API base
  baseURL: "https://www.mybro.com.ng/api", // your Laravel API base
});

// attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api; // ✅ must have default export