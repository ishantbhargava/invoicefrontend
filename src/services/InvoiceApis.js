import axios from "axios";

const API_BASE_URL = "http://localhost:9999/";
//"https://invoice-app-repo-api.onrender.com/";

export const createInvoice = async (SentFormData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}api/v1/invoice/create-invoice`,
      SentFormData
    );
    return response.data;
  } catch (error) {
    console.log("someting went wrongg", error);
    throw error;
  }
};

export const getAll = async (token) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}api/v1/invoice/dashboard`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    console.log("response data from api file", response.data.invoices);
    return response.data.invoices;
  } catch (error) {
    console.log("someting went wrongg", error);
    throw error;
  }
};

export const deleteById = async (id) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}api/v1/invoice/delete-invoice/${id}`
    );
    return response.data;
  } catch (error) {
    console.log("someting went wrongg", error);
    throw error;
  }
};

export const getBySlug = async (slug) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}api/v1/invoice/get-invoice/${slug}`
    );
    console.log("res by slug", response.data);
    return response.data;
  } catch (error) {
    console.log("someting went wrongg", error);
    throw error;
  }
};

export const update = async (
  companyName,
  companyEmail,
  companyAddress,
  productList,
  slug
) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}api/v1/invoice/update-invoice/${slug}`,
      { companyName, companyEmail, companyAddress, products: productList }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("someting went wrongg", error);
    throw error;
  }
};
