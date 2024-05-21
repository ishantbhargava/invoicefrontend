import axios from "axios";

export const createInvoice = async (SentFormData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_NOT_SECRET_CODE}api/v1/invoice/create-invoice`,
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
      `${process.env.REACT_APP_NOT_SECRET_CODE}api/v1/invoice/dashboard`,
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
      `${process.env.REACT_APP_NOT_SECRET_CODE}api/v1/invoice/delete-invoice/${id}`
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
      `${process.env.REACT_APP_NOT_SECRET_CODE}api/v1/invoice/get-invoice/${slug}`
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
      `${process.env.REACT_APP_NOT_SECRET_CODE}api/v1/invoice/update-invoice/${slug}`,
      { companyName, companyEmail, companyAddress, products: productList }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("someting went wrongg", error);
    throw error;
  }
};
