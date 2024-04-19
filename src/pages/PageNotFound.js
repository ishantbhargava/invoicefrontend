import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import { DoubleLeftOutlined } from "@ant-design/icons";
const PageNotFound = () => {
  return (
    <Layout>
      <div className="pnf text-center mt-5  ">
        <h1 className="pnf-title ">404</h1>
        <h2 className="pnf-heading">Oops | page not found</h2>
        <Link to="/" className="pnf-btn">
          <button type="button" class="btn  btn-back  mx-4 mt-5 h6       ">
            <DoubleLeftOutlined className="align-baseline" /> Back
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
