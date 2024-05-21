import axios from "axios";

const API_BASE_URL = "http://localhost:9999/";
//"https://invoice-app-repo-api.onrender.com/";

export const createUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}api/v1/auth/signup`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log("error creating error", error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}api/v1/auth/login`, {
      email,
      password,
    });
    console.log("user api ", response.data);
    return response.data;
  } catch (error) {
    console.log("error logging in", error);
  }
};
export const forgetUser = async (email, newPassword) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}api/v1/auth/forget-password`,
      {
        email,
        newPassword,
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("error creating error", error);
    throw error;
  }
};
