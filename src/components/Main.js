import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckOutlined,
  FormOutlined,
  SwitcherOutlined,
  RestOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

function Main() {
  const navigate = useNavigate();
  return (
    <main className="w-full  ">
      <div className="text-center px-4 mt-5">
        <h1
          className="pt-5 "
          style={{
            fontSize: "4rem",
            fontWeight: "600",
            lineHeight: "1",
            marginTop: "100px",
          }}
        >
          <span style={{ color: "#2DAFAF", fontWeight: "600" }} className="">
            Simplify
          </span>
          <br />
          Your Invoicing Hassles.
        </h1>
        <h6 className="mt-5 text-secondary ">
          How to streamline your invoicing process?{" "}
        </h6>
        <div className="mt-3 text-secondary d-flex justify-content-center flex-576 ">
          <h6 className=" ">
            <span className="text-white bg-secondary rounded-circle py-1 px-2  ">
              1
            </span>
            <span className="mx-2">Create your invoice generater.</span>
          </h6>
          <h6 className="">
            <span className="text-white bg-secondary rounded-circle py-1 px-2   ">
              2
            </span>
            <span className="mx-2">
              Send the generator link to your customers
            </span>
          </h6>
          <h6 className="">
            <span className="text-white align-top   ">
              <CheckOutlined
                className="px-1   "
                style={{
                  backgroundColor: "#2DAFAF",
                  borderRadius: "50%",
                  height: "26px",
                  width: "22px",
                }}
              />
            </span>
            <span className="mx-2  ">
              Customers generate their own invoices.
            </span>
          </h6>
        </div>
        <Button
          type="primary"
          shape="round"
          className="bg-dark mt-5 px-3 fw-bold py-1"
          onClick={() => navigate("/signup")}
        >
          Get Started
        </Button>
        <p className="mt-3 h6 text-secondary">
          Take ~1 minute signup. No Credit card required
        </p>
      </div>
      <section id="features" className=" mx-1 bg-white ">
        <div style={{ paddingTop: "100px" }} className="mx-auto text-center ">
          <h5 className="" style={{ color: "rgb(66, 153, 147)" }}>
            Generate Invoice automatically
          </h5>
          <h2 className="fw-bold">Simplified Invoicing Solutions</h2>
          <p
            style={{ paddingBottom: "100px" }}
            className="fw-normal   section-p lh-lg h6 "
          >
            Simplifies your invoicing process, eliminating the need for manual
            <br />
            invoice creation. Manage invoices effortlessly for your paid
            <br />
            products, leaving you more time to focus on growing your business.
          </p>
          <img
            src="https://www.invoicepages.com/_next/static/media/generator_shot.45526303.png"
            className="w-100   overflow-hidden"
          />
        </div>
        <div
          style={{ height: "650px" }}
          className="d-flex details align-items-center gap-5 px-3"
        >
          <div className="d-flex details-head  ln-lg">
            <div className="d-flex flex-row">
              <span>
                <FormOutlined className="text-primary font-weight-bold  " />
              </span>
              <div>
                <b className="mx-2">Customizable invoice Pages.</b>
                <span className="">
                  Create personalized pages for each product, aligning with your
                  brand. Customers use these pages to generate invoices
                  seamlessly.
                </span>
              </div>
            </div>
          </div>
          <div className="d-flex ">
            <div className="d-flex details-head  ln-lg">
              <div className="d-flex flex-row">
                <span>
                  <SwitcherOutlined className="text-primary font-weight-bold" />
                </span>
                <div>
                  <b className="mx-2">Automated Invoice Generation. </b>
                  <p>
                    Send a unique link to your customers, who can then generate
                    invoices instantly. No more manual follow-ups; it's all
                    automated for timely payments.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex  ">
            <div className="d-flex  details-head  ln-lg">
              <div className="d-flex flex-row">
                <span>
                  <RestOutlined className="text-primary font-weight-bold" />
                </span>
                <div>
                  <b className="mx-2">Effortless Record Keeping</b>
                  <p>
                    We handle all invoice tracking for you. Easily review and
                    organize customer invoicing history, making the entire
                    process straightforward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
