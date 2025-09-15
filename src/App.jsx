import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import About from "./Day3/Components/Portfolio Landing Page/About"
import Contact from "./Day3/Components/Portfolio Landing Page/Contact"
import Header from "./Day3/Components/Portfolio Landing Page/Header"
import Projects from "./Day3/Components/Portfolio Landing Page/Projects"
import Skills from "./Day3/Components/Portfolio Landing Page/Skills"
import ContactForm from "./Day4/ContactForm"
import Home from "./Day5/Home";

function App() {
    const navStyle = {
    display: "flex",
    gap: "15px",
    padding: "10px",
    background: "#282c34",
  };

  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#61dafb" : "white",
    textDecoration: "none",
    fontWeight: isActive ? "bold" : "normal"
  });
  return(
   <Router>
      <nav style={navStyle}>
        <NavLink to="/" style={linkStyle}>Home</NavLink>
        <NavLink to="/about" style={linkStyle}>About</NavLink>
        <NavLink to="/projects" style={linkStyle}>Projects</NavLink>
        <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App
