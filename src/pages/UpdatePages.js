import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UpdatePages = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const navigate = useNavigate("");
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:9999/api/v1/invoice/update-invoice/${id}`,
      {  companyName,
        companyEmail,
        companyAddress}
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        //navigate(`/dashboard/${res.data.invoice.slug}`);
        // console.log(res.data.invoice.slug);
        navigate("/dashboard");
      } else {
        toast.error(res.data && res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <div className="h-100">
      <div className="pt-5 h-100">
        <div className="generater-page mx-auto bg-white h-100  ">
          <div className="mx-3 ">
            <h4 className="fw-bold pt-3 ">Update Invoice Generator Info</h4>
            <form onSubmit={handleSubmit}>
              <div className="me-2 mt-3">
                <label className="gene-page-text"> Company Name</label>
                <input
                  required
                  type="text"
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setCompanyAddress(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setCompanyEmail(e.target.value);
                  }}
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
                    Update{" "}
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
