import React from "react";

function Selfservice() {
  return (
    <div className="pt-5 mx-5 pb-5">
      <div>
        <h2 className="fw-bolder">Customer Self-Service Invoicing </h2>
        <h5 className="pt-3 text-secondary lh-base">
          Streamline invoicing by letting customers input all details
          themselves, from <br /> contact info to tax rate, for accuracy and
          efficiency.
        </h5>
      </div>
      <div className="mt-5 d-flex flex-column ">
        <div className="d-flex gene-div gap-5 justify-content-around">
          <div>
            <b>Customer Input</b>
            <p className=" h6 text-secondary lh-base pt-1">
              Customers can conveniently fill in their personal information such
              as address, email, and other details required for the invoice.
            </p>
          </div>
          <div>
            <b>Customizable Tax Rates</b>
            <p className=" h6 text-secondary lh-base pt-1">
              Customers have the flexibility to set their own tax rates to
              accurately reflect their business requirements
            </p>
          </div>
          <div>
            <b>Real-time Preview</b>
            <p className=" h6 text-secondary lh-base pt-1">
              Enjoy the convenience of a real-time preview feature, allowing
              customers to see exactly how their final invoice will look before
              generating it.
            </p>
          </div>
        </div>
        <div className="mt-5">
          <div className="d-flex  gene-div gap-5 bd-highlight   ">
            <div>
              <b>PDF Format</b>
              <p className=" h6 text-secondary lh-base pt-1">
                Once satisfied with the invoice, customers can easily
                <br /> generate it in PDF ensuring compatibility and <br />{" "}
                professionalism.
              </p>
            </div>
            <div className="">
              <b>Pay-per-Use Billing</b>
              <p className=" h6 text-secondary lh-base pt-1">
                Billing occurs only when the customer downloads
                <br /> the finalized invoice, ensuring fair and transparent
                <br /> pricing with no upfront costs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Selfservice;
