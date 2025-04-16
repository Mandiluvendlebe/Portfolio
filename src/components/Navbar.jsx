import React from 'react';

const Navbar = () => {
  return (
    <nav
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: '#ffe4ec',
        color: '#333',
        padding: '2rem',
        fontWeight: 'bold',
        position: 'relative',
      }}
    >
      <a href="#about" style={{ textDecoration: 'none', color: '#333', margin: '0 1rem' }}>
        About
      </a>
      <span>|</span>
      <a href="#projects" style={{ textDecoration: 'none', color: '#333', margin: '0 1rem' }}>
        Projects
      </a>
      <span>|</span>
      <a href="#skills" style={{ textDecoration: 'none', color: '#333', margin: '0 1rem' }}>
        Skills
      </a>
      <span>|</span>
      <a href="#contact" style={{ textDecoration: 'none', color: '#333', margin: '0 1rem' }}>
        Contact
      </a>

    </nav>
  );
};

export default Navbar;