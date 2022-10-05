import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
function Navbar() {
  return (
    <div className="nav-container">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/units">Units</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
