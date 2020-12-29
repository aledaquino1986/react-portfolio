import React from "react";
import Seo from "./Seo";
import splash from "../images/splash.svg";

function Contact() {
  return (
    <section className="form-page">
      <Seo title="Contact" />
      <div className="form-wrapper">
        <h3 className="contact-me">Contact me</h3>
        <form className="contact-form">
          <div className="form-section">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Lionel" />
          </div>
          <div className="form-section">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="lionelmessi@gmail.com"
            />
          </div>

          <div className="form-section">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="90"
              rows="15"
            ></textarea>
          </div>
          <button type="button">Send me a Message!</button>
        </form>
      </div>
      <img src={splash} alt="decoration" className="background" />
    </section>
  );
}

export default Contact;
