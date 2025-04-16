import React from 'react';

const Skills = () => {
  const technicalSkills = [
    'JavaScript',
    'React',
    'HTML & CSS',
    'jQuery',
    'Bootstrap',
    'Node.js',
    'Express.js',
    'C#',
    'ASP.NET',
    'RESTful APIs',
    'SQL',
    'NoSQL (MongoDB)',
    'Database Design',
    'GitHub',
    'VS Code',
    '.NET',
    'Azure DevOps',
    'Visual Studio',
    'Python',
  ];

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Time Management',
    'Adaptability',
    'Critical Thinking',
    'Leadership',
    'Creativity',
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
        Here are some of the tools, technologies, and soft skills I bring to the table.
      </p>
      <div
        className="d-flex flex-wrap justify-content-center"
        style={{ gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}
      >
        {[...technicalSkills, ...softSkills].map((skill, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#fff', // White background for each card
              border: '1px solid #333',
              borderRadius: '8px',
              padding: '1rem',
              width: '250px', // Smaller card width
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h4 className="fw-bold">{skill}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;