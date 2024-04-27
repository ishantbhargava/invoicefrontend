import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

function CreateInvoice() {
  const [currentDate, setCurrentDate] = useState("");
  const [productList, setProductList] = useState([
    { productName: "", price: "", quantity: "" },
  ]);
  const [formData, setFormData] = useState({
    products: [],
    currentDate: "",
    companyName: "",
    companyAddress: "",
    companyEmail: "",
  });

  const navigate = useNavigate("");

  useEffect(() => {
    setCurrentDate(moment().format("Do MMM YY"));

    setFormData({ ...formData, currentDate: currentDate });
  }, [currentDate]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addProduct = () => {
    setProductList([
      ...productList,
      { productName: "", price: "", quantity: "" },
    ]);
  };

  const removeProduct = (index) => {
    const updatedProducts = [...productList];
    updatedProducts.splice(index, 1);
    setProductList(updatedProducts);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:9999/api/v1/invoice/create-invoice",
        { ...formData, products: productList }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/dashboard");
      } else {
        toast.error(res.data && res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <div className="pt-5 ">
        <div className="generater-page mx-auto bg-white   ">
          <div className="mx-3 ">
            <h4 className="fw-bold pt-3 ">Create New Invoice Generator</h4>
            <form onSubmit={handleSubmit}>
              {/* product section */}
              {productList.map((product, index) => (
                <div key={index}>
                  <div className="me-2 mt-3">
                    <label className="gene-page-text">Product Name</label>
                    <input
                      required
                      name="productName"
                      value={product.productName}
                      onChange={(e) => {
                        const updatedProducts = [...productList];
                        updatedProducts[index].productName = e.target.value;
                        setProductList(updatedProducts);
                      }}
                      style={{ fontSize: "14px", fontWeight: "390" }}
                      placeholder="Enter product name"
                      className="w-100 rounded border border-grey font-weight-light p-2 mt-2 text-secondary blackquote"
                    />
                  </div>
                  <div className="mt-2 d-flex gap-3">
                    <div className="w-100">
                      <label className="gene-page-text">Price</label>
                      <input
                        required
                        name="price"
                        value={product.price}
                        onChange={(e) => {
                          const updatedProducts = [...productList];
                          updatedProducts[index].price = e.target.value;
                          setProductList(updatedProducts);
                        }}
                        style={{ fontSize: "14px", fontWeight: "390" }}
                        type="number"
                        placeholder="Product Price"
                        className="w-100 rounded border border-grey font-weight-light p-2 mt-2 text-secondary blackquote"
                      />
                    </div>
                    <div className="w-100">
                      <label className="gene-page-text">Quantity</label>
                      <input
                        required
                        name="quantity"
                        value={product.quantity}
                        onChange={(e) => {
                          const updatedProducts = [...productList];
                          updatedProducts[index].quantity = e.target.value;
                          setProductList(updatedProducts);
                        }}
                        style={{ fontSize: "14px", fontWeight: "390" }}
                        type="number"
                        placeholder="Quantity"
                        className="w-100 rounded border border-grey font-weight-light p-2 mt-2 text-secondary blackquote"
                      />
                    </div>
                    <button
                      onClick={() => removeProduct(index)}
                      className="btn btn-outline-danger mt-2"
                      type="button"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={addProduct}
                className="btn text-white"
                style={{
                  backgroundColor: "#0891b2",
                  borderRadius: "8px",
                  marginTop: "4px",
                }}
                type="button"
              >
                Add Product
              </button>
              {/* productSectionEnd */}
              <div className="me-2 mt-3">
                <label className="gene-page-text">Company Name</label>
                <input
                  required
                  name="companyName"
                  onChange={handleChange}
                  style={{ fontSize: "14px", fontWeight: "390" }}
                  placeholder="Enter company name"
                  className="w-100 rounded border border-grey font-weight-light p-2 mt-2 text-secondary blackquote"
                />
              </div>
              <div className="me-2 mt-3">
                <label className="gene-page-text">Company Address</label>
                <input
                  required
                  name="companyAddress"
                  onChange={handleChange}
                  style={{ fontSize: "14px", fontWeight: "390" }}
                  placeholder="Enter company address"
                  className="w-100 rounded border border-grey font-weight-light p-2 mt-2 text-secondary blackquote"
                />
              </div>
              <div className="me-2 mt-3">
                <label className="gene-page-text">
                  Company Email (optional)
                </label>
                <input
                  name="companyEmail"
                  onChange={handleChange}
                  style={{ fontSize: "14px", fontWeight: "390" }}
                  placeholder="Enter company email"
                  type="email"
                  className="w-100 rounded border border-grey font-weight-light p-2 mt-2 text-secondary blackquote"
                />
              </div>
              <div className="col-12 mb-3">
                <div className="d-grid ">
                  <button
                    style={{
                      backgroundColor: "#0891b2",
                      borderRadius: "8px",
                    }}
                    className="btn bsb-btn-xl mt-3 btn-primary"
                    type="submit"
                  >
                    Create Invoice{" "}
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
}

export default CreateInvoice;
