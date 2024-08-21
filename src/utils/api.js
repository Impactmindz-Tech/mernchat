import axiosInstance from "./axiosInstance";

// utils/api.js

export const registeer = async (formData) => {
  try {
    const response = await axiosInstance.post("/api/register", formData);
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};
export const loginApi = async (formData) => {
  try {
    const response = await axiosInstance.post("/api/login", formData);
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};
