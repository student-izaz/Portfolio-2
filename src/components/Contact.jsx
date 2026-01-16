import React, { useState, useContext } from "react";
import "./Contact.css";
import Footer from "./Footer";
import { ThemeContext } from "../App";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Contact() {
  const Theme = useContext(ThemeContext);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    messg: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();

    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/send-email",
        contactData
      );
      if (res.data.success) {
        setContactData({ name: "", email: "", messg: "" });

        toast.success("Email sent successfully!");
      }
    } catch (error) {
      toast.error("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
                <input
                  type="text"
                  name="name"
                  value={contactData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="inputfield flex-col">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={contactData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="inputfield flex-col">
                <label>Message *</label>
                <textarea
                  rows={2}
                  cols={20}
                  name="messg"
                  value={contactData.messg}
                  onChange={handleChange}
                />
              </div>
              <div className="submit-btn">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </form>

            <ToastContainer position="top-right" autoClose={3000} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
