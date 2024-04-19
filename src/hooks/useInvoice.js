import { useState, useEffect } from "react";
import axios from "axios";

export default function useInvoice() {
  const [invoice, setInvoice] = useState([]);

  //get invoice
  const getInvoice = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:9999/api/v1/invoice/get-invoice"
      );
      setInvoice(data?.invoice);
    } catch (error) {}
  };

  useEffect(() => {
    getInvoice();
  }, []);
  return invoice;
}
