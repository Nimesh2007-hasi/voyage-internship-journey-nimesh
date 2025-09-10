import React from 'react';

function Projects() {
  const sectionStyle = {
    backgroundColor: "#067b44ff", 
    padding: "20px",
    borderRadius: "12px",
    color: "#fff7ed",
    boxShadow: "0 4px 8px rgba(0,0,0,0.3)"
  };

  return (
    <section style={sectionStyle}>
      <h2>Projects</h2>
      <ul>
        <li>Portfolio Website</li>
        <li>Hotel Managment system</li>
       
      </ul>
    </section>
  );
}

export default Projects;