import React from "react";

const PricingSection = () => {
  const packages = [
    {
      name: "Starter Package",
      subtitle: "One Page",
      price: ["R800 – R1,500 (Static)", "R1,800 – R3,000 (Dynamic)"],
      features: [
        "Static or Dynamic (Admin Portal)",
        "Responsive Design",
        "Contact Form",
      ],
      description: "Perfect for portfolios & landing pages.",
    },
    {
      name: "Business Package",
      subtitle: "Three Pages",
      price: ["R1,500 – R3,000 (Static)", "R3,000 – R5,000 (Dynamic)"],
      features: [
        "Static or Dynamic (Admin Portal)",
        "Admin Dashboard",
        "Content Control",
      ],
      description: "Best for service-based businesses.",
    },
    {
      name: "Pro-Package",
      subtitle: "Five+ Pages",
      price: ["R3,500 – R6,000 (Static)", "R5,000 – R10,000+ (Dynamic)"],
      features: [
        "Blog/Product Management",
        "User Authentication (optional)",
        "Responsive Design",
      ],
      description: "Ideal for growing brands & stores.",
    },
  ];

  const addOns = [
    {
      name: "Monthly Maintenance",
      price: "R300 – R800",
      description: "Keep your website updated and running smoothly.",
    },
    {
      name: "Hosting + Domain Bundle",
      price: "R100 – R250/month",
      description: "Includes hosting and domain registration.",
    },
    {
      name: "Logo Design & Branding",
      price: "From R500",
      description: "Get a professional logo and branding for your business.",
    },
  ];

  return (
    <section
        id="pricing"
      className="text-center"
      style={{
        backgroundColor: "#ffe4ec", // Theme color for the section background
        color: "#333",
        padding: "2rem",
      }}
    >
      <h2 className="text-4xl font-bold text-pink-600 mb-4">Website Packages</h2>
      <p className="text-lg text-gray-600 mb-10">
        Built for Small Businesses & Portfolios
      </p>

      {/* Packages Section */}
      <div
        className="d-flex flex-wrap justify-content-center"
        style={{ gap: "2rem", maxWidth: "1200px", margin: "0 auto" }}
      >
        {packages.map((pkg, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff", // White background for each card
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1.5rem",
              width: "300px", // Card width
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "center", // Centered content
            }}
          >
            <h3
            className="text-2xl font-semibold text-pink-500 mb-2"
            style={{ textDecoration: "underline" }} // Underline package name
            >
            {pkg.name}
            </h3>
            
            <p className="text-gray-500 mb-4">{pkg.subtitle}</p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              {pkg.price.map((price, i) => (
                <div
                    key={i}
                    style={{
                    backgroundColor: "#48488A", // Blue accent 1 darker 50%
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "0.5rem 1rem",
                    width: "80%", // Adjust width as needed
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#fff", // White text for contrast
                    }}
                >
                    {price}
                </div>
                ))}
            </div>
            <ul style={{ paddingLeft: "1rem", marginBottom: "1rem", textAlign: "left" }}>
              {pkg.features.map((feature, i) => (
                <li
                  key={i}
                  style={{
                    marginBottom: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: "green",
                      marginRight: "0.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    ✅
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-400">{pkg.description}</p>
          </div>
        ))}
      </div>

      {/* Optional Add-ons Section */}
      <div
        className="d-flex flex-wrap justify-content-center mt-5"
        style={{ gap: "2rem", maxWidth: "1200px", margin: "0 auto" }}
      >
        {addOns.map((addOn, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff", // White background for each card
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1.5rem",
              width: "300px", // Card width
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "left",
            }}
          >
            <h4
            className="text-xl font-semibold text-pink-500 mb-2"
            style={{ textDecoration: "underline" }} // Underline add-on name
            >
            {addOn.name}
            </h4>
            <h5
              style={{
                textAlign: "center",
                color: "#007bff",
                margin: "1rem 0",
              }}
            >
              {addOn.price}
            </h5>
            <p className="text-sm text-gray-400">{addOn.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;