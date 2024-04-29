

import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { Link } from "react-scroll";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="d-flex w-100 pt-5 nav-spc justify-content-between">
        <div className="d-flex align-items-center justify-content-around">
          <small></small>
          <img src={logo} alt="logo" />
          <Link
            to="feature"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="small text-decoration-none text-secondary special-2 px-4"
          >
            Features
          </Link>
          <Link
            to="pricing"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="small text-decoration-none text-secondary special-2 px-4"
          >
            Pricing
          </Link>
          <Link
            to="FAQs"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="small text-decoration-none text-secondary special-2 px-4"
          >
            FAQs
          </Link>
        </div>
        <div className="d-flex align-items-center gap-3 pe-4 justify-content-around">
          <button
            className="btn btn-light small"
            onClick={() => navigate("/login")}
          >
            <small>Sign in</small>
          </button>
          <small>
            <button
              type="primary rounded-lg"
              style={{ backgroundColor: "#0891b2", borderRadius: "9999px" }}
              className="text-white border-white p-2 px-3 pe-3 fw-bold"
              onClick={() => navigate("/signup")}
            >
              Get Started <span className="special-2">today</span>
            </button>
          </small>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
