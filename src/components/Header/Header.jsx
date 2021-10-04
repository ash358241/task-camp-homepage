import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav>
        <div class="nav-center">
          <div class="nav-logo">
            <h5>
              <span className="text-white bg-black p-2 rounded-circle">v</span>{" "}
              Camp
            </h5>
          </div>
          <button class="bar-btn">
            <i class="fas fa-bars"></i>
          </button>
          <ul class="nav-links">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Case</a>
            </li>
            <li>
              <a href="#">Pages </a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div class="nav-links-1">
          <i class="far fa-user mb-3"></i>
            <p class="btn">login</p>
            <i class="fas fa-bars ms-3 mb-3"></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
