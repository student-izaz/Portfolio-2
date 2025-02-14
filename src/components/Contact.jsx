import React, { useState, useContext } from "react";
import "./Contact.css";
import Footer from "./Footer";
import { ThemeContext } from "../App";

function Contact() {
  const Theme = useContext(ThemeContext);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    messg: "",
  })

  const handleChange = (e) => {
    e.preventDefault();

    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactData)
  }
  
  return (
    <div className={`contact-section ${Theme && "dark-theme-contact"}`}>
      <div className="contact-me flex-col">
        <div className="heading">
          <h1>Contact</h1>
        </div>
        <div className="contact-area">
          <div className="form flex-col">
            <form onSubmit={handleSubmit} className="flex-col">
              <div className="inputfield flex-col">
                <label>Name *</label>
                <input type="text" name="name" onChange={handleChange}/>
              </div>
              <div className="inputfield flex-col">
                <label>Email *</label>
                <input type="email" name="email" onChange={handleChange}/>
              </div>
              <div className="inputfield flex-col">
                <label>Message *</label>
                <textarea rows={2} cols={20} name="messg" onChange={handleChange}/>
              </div>
              <div className="submit-btn">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
