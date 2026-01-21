import axios from "axios";

// Base URL : prend la variable d'environnement ou localhost
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Ajouter automatiquement le token si présent
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/* ===========================
   AUTHENTIFICATION
=========================== */
// Inscription
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/register", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Connexion
export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/login", credentials);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Infos user connecté
export const getMe = async () => {
  try {
    const response = await api.get("/me");
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Déconnexion
export const logoutUser = async () => {
  try {
    const response = await api.post("/logout");
    localStorage.removeItem("token");
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export default api;
