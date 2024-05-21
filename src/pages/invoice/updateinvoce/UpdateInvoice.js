import React, { useState, useEffect } from "react";
import axios from "axios";
import EmailValidator from "email-validator";

import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./updateinvoice.css";
import { getBySlug, update } from "../../../services/InvoiceApis";
const UpdateInvoice = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [productList, setProductList] = useState([
    { productName: "", price: "", quantity: "" },
  ]);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getInvoiceBySlug = async () => {
      try {
        const res = await getBySlug(slug);

        const invoiceData = res.invoice;
        console.log("res = ", invoiceData);
        setCompanyName(invoiceData.companyName);
        setCompanyEmail(invoiceData.companyEmail);
        setCompanyAddress(invoiceData.companyAddress);
        setProductList(invoiceData.products || []);
      } catch (error) {
        console.error(error);
      }
    };

    getInvoiceBySlug();
  }, [slug]);

  const handleProductNameChange = (index, value) => {
    const updatedProducts = [...productList];
    updatedProducts[index].productName = value;
    setProductList(updatedProducts);
  };

  const handlePriceChange = (index, value) => {
    const updatedProducts = [...productList];
    updatedProducts[index].price = value;
    setProductList(updatedProducts);
  };

  const handleQuantityChange = (index, value) => {
    const updatedProducts = [...productList];
    updatedProducts[index].quantity = value;
    setProductList(updatedProducts);
  };

  const removeProduct = (index) => {
    const updatedProducts = [...productList];
    updatedProducts.splice(index, 1);
    setProductList(updatedProducts);
  };

  const addProduct = () => {
    setProductList([
      ...productList,
      { productName: "", price: "", quantity: "" },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!EmailValidator.validate(companyEmail)) {
      toast.error("Please enter a valid email address");
      return;
    }
    try {
      let hasInvalidPrice = false;
      productList.forEach((product) => {
        if (
          parseFloat(product.price) <= 0 ||
          parseFloat(product.quantity) <= 0
        ) {
          hasInvalidPrice = true;
        }
      });
      if (hasInvalidPrice) {
        toast.error("Price and quantity should be a positive number");
        return;
      }
      const res = await update(
        companyName,
        companyEmail,
        companyAddress,
        productList,
        slug
      );
      if (res && res.success) {
        toast.success(res.data && res.message);
        navigate("/dashboard");
      } else {
        toast.error(res && res.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="">
      <div className="pt-5 h-100">
        <div className="generater-page mx-auto bg-white h-100  ">
          <div className="mx-3 ">
            <h4 className="fw-bold pt-3 ">Update Invoice Generator Info</h4>
            <form onSubmit={handleSubmit}>
              {productList.map((product, index) => (
                <div key={index}>
                  <div className="me-2 mt-3">
                    <label className="gene-page-text">Product Name</label>
                    <input
                      value={product.productName}
                      style={{ fontSize: "14px", fontWeight: "390" }}
                      placeholder="update product name"
                      className="w-100 rounded border border-grey font-weight-light p-2 mt-2 text-secondary blackquote"
                      onChange={(e) =>
                        handleProductNameChange(index, e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="mt-2 d-flex gap-3">
                    <div className="me-2 mt-3">
                      <label className="gene-page-text">Price</label>
                      <input
                        style={{ fontSize: "14px", fontWeight: "390" }}
                        placeholder="update product price"
                        value={product.price}
                        onChange={(e) =>
                          handlePriceChange(index, e.target.value)
                        }
                        required
                        className="w-100 rounded border border-grey font-weight-light p-2 mt-2 text-secondary blackquote"
                      />
                    </div>
                    <div className="me-2 mt-3">
                      <label className="gene-page-text">Quantity</label>
                      <input
                        style={{ fontSize: "14px", fontWeight: "390" }}
                        placeholder="update product quantity"
                        value={product.quantity}
                        onChange={(e) =>
                          handleQuantityChange(index, e.target.value)
                        }
                        required
                        className="w-100 rounded border border-grey font-weight-light p-2 mt-2 text-secondary blackquote"
                      />
                    </div>
                  </div>
                  {productList.length > 1 && (
                    <div className="d-flex justify-content-between">
                      <button
                        onClick={() => removeProduct(index)}
                        className="btn btn-outline-danger mt-3"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              ))}
              <div className="d-flex justify-content-between mt-3">
                <button
                  onClick={addProduct}
                  className="btn text-white "
                  style={{ backgroundColor: "#0891b2", borderRadius: "8px" }}
                  type="button"
                >
                  Add Product
                </button>
              </div>
              <div className="me-2 mt-3">
                <label className="gene-page-text">Company Name</label>
                <input
                  style={{ fontSize: "14px", fontWeight: "390" }}
                  placeholder="update company  name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                  className="w-100 rounded border border-grey font-weight-light p-2 mt-2 text-secondary blackquote"
                />
              </div>
              <div className="me-2 mt-3">
                <label className="gene-page-text">Company Address</label>
                <input
                  style={{ fontSize: "14px", fontWeight: "390" }}
                  placeholder="update company address"
                  value={companyAddress}
                  onChange={(e) => setCompanyAddress(e.target.value)}
                  required
                  className="w-100 rounded border border-grey font-weight-light p-2 mt-2 text-secondary blackquote"
                />
              </div>
              <div className="me-2 mt-3">
                <label className="gene-page-text">
                  Company Email (optional)
                </label>
                <input
                  style={{ fontSize: "14px", fontWeight: "390" }}
                  placeholder="update company  email"
                  value={companyEmail}
                  onChange={(e) => setCompanyEmail(e.target.value)}
                  className="w-100 rounded border border-grey font-weight-light p-2 mt-2 text-secondary blackquote"
                />
              </div>
              <div className="col-12 mb-3">
                <div className="d-grid">
                  <button
                    style={{ backgroundColor: "#0891b2", borderRadius: "8px" }}
                    className="btn bsb-btn-xl mt-3 btn-primary"
                    type="submit"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateInvoice;
