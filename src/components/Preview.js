import react, { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import html2canvas from "html2canvas";
import jsPdf from "jspdf";
const MyContext = createContext();
const MyContextProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  const downloadPdf = () => {
    const capture = document.querySelector(".preview-head");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPdf("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "  PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("reciept.pdf");
    });
  };
  return (
    <MyContext.Provider value={{ loader, downloadPdf }}>
      {children}
    </MyContext.Provider>
  );
};
function Preview({ invoice, info = {} }) {
  // useEffect(() => {
  //   sendFunction(downloadPdf());
  // }, []);

  let totalItemFinalPrice = 0;
  let totalTaxAmount = 0;
  return (
    <div>
      <div>
        <p className="fw-bold text-secondary">Preview</p>
        <div className="bg-white  border preview-head rounded">
          <div className="mx-4 py-4 ">
            <>
              <h2 className="fw-bolder">Invoice</h2>
              <div>
                <span className="fw-bold">Invoice Number: </span>
                <span></span>{" "}
              </div>
              <div>
                <span className="fw-bold">Date of issue: </span>
                <span>{invoice?.currentDate}</span>{" "}
              </div>

              <div className="d-flex mt-4 justify-content-between w-75 gap-5">
                <div>
                  <p className="fw-bold p-0 m-0">Bill to:</p>
                  <p className="p-0 m-0">{info.name}</p>
                  <p className="p-0 m-0">{info.address}</p>
                  <p className="p-0 m-0">{info.city}</p>
                  <p className="p-0 m-0">{info.state}</p>
                  <p className="p-0 m-0">{info.code}</p>
                  <p className="p-0 m-0">{info.country}</p>
                  <p className="p-0 m-0">{info.email}</p>
                </div>
                <div>
                  <p className="fw-bold p-0 m-0 ">Bill from:</p>
                  <p className="p-0 m-0">{invoice?.companyName}</p>
                  <p className="p-0 m-0">{invoice?.companyAddress}</p>
                  <p className="p-0 m-0">{invoice?.companyEmail}</p>
                </div>
              </div>

              <table className="mt-5 w-100">
                <thead>
                  <tr className="fw-bold d-flex justify-content-between w-100  p-2 ">
                    <th className=""> ITEM</th>
                    <th className="">QTY </th>
                    <th className="">UNIT PRICE </th>
                    <th className="">TAX </th>
                    <th className="">AMOUNT </th>
                  </tr>
                </thead>
                <tbody>
                  {invoice?.products?.map((product, index) => {
                    const itemFinalPrice = product.price * product.quantity;
                    const taxAmount = (itemFinalPrice * info?.tax || 0) / 100;
                    totalItemFinalPrice += itemFinalPrice;
                    totalTaxAmount += taxAmount;
                    return (
                      <tr
                        key={index}
                        style={{ width: "" }}
                        className="fw-bold d-flex justify-content-between w-100  text-secondary mt-2 p-2 "
                      >
                        <td className="small  fw-bold">
                          {product.productName}
                        </td>
                        <td className="small fw-bold">{product.quantity}</td>
                        <td className="small fw-bold">{product?.price}</td>
                        <td className="small fw-bold">
                          {info.tax ? info.tax : "0"} %
                        </td>
                        <td className="small fw-bold">{itemFinalPrice}</td>
                      </tr>
                    );
                  })}
                  <tr className="fw-bold d-flex justify-content-between w-100  text-secondary mt-2 p-2 ">
                    <td colSpan="4" className="text-end fw-bold">
                      Subtotal:
                    </td>
                    <td className="fw-bold">{totalItemFinalPrice}</td>
                  </tr>
                  <tr className="fw-bold d-flex justify-content-between w-100  text-secondary mt-2 p-2 ">
                    <td colSpan="4" className="text-end fw-bold">
                      Tax ({info.tax}%):
                    </td>
                    <td className="fw-bold">{totalTaxAmount}</td>
                  </tr>
                  <tr className="fw-bold d-flex justify-content-between w-100  text-secondary mt-2 p-2 ">
                    <td colSpan="4" className="text-end fw-bold">
                      Total:
                    </td>
                    <td className="fw-bold">
                      {totalItemFinalPrice + totalTaxAmount}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="w-100 border mt-5"></div>
              <div className=" mt-3 fw-bold  " style={{ height: "50px" }}>
                Notes:
                <p className="p-0 m-0">{info.notes}</p>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
const usePdf = () => useContext(MyContext);
export { usePdf, MyContextProvider };
export default Preview;
