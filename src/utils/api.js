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
export const fetchConversationss = async (id) => {
  try {
    const response = await axiosInstance.get("/api/conversation/" + id);
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const fetchMessageApi = async (id, senderId, receiverId) => {
  if (!id) {
    throw new Error("Invalid conversation ID");
  }

  try {
    const response = await axiosInstance.get(`/api/message/${id}`, {
      params: {
        senderId,
        receiverId
      }
    });
    return response.data;
  } catch (error) {
    console.error("Fetch message error:", error);
    throw error;
  }
};



export const sendMessageApi = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/message/", payload);
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};
export const usersApi = async (id) => {
  try {
    const response = await axiosInstance.get("/api/users/" + id);
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};
