import React from "react";
import UserInfoandStats from "../components/UserInfoandStats";
import InvoiceDashboard from "../components/InvoiceDashboard";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function DashBoard() {
  const [invoices, setInvoices] = useState([]);
  //const { slug } = useParams();
  let slug = "";

  const getAllInvoices = async () => {
    try {
      const res = await axios.get(
        " http://localhost:9999/api/v1/invoice/dashboard"
      );
      setInvoices(res.data.invoices);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllInvoices();
  }, []);
  return (
    <div
      className="d-flex flex-576"
      style={{ height: "100vh", backgroundColor: "rgb(248 250 252)" }}
    >
      <UserInfoandStats />
      <InvoiceDashboard invoices={invoices} getAllInvoices={getAllInvoices} />
    </div>
  );
}

export default DashBoard;
