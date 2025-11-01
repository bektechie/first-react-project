import React from 'react';

const Contact = () => {
  const containerStyle = {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "30px",
    borderRadius: "15px",
    backgroundColor: "#f2f8ff",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Arial', sans-serif",
    color: "#333",
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "28px",
    color: "#1a73e8",
    marginBottom: "25px",
  };

  const paragraphStyle = {
    fontSize: "16px",
    lineHeight: 1.6,
    margin: "10px 0",
  };

  const linkStyle = {
    color: "#1a73e8",
    textDecoration: "none",
    transition: "all 0.2s ease",
  };

  const socialListStyle = {
    listStyle: "none",
    padding: 0,
    display: "flex",
    gap: "15px",
    marginTop: "10px",
  };

  const socialLinkStyle = {
    display: "inline-block",
    padding: "5px 10px",
    backgroundColor: "#e8f0fe",
    borderRadius: "8px",
    fontWeight: "bold",
    transition: "all 0.2s ease",
    textDecoration: "none",
    color: "#1a73e8",
  };

  const socialLinkHover = (e) => {
    e.target.style.backgroundColor = "#1a73e8";
    e.target.style.color = "white";
    e.target.style.transform = "translateY(-2px)";
  };

  const socialLinkOut = (e) => {
    e.target.style.backgroundColor = "#e8f0fe";
    e.target.style.color = "#1a73e8";
    e.target.style.transform = "translateY(0)";
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Contact Us</h2>
      <p style={paragraphStyle}>
        Email: <a href="mailto:info@example.com" style={linkStyle}>info@example.com</a>
      </p>
      <p style={paragraphStyle}>
        Phone: <a href="tel:+1234567890" style={linkStyle}>+1 234 567 890</a>
      </p>
      <p style={paragraphStyle}>Address: 123 Main Street, City, Country</p>
      <p style={paragraphStyle}>Follow us on social media:</p>
      <ul style={socialListStyle}>
        <li>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
            onMouseEnter={socialLinkHover}
            onMouseLeave={socialLinkOut}
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
            onMouseEnter={socialLinkHover}
            onMouseLeave={socialLinkOut}
          >
            Twitter
          </a>
        </li>a
        <li>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
            onMouseEnter={socialLinkHover}
            onMouseLeave={socialLinkOut}
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;

