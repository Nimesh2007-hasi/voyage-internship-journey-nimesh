import React, { useState } from "react";

function Projects() {
   const sectionStyle = {
    backgroundColor: "#057818ff", 
    padding: "20px",
    borderRadius: "12px",
    color: "#f8fafc",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
  };
  const [projects, setProjects] = useState([
    { name: "Portfolio Website", completed: false },
    { name: "Todo App", completed: false }
  ]);
  const [newProject, setNewProject] = useState("");

  const addProject = () => {
    if (newProject.trim() === "") return;
    setProjects([...projects, { name: newProject, completed: false }]);
    setNewProject("");
  };

  const toggleComplete = (index) => {
    const updatedProjects = projects.map((p, i) =>
      i === index ? { ...p, completed: !p.completed } : p
    );
    setProjects(updatedProjects);
  };

  const deleteProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <section style={sectionStyle}>
    <div style={{ padding: "20px" }}>
      <h2>My Projects TODO List</h2>
      <input
        type="text"
        placeholder="Add new project"
        value={newProject}
        onChange={(e) => setNewProject(e.target.value)}
      />
      <button onClick={addProject}>Add</button>

      <ul style={{ marginTop: "15px" }}>
        {projects.map((p, i) => (
          <li key={i} style={{ textDecoration: p.completed ? "line-through" : "none" }}>
            {p.name}
            <button onClick={() => toggleComplete(i)} style={{ marginLeft: "10px" }}>
              {p.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteProject(i)} style={{ marginLeft: "10px", color: "red" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    </section>
  );
}

export default Projects;
