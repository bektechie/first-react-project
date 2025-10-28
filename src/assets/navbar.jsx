import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const linkStyle = {
    cursor: "pointer",
    textDecoration: "none",
    color: "#333",
    padding: "5px 10px",
  };

  const linkHover = (e) => {
    e.currentTarget.style.color = "#1a73e8";
  };

  const linkLeave = (e) => {
    e.currentTarget.style.color = "#333";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "20px",
        backgroundColor: "#f2f2f2",
      }}
    >
      <Link to="/home" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>
        Home
      </Link>
      <Link to="/product" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>
        Product
      </Link>
      <Link to="/price" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>
        Price
      </Link>
      <Link to="/contact" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>
        Contact
      </Link>
      <Link to="/about" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkLeave}>
        About
      </Link>
    </div>
  );
};

export default Navbar;
