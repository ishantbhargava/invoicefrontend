import React from "react";
import { CheckOutlined } from "@ant-design/icons";
import { Button } from "antd";
function PricingPlans() {
  return (
    <div className="mt-5 pb-5">
      <div className="pt-5 text-center pb-5 ">
        <h6 className="text-primary  ">Simple and Flexible Pricing Plan</h6>
        <h1 className="fw-bolder">Pay Only for What You Use</h1>
        <h6 className="pt-3 lh-base ">
          Our pricing is based on your actual usage, not monthly subscriptions.
          <br />
          You're charged when your customers generate invoices - no hidden fees.
          <br />
          This pay-as-you-go approach ensures transparency and
          cost-effectiveness.
        </h6>
      </div>
      <div className="card-group mx-5 mt-5   ">
        <div className="card  rounded-left pb-3  pt-3 mt-5 ">
          <div className="card-body">
            <h5 className="card-title pt-3 px-2 fw-bolder ">Free Trail</h5>
            <p className="card-text pt-3">
              Experience our service with a free trial plan. Get a quota of 10
              free invoices without any charges.
            </p>
            <p className="card-text  ">
              <b className="h3 fw-bold ">$0</b> /3 invoices
            </p>
            <h6 className="mt-5 ">
              <CheckOutlined className="text-primary" /> 1 invoice generater
            </h6>
            <h6 className="mt-3">
              <CheckOutlined className="text-primary" /> 3 invoice generater
            </h6>
            <h6 className="mt-3">
              <CheckOutlined className="text-primary" /> Save records of all
              generated invoices
            </h6>
            <h6 className="mt-3">
              <CheckOutlined className="text-primary" /> Support multiple
              currencies
            </h6>
            <Button
              className="text-primary border border-primary mx-auto fw-bolder mt-4"
              block
            >
              Start Today
            </Button>
          </div>
        </div>
        <div className="card rounded-top pb-3  pt-3  ">
          <div className="card-body  pb-3  pt-5  ">
            <div className="d-flex  justify-content-between ">
              {" "}
              <h5
                className="card-title  "
                style={{
                  color: "rgb(5, 102, 117)",
                }}
              >
                Starter Plan
              </h5>
              <Button
                style={{
                  backgroundColor: "rgb(191, 238, 245)",
                  color: "rgb(5, 102, 117)",
                }}
                type="primary"
                shape="round"
                className="fw-bolder "
              >
                Most Popular
              </Button>
            </div>
            <p className="card-text pt-4 ">
              Ideal for smaller businesses or startups with limited invoicing
              needs.
            </p>
            <p className="card-text  ">
              <b className="h3 fw-bold ">
                $10 <small className="text-muted h4  ">$20</small>{" "}
              </b>{" "}
              /20 invoices
            </p>
            <h6 className="mt-5">
              <CheckOutlined className="text-primary" /> Up to 3 invoice
              generators
            </h6>
            <h6 className="mt-3">
              <CheckOutlined className="text-primary" /> Up to 20 invoice
              generations
            </h6>
            <h6 className="mt-3">
              <CheckOutlined className="text-primary" />
              {"  "}Save records of all generated invoices
            </h6>
            <h6 className="mt-3">
              <CheckOutlined className="text-primary" />
              Support multiple currencies
            </h6>
            <Button
              style={{ backgroundColor: "rgb(5, 102, 117)" }}
              className="fw-bolder mt-5 "
              type="primary"
              block
            >
              Start today
            </Button>
          </div>
        </div>
        <div className="card  rounded-right pb-3  pt-3 mt-5 ">
          <div className="card-body">
            <h5 className="card-title pt-3 px-2 fw-bolder ">Pro Plan</h5>
            <p className="card-text pt-3">
              Perfect for businesses with larger customer bases and higher
              invoicing demands.
            </p>
            <p className="card-text  ">
              <b className="h3 fw-bold ">
                $30 <small className="text-muted h4  ">$60</small>{" "}
              </b>{" "}
              /100 invoices
            </p>
            <h6 className="mt-5">
              <CheckOutlined className="text-primary" /> Up to 10 invoice
              generators
            </h6>

            <h6 className="mt-3">
              <CheckOutlined className="text-primary" /> Unlock 100 invoice
              generations
            </h6>
            <h6 className="mt-3">
              <CheckOutlined className="text-primary" />
              {"  "}Complete Record-Keeping
            </h6>
            <h6 className="mt-3">
              <CheckOutlined className="text-primary" /> Support multiple
              currencies
            </h6>
            <Button
              className="text-primary border border-primary mx-auto fw-bolder mt-4"
              block
            >
              Start Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPlans;
