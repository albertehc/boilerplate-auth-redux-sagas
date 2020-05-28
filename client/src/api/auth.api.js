import { axiosInstance } from "./api";

export const signup = (data) => {
  return axiosInstance.post("/api/signup", data);
};

export const login = (data) => {
  return axiosInstance.post("/api/auth", data);
};

export const edit = (data) => {
  return axiosInstance.put("/api/auth", data);
};

export const remove = (data) => {
  return axiosInstance.delete("/api/auth", { data });
};

export const me = () => {
  return axiosInstance.get("/api/auth");
};

export const logout = () => {
  return axiosInstance.post("/api/auth/logout");
};
