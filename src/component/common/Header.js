import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="header" class="fixed-top">
      <div className="container d-flex align-items-center">
        <Link to="/" className="logo">
          <img
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            alt="logo"
            class="img-fluid"
          />
        </Link>
        <nav id="navbar" className="navbar order-last order-lg-0 me-auto">
          <ul>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
            <li>
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;