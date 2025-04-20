import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Adjust the path if needed

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);

  // Fetch projects from Firestore
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projectsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects: ", error);
      }
    };
    console.log("Firestore DB Instance:", db);
    fetchProjects();
  }, []);

  const toggleDescription = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section
      className="text-center"
      style={{
        backgroundColor: '#fff', // Set background color to white
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
              backgroundColor: '#fff', // White background for each card
              border: '1px solid #333',
              borderRadius: '8px',
              padding: '1rem',
              width: '250px', // Smaller card width
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
            }}
            onClick={() => toggleDescription(project.id)}
          >
            <h4 className="fw-bold">{project.title}</h4>
            {activeProject === project.id && (
              <p style={{ marginTop: '1rem' }}>{project.Description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;