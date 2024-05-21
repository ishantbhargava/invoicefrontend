import axios from "axios";

export const createUser = async (email, password) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_NOT_SECRET_CODE}api/v1/auth/signup`,
      {
        email,
        password,
      }
    );
    return response.data;
  } catch (error) {
    console.log("error creating error", error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    console.log(process.env.REACT_APP_NOT_SECRET_CODE);
    const response = await axios.post(
      `${process.env.REACT_APP_NOT_SECRET_CODE}api/v1/auth/login`,
      {
        email,
        password,
      }
    );
    console.log("user api ", response.data);
    return response.data;
  } catch (error) {
    console.log("error logging in", error);
  }
};
export const forgetUser = async (email, newPassword) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_NOT_SECRET_CODE}api/v1/auth/forget-password`,
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
