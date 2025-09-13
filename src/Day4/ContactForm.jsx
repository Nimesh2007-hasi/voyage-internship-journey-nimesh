import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields are required!");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div style={{ padding: "20px", background: "#54f445ff", borderRadius: "10px" }}>
      <h2>Contact Me</h2>
      {submitted ? (
        <p>✅ Thanks {formData.name}, your message has been submitted!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input 
            type="text" name="name" placeholder="Your Name"
            value={formData.name} onChange={handleChange}
          /><br />
          <input 
            type="email" name="email" placeholder="Your Email"
            value={formData.email} onChange={handleChange}
          /><br />
          <textarea 
            name="message" placeholder="Your Message"
            value={formData.message} onChange={handleChange}
          /><br />
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
