import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#ffe4ec", // Theme color for the footer
        color: "#333",
        padding: "1.5rem 0",
        textAlign: "center",
      }}
    >
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} Mandiluve Ndlebe. All rights reserved.
      </p>
      <p style={{ margin: 0 }}>
        Built with ❤️ by <a href="https://github.com/Mandiluvendlebe" style={{ color: "#007bff", textDecoration: "none" }}>Mandiluve Ndlebe</a>
      </p>
    </footer>
  );
};

export default Footer;