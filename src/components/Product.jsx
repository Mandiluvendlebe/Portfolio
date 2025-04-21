import React from "react";

const Product = () => {
  const products = [
    {
      id: 1,
      title: "Responsive Web Design",
      description:
        "Create stunning, responsive websites that look great on any device.",
      image: "/responsive-web-design", // Replace with the actual path to your image
    },
    {
      id: 2,
      title: "Logo Design",
      description:
        "Get a professional logo that represents your brand identity.",
      image: "/logo-design.jpg", // Replace with the actual path to your image
    },
    {
      id: 3,
      title: "Domain & Hosting",
      description:
        "Reliable domain registration and hosting services for your website.",
      image: "/domain-hosting-services.png", // Replace with the actual path to your image
    },
  ];

  return (
    <section
      id ="product"
      className="text-center"
      style={{
        backgroundColor: "#fff", // White background for the section
        color: "#333",
        padding: "2rem",
      }}
    >
      <h2 className="fw-bold">Products</h2>
      <p className="lead" style={{ marginBottom: "2rem" }}>
        Explore my range of services designed to help your business grow.
      </p>
      <div
        className="d-flex flex-wrap justify-content-center"
        style={{ gap: "2rem", maxWidth: "1200px", margin: "0 auto" }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "#ffe4ec", // White background for each card
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1rem",
              width: "300px", // Card width
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            />
            <h4 className="fw-bold">{product.title}</h4>
            <p style={{ marginTop: "1rem" }}>{product.description}</p>
          </div>
        ))}
      </div>
      <p className="lead" style={{ marginBottom: "2rem" }}>
        <br />
        Check details below to get in <span style={{ fontStyle: "italic", fontWeight: "bold" }}>TOUCH</span>!.
      </p>
    </section>
  );
};

export default Product;