import React, { useState, useEffect } from "react";
import { collection, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: "", Description: "" });

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectsData);
    };

    fetchProjects();
  }, []);

  const handleAddProject = async () => {
    if (newProject.title && newProject.Description) {
      const docRef = await addDoc(collection(db, "projects"), newProject);
      setProjects([...projects, { id: docRef.id, ...newProject }]);
      setNewProject({ title: "", Description: "" });
    }
  };

  const handleUpdateProject = async (id, updatedProject) => {
    const projectRef = doc(db, "projects", id);
    await updateDoc(projectRef, updatedProject);
    setProjects(
      projects.map((project) =>
        project.id === id ? { ...project, ...updatedProject } : project
      )
    );
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Admin Dashboard</h2>
      <div style={{ marginBottom: "2rem" }}>
        <h3>Add New Project</h3>
        <input
          type="text"
          placeholder="Title"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
          style={{ marginRight: "1rem", padding: "0.5rem" }}
        />
        <input
          type="text"
          placeholder="Description"
          value={newProject.Description}
          onChange={(e) =>
            setNewProject({ ...newProject, Description: e.target.value })
          }
          style={{ marginRight: "1rem", padding: "0.5rem" }}
        />
        <button onClick={handleAddProject} style={{ padding: "0.5rem 1rem" }}>
          Add Project
        </button>
      </div>
      <div>
        <h3>Existing Projects</h3>
        {projects.map((project) => (
          <div key={project.id} style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              value={project.title}
              onChange={(e) =>
                handleUpdateProject(project.id, {
                  ...project,
                  title: e.target.value,
                })
              }
              style={{ marginRight: "1rem", padding: "0.5rem" }}
            />
            <input
              type="text"
              value={project.Description}
              onChange={(e) =>
                handleUpdateProject(project.id, {
                  ...project,
                  Description: e.target.value,
                })
              }
              style={{ marginRight: "1rem", padding: "0.5rem" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;