import React from 'react'

function Header() {
  
   
 const headerStyle = {
    backgroundColor: "#0b530aff",
    color: "white",
    padding: "20px",
    textAlign: "center",
    borderRadius: "10px"
  };

  return (
    
    <header style={headerStyle}>
      <h1>Welcome to Nimesh’s Portfolio</h1>
    </header>
  );    
  
  
}

export default Header