import axios from "axios";

console.log("API Base URL:", import.meta.env.VITE_API_BASE_URL);

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "any-value"
  },
  // withCredentials: true,  // 필요한 경우 인증용
});

export default api;
