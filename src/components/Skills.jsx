import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'JavaScript & React', level: 90 },
    { name: 'HTML, CSS & Bootstrap', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'C# & ASP.NET', level: 75 },
    { name: 'SQL', level: 70 },
    { name: 'RESTful APIs', level: 85 },
    { name: 'GitHub', level: 90 },
    { name: 'Azure DevOps', level: 65 },
    { name: 'Visual Studio & VS Code', level: 95 },
  ];

  return (
    <section
      className="text-center"
      style={{
        backgroundColor: '#ffe4ec', // Keep the original background color
        color: '#333',
        padding: '2rem',
      }}
    >
      <h2 className="fw-bold">My Skills</h2>
      <p className="lead" style={{ marginBottom: '2rem' }}>
        Here are some of the tools and technologies I excel at, along with my proficiency levels.
      </p>
      <div
        className="d-flex flex-wrap justify-content-center"
        style={{ gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#fff', // White background for each card
              border: '1px solid #333',
              borderRadius: '8px',
              padding: '1rem',
              width: '250px', // Smaller card width
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              textAlign: 'left',
            }}
          >
            <h4 className="fw-bold">{skill.name}</h4>
            <div
              style={{
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                overflow: 'hidden',
                marginTop: '0.5rem',
              }}
            >
              <div
                style={{
                  width: `${skill.level}%`,
                  backgroundColor: '#28a745', // Green color for proficiency
                  height: '10px',
                }}
              ></div>
            </div>
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#555' }}>
              Proficiency: {skill.level}%
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;