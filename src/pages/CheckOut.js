import React from "react";
import { CheckOutlined } from "@ant-design/icons";
import { Radio } from "antd";
import { Button } from "antd";
function checkOut() {
  return (
    <div>
      <div className="d-flex justify-content-center checkout bg-white mx-auto  flex-column pb-5  ">
        <div style={{ paddingTop: "90px" }} className=" text-center ">
          <small className="fw-bold text-primary  ">Pricing</small>
          <h1 className="fw-bolder px-5 ">
            The right price for you, whoever you are
          </h1>
          <div className="mt-3 text-secondary  lh-lg">
            Our pricing is based on your actual usage, not monthly
            subscriptions. You're
            <br />
            charged when your customers generate invoices - no hidden fees. This
            pay-as-
            <br />
            you-go approach ensures transparency and cost-effectiveness.
          </div>
        </div>
        <div className="card-deck  d-flex flex-576  mt-5  checkout-card  ">
          <div className="card w-100">
            <div className="card-body pt-5 px-4  ">
              <h6 className=" small fw-bold text-primary">Starter plan</h6>
              <p className="card-text   ">
                <b className="h1 fw-bold ">
                  $10 <small className="text-muted h4 fw-bold ">$20</small>{" "}
                </b>{" "}
                <b className="text-secondary">/20 invoices</b>
              </p>
              <p className="card-text small text-secondary">
                Ideal for smaller businesses or startups with limited invoicing
                needs.
              </p>
              <div className="d-flex flex-column w-100 text-secondary">
                <small className="mt-3 d-flex gap-3 ">
                  <span>
                    <CheckOutlined className="text-primary  " />
                  </span>{" "}
                  <span> Up to 3 invoice generators</span>
                </small>
                <small className="mt-3 d-flex gap-3  ">
                  <CheckOutlined className="text-primary  " /> Up to 20 invoice
                  generations
                </small>
                <small className="mt-3 d-flex gap-3 ">
                  <CheckOutlined className="text-primary  " />
                  {"  "}Save records of all generated invoices
                </small>
                <small className="mt-3 d-flex gap-3 ">
                  <CheckOutlined className="text-primary  " />
                  Support multiple currencies
                </small>
              </div>
              <Radio.Button
                className="mt-4 mx-2 fw-bold small text-primary mb-3 rounded border  border-primary"
                value="default"
              >
                Buy Plan
              </Radio.Button>
            </div>
          </div>

          <div
            className="card w-100  "
            style={{ backgroundColor: "rgb(17,24,39)" }}
          >
            <div className="card-body pt-5 px-4  ">
              <h6 className=" small fw-bold text-primary">Pro Plan</h6>
              <p className="card-text text-white  ">
                <b className="h1 fw-bold text-white">
                  $10{" "}
                  <small
                    className=" h4 fw-bold  "
                    style={{ color: "rgb(209,213,219)" }}
                  >
                    $20
                  </small>{" "}
                </b>{" "}
                <b
                  className="h6 fw-bold "
                  style={{ color: "rgb(209,213,219)" }}
                >
                  /100 invoices
                </b>
              </p>
              <p
                className="card-text small "
                style={{ color: "rgb(209,213,219)" }}
              >
                Perfect for businesses with larger customer bases and higher
                invoicing demands.
              </p>
              <div
                className="d-flex flex-column w-100 "
                style={{ color: "rgb(209,213,219)" }}
              >
                <small className="mt-3 d-flex gap-3 ">
                  <span>
                    <CheckOutlined className="text-primary  " />
                  </span>{" "}
                  <span> Up to 3 invoice generators</span>
                </small>
                <small className="mt-3 d-flex gap-3  ">
                  <CheckOutlined className="text-primary  " /> Up to 20 invoice
                  generations
                </small>
                <small className="mt-3 d-flex gap-3 ">
                  <CheckOutlined className="text-primary  " />
                  {"  "}Save records of all generated invoices
                </small>
                <small className="mt-3 d-flex gap-3 ">
                  <CheckOutlined className="text-primary  " />
                  Support multiple currencies
                </small>
              </div>
              <Button type="primary" className="mt-4 mx-2 fw-bold small  mb-3 ">
                Buy Plan{" "}
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default checkOut;
