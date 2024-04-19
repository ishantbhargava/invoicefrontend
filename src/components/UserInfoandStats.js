import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { useAuth } from "./../context/Auth";
import { Card } from "antd";

import { useNavigate } from "react-router-dom";
function UserInfoandStats() {
  const [auth, setAuth] = useAuth("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate("");
  useEffect(() => {
    const user = auth?.user;
    if (user) {
      const { email } = auth?.user;
      setEmail(email);
    }
  }, [auth?.user]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <section className="stats h-100">
        <div
          style={{ fontSize: "28px", lineHeight: "28px" }}
          className="d-flex pt-3 pb-3 px-4 gap-2 text-align-center profile "
        >
          <span style={{ fontSize: "20px", lineHeight: "28px" }}>
            <UserOutlined />
          </span>

          <small
            style={{
              paddingTop: "4px",
              fontWeight: "650",
              fontSize: "13px",
              lineHeight: "18px",
            }}
          >
            {email}
          </small>
        </div>{" "}
        <small>
          {" "}
          <button
            type="primary rounded-lg"
            style={{
              backgroundColor: "#0891b2",
              borderRadius: "10px",
              width: "85%",
            }}
            className="text-white border-white p-2 px-3 pe-3 mt-3  mx-3   fw-bold "
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Buy More Invoices
          </button>
        </small>
        <Card
          className="mx-3 mt-4 stats-card"
          style={{ width: 258, backgroundColor: "rgb(248 250 252)" }}
        >
          <h4 className="fw-bold">Stats</h4>

          <div className="d-flex mt-3 justify-content-between  ">
            <b>Generaters </b>
            <b className="h5 fw-bold">0</b>
          </div>

          <div className="d-flex mt-3 justify-content-between">
            <b>Invoices</b>
            <b className="h5 fw-bold">0/3</b>
          </div>
        </Card>{" "}
        <button
          type="primary rounded-lg"
          style={{
            width: "88%",
            backgroundColor: "rgb(209,213,219)",
          }}
          className="text-secondary p-2 px-3 pe-3 btn-logout   mx-3  btn   "
          onClick={handleLogout}
        >
          Logout
        </button>
      </section>
    </div>
  );
}

export default UserInfoandStats;
