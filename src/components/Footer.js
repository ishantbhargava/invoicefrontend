

import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  let navigate = useNavigate("");
  return (
    <div>
      <div
        className="text-white text-center d-flex align-items-center justify-content-center "
        style={{ backgroundColor: "rgb(17 24 39)", height: "450px" }}
      >
        <div className="">
          <h2>Streamline Your Invoicing Today!</h2>
          <p className="text-center h5 mt-5 lh-base ">
            Ready to streamline your invoicing process and boost productivity?
            <br />
            Try our intuitive invoice generator today and experience seamless
            <br />
            invoicing like never before. Sign up now to get started!
          </p>
          <button
            type="button"
            class="btn btn-light fw-bold h6 mt-3 text-dark"
            onClick={() => navigate("/signup")}
          >
            Get Started
          </button>
        </div>
      </div>
      <div
        className="text-white text-center d-flex  flex-column align-items-center justify-content-center "
        style={{ height: "400px" }}
      >
        <small className="text-secondary">Terms & Conditions</small>
        <small className="text-secondary mt-5">
          © 2024 InvoicePages. All rights reserved.
        </small>
      </div>
    </div>
  );
}

export default Footer;

