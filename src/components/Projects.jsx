import React, { useState } from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'This is a description of project one. It showcases my skills in React and Node.js.',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'This is a description of project two. It highlights my experience with SQL and .NET.',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'This is a description of project three. It demonstrates my expertise in RESTful APIs.',
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'This is a description of project four. It focuses on my work with Python and MongoDB.',
    },
  ];

  const [activeProject, setActiveProject] = useState(null);

  const toggleDescription = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section
      className="text-center"
      style={{
        backgroundColor:'#fff',
        color: '#333',
        padding: '2rem',
      }}
    >
      <h2 className="fw-bold">My Projects</h2>
      <p className="lead" style={{ marginBottom: '2rem' }}>
        Click on a project to learn more about it.
      </p>
      <div
        className="d-flex flex-wrap justify-content-center"
        style={{ gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              backgroundColor: '#fff',
              border: '1px solid #333',
              borderRadius: '8px',
              padding: '1rem',
              width: '250px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h4 className="fw-bold">{project.title}</h4>
            {activeProject === project.id && (
              <p style={{ marginTop: '1rem' }}>{project.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;