import React from "react";

const About = () => {
  const images = [
    "/creative-thinker.png", // Replace with the actual path to your image
    "/commercial-initiator.png", // Replace with the actual path to your image
    "/influential-networker.png", // Replace with the actual path to your image
  ];

  return (
    <section
      id="about"
      className="text-center"
      style={{
        backgroundColor: "#fff", // White background for the section
        color: "#333",
        padding: "2rem",
      }}
    >
      <h2 className="fw-bold">About Me</h2>
      <p className="lead" style={{ marginBottom: "2rem" }}>
        I am a passionate developer with a knack for creating innovative solutions and delivering exceptional results.
      </p>
      <div
        className="d-flex flex-wrap justify-content-center"
        style={{ gap: "2rem", maxWidth: "1200px", margin: "0 auto" }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#ffe4ec", // Background color for each card
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1rem",
              width: "300px", // Card width
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <img
              src={image}
              alt={`About Image ${index + 1}`}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;