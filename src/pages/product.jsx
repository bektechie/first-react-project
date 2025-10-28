import React from "react";

const Product = () => {
  const container = {
    maxWidth: "800px",
    margin: "50px auto",
    padding: "30px",
    borderRadius: "15px",
    backgroundColor: "#e3f2fd",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    lineHeight: 1.6,
  };

  const heading = { textAlign: "center", fontSize: "32px", color: "#1976d2", marginBottom: "25px" };
  const paragraph = { margin: "15px 0", fontSize: "16px" };
  
  const productGrid = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px",
  };

  const cardBase = {
    flex: "1 1 200px",
    padding: "20px",
    backgroundColor: "#bbdefb",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const cardHover = (e) => {
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
  };

  const cardLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
  };

  const products = [
    { name: "Product A", description: "High-quality product A", price: "$20" },
    { name: "Product B", description: "Reliable product B", price: "$35" },
    { name: "Product C", description: "Premium product C", price: "$50" },
    { name: "Product D", description: "Affordable product D", price: "$15" },
  ];

  return (
    <div style={container}>
      <h2 style={heading}>Our Products</h2>
      <p style={paragraph}>
        Explore our range of products, carefully crafted to meet your needs.
      </p>
      <div style={productGrid}>
        {products.map((product, idx) => (
          <div
            key={idx}
            style={cardBase}
            onMouseEnter={cardHover}
            onMouseLeave={cardLeave}
          >
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p style={{ fontWeight: "bold" }}>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
