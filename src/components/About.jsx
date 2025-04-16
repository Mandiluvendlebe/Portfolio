import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundColor: '#fff', // Set background to white
        color: '#333', // Use theme color for text
        padding: '2rem 0.5rem', // Adjust padding for better spacing
        minHeight: '60vh', // Reduce height to remove excessive blank space
      }}
    >
      <div style={{ maxWidth: '800px' }}>
        <h2 className="fw-bold">About Me</h2>
        <p className="lead" style={{ marginTop: '1rem' }}>
          Hi, I'm Mandiluve Ndlebe, a passionate Junior Software Developer with experience in React, C#, SQL, and .NET. 
          I enjoy building user-friendly applications and solving complex problems through code. 
          My goal is to continuously learn and grow in the tech industry while contributing to impactful projects.
        </p>
      </div>
    </section>
  );
};

export default About;