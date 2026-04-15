import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5000/auth",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const uploadProfilePictureApi = async (formData) => {
  const res = await API.post("/profile-picture", formData);
  return res.data;
};
