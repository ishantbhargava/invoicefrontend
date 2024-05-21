import YourInfo from "../../../components/YourInfo";
import Preview from "../../../components/Preview";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function LastPage() {
  const [invoice, setInvoice] = useState({});
  const [info, setInfo] = useState({});
  const [download, setDownload] = useState(null); 
  const { slug } = useParams();
  const [loader, setLoader] = useState("");

  const getInvoiceBySlug = (slug) => {
    const invoices = JSON.parse(localStorage.getItem("invoices")) || [];
    const invoice = invoices.find((inv) => inv.slug === slug);
    return invoice || {}; 
  };

  useEffect(() => {
    const setter = getInvoiceBySlug(slug);
    setInvoice(setter);
  }, [slug]);

  function handleDataFromChild(
    name,
    address,
    city,
    state,
    code,
    country,
    email,
    tax,
    notes,
    loader
  ) {
    setInfo({ name, address, city, state, code, country, email, tax, notes });
    setLoader(loader);
  }

  const functionHandlefromChild = (downloadPdf) => {
    setDownload(downloadPdf);
  };

  return (
    <div
      style={{ width: "75%" }}
      className="d-flex flex-576 justify-content-center mx-auto gap-4 pt-lg-5"
    >
      <YourInfo
        sendData={handleDataFromChild}
        invoice={invoice}
        loader={loader}
        download={download}
      />
      <Preview
        sendFunction={functionHandlefromChild}
        info={info}
        invoice={invoice}
      />
    </div>
  );
}

export default LastPage;
