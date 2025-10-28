import React from "react";

const Price = () => {
  const container = {
    maxWidth: "700px",
    margin: "50px auto",
    padding: "30px",
    borderRadius: "15px",
    backgroundColor: "#e8f5e9",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    lineHeight: 1.6,
  };

  const heading = { textAlign: "center", fontSize: "32px", color: "#43a047", marginBottom: "25px" };
  const paragraph = { margin: "15px 0", fontSize: "16px" };
  const planStyle = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px",
  };
  const cardBase = {
    flex: "1 1 150px",
    padding: "20px",
    backgroundColor: "#a5d6a7",
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

  const plans = [
    { name: "Basic", price: "$10/month", features: ["Feature 1", "Feature 2"] },
    { name: "Standard", price: "$25/month", features: ["Feature 1", "Feature 2", "Feature 3"] },
    { name: "Premium", price: "$50/month", features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"] },
  ];

  return (
    <div style={container}>
      <h2 style={heading}>Our Pricing Plans</h2>
      <p style={paragraph}>
        Choose the plan that suits your needs. All plans come with great support and features.
      </p>
      <div style={planStyle}>
        {plans.map((plan, idx) => (
          <div
            key={idx}
            style={cardBase}
            onMouseEnter={cardHover}
            onMouseLeave={cardLeave}
          >
            <h3>{plan.name}</h3>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>{plan.price}</p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {plan.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
