import React from 'react';

const Hero = () => {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-center"
      style={{
        height: '100vh',
        backgroundColor: '#ffe4ec',
        color: '#333',
        padding: '2rem 0.5rem',
        position: 'relative',
      }}
    >
      {/* Black Line Below Navbar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '2px',
          backgroundColor: '#000',
        }}
      ></div>

      <div
        className="d-flex flex-column flex-md-row align-items-center justify-content-center"
        style={{ width: '100%', maxWidth: '1200px' }}
      >
        {/* Left Column */}
        <div style={{ flex: 1, padding: '1rem' }}>
          <h1 className="display-4 fw-bold">Hi, I'm Mandiluve Ndlebe</h1>
          <p className="lead">Junior Software Developer | React • C# • SQL • .NET</p>
          <a href="#product" className="btn btn-dark mt-3">
            View Offered Products
          </a>
        </div>

        {/* Right Column */}
        <div style={{ flex: 1, padding: '1rem' }}>
          <img
            src="GradPic.jpeg" // Replace with your image URL or import
            alt="Mandiluve Ndlebe"
            style={{
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '5px solid #333',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;