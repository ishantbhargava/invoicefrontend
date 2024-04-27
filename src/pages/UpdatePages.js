import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdatePages = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [productList, setProductList] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getInvoiceBySlug = async () => {
      try {
        const res = await axios.get(
          `http://localhost:9999/api/v1/invoice/get-invoice/${slug}`
        );
        const invoiceData = res.data.invoice;
        setCompanyName(invoiceData.companyName);
        setCompanyEmail(invoiceData.companyEmail);
        setCompanyAddress(invoiceData.companyAddress);
        setProductList(invoiceData.products);
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
    console.log(productList);

    try {
      const res = await axios.put(
        `http://localhost:9999/api/v1/invoice/update-invoice/${slug}`,
        { companyName, companyEmail, companyAddress, products: productList }
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
    <div className="h-100">
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
                      onChange={(e) =>
                        handleProductNameChange(index, e.target.value)
                      }
                      required
                      className="w-100 rounded border border-grey font-weight-light p-2 mt-2 text-secondary blackquote"
                    />
                  </div>
                  <div className="me-2 mt-3">
                    <label className="gene-page-text">Price</label>
                    <input
                      value={product.price}
                      onChange={(e) => handlePriceChange(index, e.target.value)}
                      required
                      className="w-100 rounded border border-grey font-weight-light p-2 mt-2 text-secondary blackquote"
                    />
                  </div>
                  <div className="me-2 mt-3">
                    <label className="gene-page-text">Quantity</label>
                    <input
                      value={product.quantity}
                      onChange={(e) =>
                        handleQuantityChange(index, e.target.value)
                      }
                      required
                      className="w-100 rounded border border-grey font-weight-light p-2 mt-2 text-secondary blackquote"
                    />
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
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                  className="w-100 rounded border border-grey font-weight-light p-2 mt-2 text-secondary blackquote"
                />
              </div>
              <div className="me-2 mt-3">
                <label className="gene-page-text">Company Address</label>
                <input
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
    </div>
  );
};

export default UpdatePages;
