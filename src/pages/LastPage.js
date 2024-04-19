import YourInfo from "../components/YourInfo";
import Preview from "../components/Preview";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function LastPage() {
  const [invoice, setInvoice] = useState({});
  const [info, setInfo] = useState();
  const [download, setDownload] = useState(() => {});
  const { slug } = useParams();
  const [loader, setLoader] = useState("");
  useEffect(() => {
    const getInvoiceBySlug = async () => {
      try {
        const res = await axios.get(
          `http://localhost:9999/api/v1/invoice/get-invoice/${slug}`
        );
        setInvoice(res.data.invoice);
        console.log(res.data.invoice.products);
      } catch (error) {
        console.error(error);
      }
    };

    getInvoiceBySlug();
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
    // setDownload(() => downloadPdf);
    setLoader(loader);
    //setDownload(downloadPdf);
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
