import React from "react";

const About = () => {
  const container = {
    maxWidth: "700px",
    margin: "50px auto",
    padding: "30px",
    borderRadius: "15px",
    backgroundColor: "#fff8e1",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    lineHeight: 1.6,
  };

  const heading = { textAlign: "center", fontSize: "32px", color: "#ff9800", marginBottom: "25px" };
  const paragraph = { margin: "15px 0", fontSize: "16px" };
  const highlight = { color: "#ff9800", fontWeight: "bold" };
  const team = { display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" };
  const memberBase = {
    flex: "1 1 150px",
    padding: "15px",
    backgroundColor: "#fff3e0",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const members = [
    { name: "Jane Doe", role: "CEO & Founder" },
    { name: "John Smith", role: "Lead Developer" },
    { name: "Mary Johnson", role: "Marketing Head" },
  ];

  return (
    <div style={container}>
      <h2 style={heading}>About Us</h2>
      <p style={paragraph}>
        Welcome to <span style={highlight}>Our Company</span>! We are dedicated to providing
        the best products and services for our customers. Our mission is to combine
        innovation, quality, and sustainability to make a positive impact in the world.
      </p>
      <p style={paragraph}>
        Our team of experts works tirelessly to ensure every experience is outstanding.
        We value <span style={highlight}>integrity</span>, <span style={highlight}>collaboration</span>, and <span style={highlight}>excellence</span> in everything we do.
      </p>

      <h3 style={{ marginTop: "30px", color: "#ff9800" }}>Meet Our Team</h3>
      <div style={team}>
        {members.map((member, idx) => (
          <div
            key={idx}
            style={memberBase}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            <p><strong>{member.name}</strong></p>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
