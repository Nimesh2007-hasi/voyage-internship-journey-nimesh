import React from 'react';

function Skills() {
  const sectionStyle = {
    backgroundColor: "#049b1dff", 
    padding: "20px",
    borderRadius: "12px",
    color: "#f8fafc",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
  };

  return (
    <section style={sectionStyle}>
      <h2>Skills</h2>
      <ul>
        <li>React</li>
        <li>JavaScript (ES6+)</li>
        <li>Node.js</li>
        <li>SQL</li>
      </ul>
    </section>
  );
}

export default Skills;
