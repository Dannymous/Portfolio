import React from "react";
import { Link } from "react-router-dom";
import { FaUserGraduate } from "react-icons/fa";
import { FaDiceFour } from "react-icons/fa";
import { FaHandPointUp } from "react-icons/fa";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark text-white text-center">
        <a
          class="navbar-brand"
          href="/"
          style={{ color: "orange", fontFamily: "cursive", fontSize: "bold" }}
        >
          MY PORTFOLIO
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon bg-light"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link
                to="/"
                class="nav-link active"
                aria-current="page"
                href="#"
                style={{ color: "white", fontFamily: "monospace" }}
              >
                <FaUserGraduate /> Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/about"
                class="nav-link"
                href="#"
                style={{ color: "white", fontFamily: "sans-serif" }}
              >
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link
                style={{ color: "white", fontFamily: "sans-serif" }}
                to="/contact"
                class="nav-link"
                href="#"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
