import React from "react";
import image from "../assets/hostel4.jpg";
import "../styles/Contact.css";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
     <Navbar/>
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Contact;
