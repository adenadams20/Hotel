import api from "./api";

const register = (name, email, password) => {
  return api.post("/register", { name, email, password, password_confirmation: password });
};

const login = (email, password) => {
  return api.post("/login", { email, password });
};

const logout = () => {
  localStorage.removeItem("token");
};

export default {
  register,
  login,
  logout,
};
