import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
function CreateInvoice() {
  const [currentDate, setCurrentDate] = useState();
  const [productName, setProductName] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [productList, setProductList] = useState([
    { productName: productName, price: price, quantity: quantity },
  ]);

  const addProduct = () => {
    setProductList([
      { productName: productName, price: price, quantity: quantity },
    ]);
  };
  useEffect(() => {
    setProductList([
      //...productList,
      { productName: productName, price: price, quantity: quantity },
    ]);
  });
  // const test = () => {
  //   setProductList([
  //     //...productList,
  //     { productName: productName, price: price, quantity: quantity },
  //   ]);
  // };
  const removeProduct = ({ index }) => {
    const list = [...productList];
    list.splice(index, 1);
    setProductList(list);
  };
  useEffect(() => {
    setCurrentDate(moment().format("Do MMM YY"));

    setFormData({ ...formData, currentDate: currentDate });
  }, [currentDate]);

  const [formData, setFormData] = useState({
    products: [],
    companyName: "",
    companyAddress: "",
    companyEmail: "",
  });
  const navigate = useNavigate("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedProductList = productList.filter(
        (product) => product.productName && product.price && product.quantity
      );
      console.log(updatedProductList);
      const updatedFormData = {
        ...formData,
        products: updatedProductList,
      };

      const res = await axios.post(
        "http://localhost:9999/api/v1/invoice/create-invoice",
        updatedFormData
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate(`/get-invoice/${res.data.invoice.slug}`);
      } else {
        toast.error(res.data && res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
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

              {productList.map((details, index) => (
                <div key={index}>
                  <div className="me-2 mt-3">
                    <label className="gene-page-text"> Product Name</label>
                    <input
                      required
                      name="productName"
                      style={{ fontSize: "14px", fontWeight: "390" }}
                      placeholder="enter your product name"
                      onChange={(e) => {
                        setProductName(e.target.value);
                      }}
                      className="w-100 rounded border border-grey font-weight-light
                p-2 mt-2 text-secondary blackquote "
                    />
                  </div>

                  <div className="mt-2 d-flex gap-3">
                    <div className="w-100">
                      <label className="gene-page-text">Price</label>
                      <input
                        required
                        id="price"
                        name="price"
                        style={{ fontSize: "14px", fontWeight: "390" }}
                        type="number"
                        placeholder="Product Price"
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
                        className="w-100 rounded
                            border border-grey font-weight-light p-2 mt-2   text-secondary  blackquote    "
                      />
                    </div>
                    <div className="w-100">
                      <label className="gene-page-text">Quantity</label>
                      <input
                        required
                        id="quantity"
                        name="quantity"
                        style={{ fontSize: "14px", fontWeight: "390" }}
                        type="number"
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder="quantity"
                        className=" w-100 rounded
                  border border-grey font-weight-light p-2 mt-2   text-secondary  blackquote "
                      />
                    </div>
                  </div>
                  {productList.length - 1 === index &&
                    productList.length < 8 && (
                      <div className="d-flex justify-content-between">
                        <div>
                          <button
                            style={{
                              backgroundColor: "#0891b2",
                              borderRadius: "8px",
                            }}
                            className="btn bsb-btn-xl mt-3   text-white"
                            type="submit"
                            onClick={addProduct}
                          >
                            Add Product
                          </button>
                        </div>
                        <div>
                          {productList.length > 1 && (
                            <button
                              onClick={removeProduct}
                              style={{
                                backgroundColor: "",
                                borderRadius: "8px",
                              }}
                              className=" mt-3  btn btn-outline-danger"
                              type="submit"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                </div>
              ))}
              {/* productSectionEnd */}
              <div className="me-2 mt-3">
                <label className="gene-page-text"> Company Name</label>
                <input
                  required
                  name="companyName"
                  onChange={handleChange}
                  style={{ fontSize: "14px", fontWeight: "390" }}
                  placeholder="enter your company name"
                  className="w-100 rounded
                            border border-grey font-weight-light p-2 mt-2   text-secondary  blackquote    "
                />
              </div>

              <div className="me-2 mt-3">
                <label className="gene-page-text"> Company Address</label>
                <input
                  required
                  name="companyAddress"
                  onChange={handleChange}
                  style={{ fontSize: "14px", fontWeight: "390" }}
                  placeholder="enter your company address"
                  className="w-100 rounded
                            border border-grey font-weight-light p-2 mt-2   text-secondary  blackquote    "
                />
              </div>
              <div className="me-2 mt-3">
                <label className="gene-page-text">
                  {" "}
                  Company Email (optional){" "}
                </label>
                <input
                  required
                  name="companyEmail"
                  onChange={handleChange}
                  style={{ fontSize: "14px", fontWeight: "390" }}
                  placeholder="enter your company Email"
                  type="email"
                  className="w-100 rounded
                            border border-grey font-weight-light p-2 mt-2   text-secondary  blackquote    "
                />
              </div>
              <div className="col-12 mb-3">
                <div className="d-grid ">
                  <button
                    style={{
                      backgroundColor: "#0891b2",
                      borderRadius: "8px",
                    }}
                    className="btn bsb-btn-xl mt-3   btn-primary"
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
