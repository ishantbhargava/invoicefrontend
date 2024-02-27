import React from "react";
import { logo } from "../images/logo.png";
function Navbar() {
  return (
    <div>
      <nav className="d-flex pt-5 px-2 w-100 justify-content-between">
        <div className="d-flex  gap-5  justify-content-around">
          <small>
            <img alt="logo" />
          </small>
          <small className=" special-2">Features</small>
          <small className="special-2">Pricing</small>
          <small className="special-2">FAQs</small>
        </div>
        {/* <div className="special  "></div> */}
        <div className="d-flex align-items-center gap-3    justify-content-around">
          <small>sign in</small>
          <small>
            {" "}
            <button
              type="primary rounded-lg"
              style={{ backgroundColor: "#2DAFAF" }}
              className="text-white border-white pt-1 pb-1 fw-bold rounded"
            >
              Get Started today
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
