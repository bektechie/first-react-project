import React from "react";

const Home = () => {
  const container = {
    maxWidth: "800px",
    margin: "50px auto",
    padding: "30px",
    borderRadius: "15px",
    backgroundColor: "#fff3e0",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    lineHeight: 1.6,
    textAlign: "center",
  };

  const heading = { fontSize: "36px", color: "#ff9800", marginBottom: "20px" };
  const paragraph = { fontSize: "18px", marginBottom: "30px" };
  
  const button = {
    padding: "10px 25px",
    margin: "10px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#ff9800",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const buttonHover = (e) => {
    e.currentTarget.style.backgroundColor = "#e68900";
  };

  const buttonLeave = (e) => {
    e.currentTarget.style.backgroundColor = "#ff9800";
  };

  return (
    <div style={container}>
      <h1 style={heading}>Welcome to Our Company!</h1>
      <p style={paragraph}>
        Discover our amazing products and services. We strive to deliver the best quality and support to our customers.
      </p>
      <div>
        <button
          style={button}
          onMouseEnter={buttonHover}
          onMouseLeave={buttonLeave}
        >
          Explore Products
        </button>
        <button
          style={button}
          onMouseEnter={buttonHover}
          onMouseLeave={buttonLeave}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;

