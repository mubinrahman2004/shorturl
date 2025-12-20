import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/",
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = ` ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const authServises = {
  login: async (email, password) => {
    const res = await api.post("/auth/login", { email, password });
    return res.data;
  },
  registration: async (fllName, email, password) => {
    const res = await api.post("/auth/registration", {
      fllName,
      email,
      password,
    });
    return res.data;
  },
  getProfile: async () => {
    const res = await api.get("/auth/getprofile");
    return res.data;
  },
};
const urlServices = {
  creatShort: async (urlLong) => {
    const res = await api.post("/url/creat", { urlLong });
    return res.data;
  },
  getAll: async () => {
    const res = await api.get("/url/getall");
    return res.data;
  },
};
export{authServises,urlServices}