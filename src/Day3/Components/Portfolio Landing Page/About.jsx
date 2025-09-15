import React from 'react'
import ContactForm from '../../../Day4/ContactForm';

function About() {
  const sectionStyle = {
    backgroundColor: "#0b6801ff",  
    padding: "15px",
    borderRadius: "10px"
  };

  return (
    
    <section style={sectionStyle}>
      <h2 style={{ color: "#ffffff" }}>About Me</h2>
      <p style={{ color: "#dcdcdc" }}>
        I am a first year student in NIBM Univercity.I am very interest about learn different programming languages
      </p>
    </section>
  );
}

export default About;


