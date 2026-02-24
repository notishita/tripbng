import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Set the base URL for the API (adjust according to your API's base URL)
const API_BASE_URL = "https://tripbookngo-backend.onrender.com";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add the token from AsyncStorage
apiClient.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error retrieving token", error);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor (optional)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Response Error:", error);
    return Promise.reject(error);
  }
);

// API Service Methods
export const apiService = {
  get: async (url, params = {}) => {
    try {
      const response = await apiClient.get(url, { params });
      return response.data;
    } catch (error) {
      console.error("GET Error:", error);
      throw error;
    }
  },

  post: async (url, data, useFormData = false) => {
    try {
      const config = useFormData
        ? { headers: { "Content-Type": "multipart/form-data" } }
        : {};
      const response = await apiClient.post(url, data, config);
      return response.data;
    } catch (error) {
      console.error("POST Error:", error);
      throw error;
    }
  },

  patch: async (url, data) => {
    try {
      const response = await apiClient.patch(url, data);
      return response.data;
    } catch (error) {
      console.error("PATCH Error:", error);
      throw error;
    }
  },

  delete: async (url) => {
    try {
      const response = await apiClient.delete(url);
      return response.data;
    } catch (error) {
      console.error("DELETE Error:", error);
      throw error;
    }
  },
};
