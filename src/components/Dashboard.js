
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { deleteById } from "../services/InvoiceApis";

function Dashboard({ invoices, getAllInvoices }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const Modal = ({ open, onClose, children }) => (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow p-6 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          {/* <X /> */}
        </button>
        {children}
      </div>
    </div>
  );

  const removeItemById = (id) => {
    const itemsJson = localStorage.getItem("invoices");
    if (itemsJson) {
      const itemsArray = JSON.parse(itemsJson);
      const updatedItemsArray = itemsArray.filter((item) => item.id !== id);
      localStorage.setItem("invoices", JSON.stringify(updatedItemsArray));
    }
  };

  const deleteInvoice = async (id) => {
    try {
      await deleteById(id);
      removeItemById(id);
      setOpen(false);
      await getAllInvoices();
      toast.success("Invoice Deleted Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-100">
      <section>
        <div className="d-flex justify-content-between gap-2 h-100 w-100 profile">
          <b className="invoicehead h4">Invoice generators</b>
          <small className="sample">
            <button
              type="primary rounded-lg"
              style={{ backgroundColor: "#0891b2", borderRadius: "10px" }}
              className="text-white crt-btn border-white fw-bold"
              onClick={() => navigate("/create-invoice")}
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

      {Array.isArray(invoices) &&
        invoices.map((bill) => (
          <section key={bill._id}>
            <table className="invoice-flex-1 border rounded  ">
              <tr className="">
                <td className=" small">{bill?.currentDate}</td>
              </tr>
              <tr
                className="d-flex gap-5 justify-content-around w-50"
                onClick={() => navigate(`/get-invoice/${bill?.companyName}`)}
              >
                <td className=" small">{bill?.companyName}</td>
                <td className=" small">{bill?.companyAddress}</td>
                <td className=" small">{bill?.companyEmail} </td>
              </tr>
              <tr className=" d-flex    gap-2">
                <td>
                  <Button
                    className="w-100 h-100 border-danger"
                    onClick={() =>
                      navigate(`/update-invoice/${bill.companyName}`)
                    }
                  >
                    <EditFilled className="text-danger h-100 w-100" />
                  </Button>
                </td>
                <td>
                  <Button
                    className="w-100 h-100 border-primary"
                    onClick={() => setOpen(true)}
                  >
                    <DeleteFilled className="text-primary h-100 w-100" />
                  </Button>
                </td>
              </tr>
            </table>
            <main style={{}} className="App">
              <Modal open={open} onClose={() => setOpen(false)}>
                <div className="text-center w-56">
                  <div className="mx-auto my-4 w-48">
                    <h3 className="text-lg font-black text-gray-800">
                      Confirm Delete
                    </h3>
                    <p className="text-sm text-gray-500">
                      Are you sure you want to delete this item?
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <button
                      className="btn btn-danger w-full"
                      onClick={() => deleteInvoice(bill._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-light w-full"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Modal>
            </main>
          </section>
        ))}
      <ToastContainer />
    </div>
  );
}

export default Dashboard;
