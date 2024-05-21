import React, { useEffect, useState } from "react";
import InfoandStats from "../components/InfoandStats";
import Dashboard from "../components/Dashboard";
import { useAuth } from "../context/Auth";
import { getAll } from "../services/InvoiceApis";

function HomePage() {
  const [invoices, setInvoices] = useState([]);
  const [auth] = useAuth();

  const getAllInvoices = async () => {
    try {
      const token = auth.token;
      const res = await getAll(token);
      const invoicesData = res || [];
      localStorage.setItem("invoices", JSON.stringify(invoicesData));
      setInvoices(invoicesData);
    } catch (error) {
      console.error(error);
      setInvoices([]);
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
      <InfoandStats />
      <Dashboard invoices={invoices} getAllInvoices={getAllInvoices} />
    </div>
  );
}

export default HomePage;
