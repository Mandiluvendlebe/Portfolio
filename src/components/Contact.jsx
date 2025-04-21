import React from 'react';
import { FaLinkedin, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="text-center"
      style={{
        backgroundColor: '#fff', // White background for the section
        color: '#333',
        padding: '2rem',
      }}
    >
      <h2 className="fw-bold">Contact Me</h2>
      <p className="lead" style={{ marginBottom: '2rem' }}>
        Feel free to reach out to me through any of the following methods.
      </p>
      <div
        className="d-flex flex-wrap justify-content-center"
        style={{
          gap: '1.5rem',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        {/* Location */}
        <div
          style={{
            backgroundColor: '#ffe4ec', // Theme color for the card background
            border: '1px solid #333',
            borderRadius: '8px',
            padding: '1rem',
            flex: '1 1 calc(50% - 1rem)', // Two per row
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <FaMapMarkerAlt style={{ color: '#333', fontSize: '1.5rem' }} />
          <p style={{ margin: 0 }}>Johannesburg, Gauteng, South Africa</p>
        </div>

        {/* LinkedIn */}
        <div
          style={{
            backgroundColor: '#ffe4ec', // Theme color for the card background
            border: '1px solid #333',
            borderRadius: '8px',
            padding: '1rem',
            flex: '1 1 calc(50% - 1rem)', // Two per row
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <FaLinkedin style={{ color: '#0077b5', fontSize: '1.5rem' }} />
          <a
            href="https://www.linkedin.com/in/mandiluve-ndlebe-b60622265/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#333', textDecoration: 'none' }}
          >
            LinkedIn Profile
          </a>
        </div>

        {/* Mobile */}
        <div
          style={{
            backgroundColor: '#ffe4ec', // Theme color for the card background
            border: '1px solid #333',
            borderRadius: '8px',
            padding: '1rem',
            flex: '1 1 calc(50% - 1rem)', // Two per row
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <FaPhoneAlt style={{ color: '#333', fontSize: '1.5rem' }} />
          <a
            href="tel:+27609282606"
            style={{ color: '#333', textDecoration: 'none' }}
          >
            +27 609 282 606
          </a>
        </div>

        {/* WhatsApp */}
        <div
          style={{
            backgroundColor: '#ffe4ec', // Theme color for the card background
            border: '1px solid #333',
            borderRadius: '8px',
            padding: '1rem',
            flex: '1 1 calc(50% - 1rem)', // Two per row
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <FaWhatsapp style={{ color: '#25d366', fontSize: '1.5rem' }} />
          <a
            href="https://wa.me/27609282606"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#333', textDecoration: 'none' }}
          >
            +27 609 282 606
          </a>
        </div>

        {/* Email */}
        <div
          style={{
            backgroundColor: '#ffe4ec', // Theme color for the card background
            border: '1px solid #333',
            borderRadius: '8px',
            padding: '1rem',
            flex: '1 1 calc(50% - 1rem)', // Two per row
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <FaEnvelope style={{ color: '#333', fontSize: '1.5rem' }} />
          <a
            href="mailto:mandiluve.ndlebe@gmail.com"
            style={{ color: '#333', textDecoration: 'none' }}
          >
            mandiluve.ndlebe@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;