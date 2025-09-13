import React, { useState } from "react";

function Skills() {
    const sectionStyle = {
    backgroundColor: "#04a11eff", 
    padding: "20px",
    borderRadius: "12px",
    color: "#f8fafc",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
  };
  const [showSkills, setShowSkills] = useState(false);

  return (
    <section style={sectionStyle}>
    <div style={{ padding: "20px" }}>
      <h2>My Skills</h2>
      <button onClick={() => setShowSkills(!showSkills)}>
        {showSkills ? "Hide Skills" : "Show Skills"}
      </button>
      {showSkills && (
        
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>MySQL</li>
        </ul>
       
      )}
    </div>
     </section>
  );
}

export default Skills;
