import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="d-flex  w-100 pt-5  nav-spc  justify-content-between">
        <div className="d-flex    align-items-center justify-content-around">
          <small></small>
          <img src={logo} alt="logo" />
          <button className="btn  ">
            <small className=" special-2 px-4">Features</small>
          </button>
          <small className="special-2 px-3">Pricing</small>
          <small className="special-2 px-3">FAQs</small>
        </div>
        {/* <div className="special  "></div> */}
        <div className="d-flex align-items-center gap-3  pe-4   justify-content-around">
          <button
            className="btn btn-light small "
            onClick={() => navigate("/login")}
          >
            <small>Sign in</small>
          </button>
          <small>
            {" "}
            <button
              type="primary rounded-lg"
              style={{ backgroundColor: "#0891b2", borderRadius: "9999px" }}
              className="text-white border-white p-2 px-3 pe-3 fw-bold "
              onClick={() => navigate("/signup")}
            >
              Get Started <span className="special-2"> today</span>
            </button>
          </small>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

/*<div>
    <Menu
      style={{ backgroundColor: "rgb(245, 245, 240)" }}
      className="pt-4 px-4  "
      mode="horizontal "
    >
      
      <Menu.Item key="features" className="menu-item ">
        <Button type="text">Features</Button>
      </Menu.Item>
      <Menu.Item key="pricing" className="menu-item ">
        <Button type="text">Pricing</Button>
      </Menu.Item>
      <Menu.Item key="faqs" className="menu-item ">
        <Button type="text">FAQs</Button>
      </Menu.Item>

      <Menu.Item style={{ marginLeft: "596px" }}>
        <Button type="text">Sign Up</Button>
        <Button type="text" disabled></Button>
      </Menu.Item>
      <Menu.Item>
        <Button
          type="primary rounded-lg"
          style={{ backgroundColor: "#2DAFAF" }}
        >
          Get Started today
        </Button>
      </Menu.Item>
    </Menu>
    </div> */
