import React from "react";
import { useNavigate } from "react-router-dom";
function InvoiceDashboard() {
  const navigate = useNavigate("");
  return (
    <div className=" w-100">
      <section>
        <div className="d-flex justify-content-between gap-2 h-100 w-100  profile  ">
          <b className="invoicehead h4">Invoice generators</b>{" "}
          <small className="sample">
            <button
              type="primary rounded-lg "
              style={{
                backgroundColor: "#0891b2",
                borderRadius: "10px",
              }}
              className="text-white crt-btn border-white fw-bold   "
              onClick={() => {
                navigate("/create-invoice");
              }}
            >
              Create New Invoice
            </button>
          </small>
        </div>
      </section>
      <section>
        <table className="invoice-flex border rounded  ">
          <tr>
            <td className="fw-bold small">Product/Services Name</td>
          </tr>
          <tr className="d-flex gap-3 justify-content-around w-50">
            <td className="fw-bold small">Price</td>
            <td className="fw-bold small">Currency</td>
            <td className="fw-bold small">Generator Link</td>
          </tr>
        </table>
      </section>
    </div>
  );
}

export default InvoiceDashboard;
