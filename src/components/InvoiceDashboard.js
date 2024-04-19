import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "antd";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function InvoiceDashboard({ invoices, getAllInvoices }) {
  const navigate = useNavigate("");
  //const [companyName, setCompanyName] = useState();

  const deleteInvoice = async (id) => {
    try {
      let answer = window.prompt("Are You Sure want to delete this product ? ");
      if (!answer) return;
      const { data } = await axios.delete(
        `http://localhost:9999/api/v1/invoice/delete-invoice/${id}`
      );
      await getAllInvoices();
      //window.location.reload();
      toast.success("invoices DEleted Succfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

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
            <td className="fw-bold small">Bill Date</td>
          </tr>
          <tr className="d-flex gap-3 justify-content-around w-50">
            <td className="fw-bold small">Company Name</td>
            <td className="fw-bold small">company Address</td>
            <td className="fw-bold small">Company Email </td>
          </tr>
        </table>
      </section>
      {invoices.map((bill) => (
        <section key={bill._id}>
          <div
            className="w-100"
            onClick={() => navigate(`/get-invoice/${bill?.companyName}`)}
          >
            <table className="invoice-flex-1 border rounded  ">
              <tr>
                <td className=" small">{bill?.currentDate}</td>
              </tr>
              <tr className="d-flex gap-5 justify-content-around w-100">
                <td className=" small">{bill?.companyName}</td>
                <td className=" small">{bill?.companyAddress}</td>
                <td className=" small">{bill?.companyEmail} </td>

                <tr className="">
                  <td>
                    <Button
                      type="danger"
                      ghost
                      onClick={() => navigate(`/update-invoice/${bill._id}`)}
                    >
                      edit{" "}
                    </Button>
                  </td>
                  <td>
                    <button onClick={() => deleteInvoice(bill._id)}>
                      delete
                    </button>
                  </td>
                </tr>
              </tr>
            </table>
          </div>
        </section>
      ))}
    </div>
  );
}

export default InvoiceDashboard;
