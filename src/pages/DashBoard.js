import React from "react";
import UserInfoandStats from "../components/UserInfoandStats";
import InvoiceDashboard from "../components/InvoiceDashboard";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/Auth";
function DashBoard() {
  const [invoices, setInvoices] = useState([]);
  const [auth, setAuth] = useAuth();
  //const { slug } = useParams();
  let slug = "";

  const getAllInvoices = async () => {
    try {
      const token = auth.token;
      const res = await axios.get(


        
        `${process.env.REACT_APP_NOT_SECRET_CODE}api/v1/invoice/dashboard`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      localStorage.setItem("invoices", JSON.stringify(res.data.invoices));
      setInvoices(res.data.invoices);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllInvoices();
    const storedInvoices = localStorage.getItem("invoices");
    if (storedInvoices) {
      setInvoices(JSON.parse(storedInvoices));
    } else {
      getAllInvoices();
    }
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
