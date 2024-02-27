import React from "react";
import {
  CreditCardFilled,
  MergeFilled,
  StrikethroughOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

function Generater() {
  return (
    <div className="px-5 bg-white ">
      <section className=" d-flex gap-5 justify-content-between generater">
        <div className="generater-flex pt-5  w-100">
          <h5 className="text-primary">Create your Generator</h5>
          <h3 className=" fw-bolder">Simplify Invoicing with One-Time Setup</h3>
          <p className="fw-bold text-secondary h5 lh-base">
            Once you've set up your invoice template, you can easily reuse it
            for future transactions, eliminating the need to recreate invoices
            from scratch each time. This streamlined process ensures consistency
            and saves you valuable time, allowing you to focus on other aspects
            of your business.
          </p>
          <div className="text-secondary mt-5">
            <h5 className="mt-3">
              <StrikethroughOutlined className="h4 text-primary pe-3" />
              Input Your Product Details Once: Name, Price, Currency.
            </h5>
            <h5 className="mt-3">
              <CreditCardFilled className="h4 text-primary pe-3 " />
              Include Essential Contact Information: Address, Email, Phone
              Number
            </h5>
            <h5 className="mt-3">
              <MergeFilled className="h4 text-primary pe-3 " />
              Send Your Link Anytime: Easily Shareable and Reusable
            </h5>
          </div>
        </div>

        <div className="mt-0 w-100">
          <img
            src="https://www.invoicepages.com/_next/static/media/create_invoice_generator.edf00302.png"
            className="w-100 h-75 d-inline-block"
          />
        </div>
      </section>
      <div
        className="d-flex mt-5 mb-5 gene-div justify-content-between pb-5 d-inline-block "
        style={{ Height: "1000px" }}
      >
        <h4 className="pt-5 fw-bold h3 ">
          Ready to dive in? <br /> Start your free trial today.
        </h4>
        <Button
          shape="round"
          style={{ backgroundColor: "#2DAFAF" }}
          className="my-auto px-4 text-white px-5 fw-bolder"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default Generater;
