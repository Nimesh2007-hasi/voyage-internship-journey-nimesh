import React from 'react';

function Contact() {
  const sectionStyle = {
    backgroundColor: "#010f0bff", 
    padding: "20px",
    borderRadius: "12px",
    color: "#ecfdf5",
    boxShadow: "0 4px 8px rgba(0,0,0,0.25)"
  };

  return (
    <section style={sectionStyle}>
      <h2>Contact</h2>
      <p>Email: <a href="mailto:nimeshhasith2007@gmail.com" style={{color:"#d1fae5"}}>nimeshhasith2007@gmail.com</a></p>
      <p>GitHub: <a href="https://github.com/Nimesh2007-hasi" target="_blank" rel="noreferrer" style={{color:"#a7f3d0"}}>Nimesh2007-hasi</a></p>
    </section>
  );
}

export default Contact;
