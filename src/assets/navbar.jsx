import React from "react";
import { Link } from "react-router-dom";

const links = ["Home", "Product", "Price", "Contact", "About"];

const Navbar = () => {
  const linkStyle = { cursor: "pointer", textDecoration: "none", color: "#333", padding: "5px 10px", borderRadius: "5px", transition: "all 0.3s", fontWeight: 500 };
  const buttonStyle = { padding: "8px 20px", borderRadius: "25px", border: "1px solid #1a73e8", backgroundColor: "white", color: "#1a73e8", fontWeight: 500, cursor: "pointer", transition: "all 0.3s", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" };

  const hover = (e, bg = "#1a73e8", color = "white", shadow = "0 4px 12px rgba(0,0,0,0.2)") => {
    e.currentTarget.style.backgroundColor = bg;
    e.currentTarget.style.color = color;
    if (shadow) e.currentTarget.style.boxShadow = shadow;
  };
  const leave = (e, bg = "transparent", color = "#333", shadow = "0 2px 5px rgba(0,0,0,0.1)") => {
    e.currentTarget.style.backgroundColor = bg;
    e.currentTarget.style.color = color;
    if (shadow) e.currentTarget.style.boxShadow = shadow;
  };

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 50px", backgroundColor: "#f9f9f9", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <div style={{ display: "flex", gap: "15px" }}>
        {links.map((l) => (
          <Link key={l.toLowerCase()} to={`/${l.toLowerCase()}`} style={linkStyle} onMouseEnter={(e) => hover(e)} onMouseLeave={(e) => leave(e)}>{l}</Link>
        ))}
      </div>
      <div style={{ display: "flex", gap: "15px", alignItems: "center", padding: "10px 20px", borderRadius: "12px", backgroundColor: "#fff", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        {["Login / Sign-up", "Languages"].map((b) => (
          <div key={b} style={buttonStyle} onMouseEnter={(e) => hover(e)} onMouseLeave={(e) => leave(e, "white", "#1a73e8")}>{b}</div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
