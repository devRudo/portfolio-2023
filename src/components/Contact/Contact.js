import React from 'react';
import PropTypes from 'prop-types';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import './Contact.css';

const Contact = props => {
  return (
    <section className="container contact_container">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="contact_div">
        <div className="contact_card_container">
          <div className="contact_card email_card">
            <span>
              <HiOutlineMail />
            </span>
            <h3>Email</h3>
            <h5>sarrakvijay@gmail.com</h5>
            <a href="">Send an email</a>
          </div>
          <div className="contact_card call_card">
            <span>
              <BsTelephone />
            </span>
            <h3>Mobile Number</h3>
            <h5>+91-8090192922</h5>
            <a href="">Call me on</a>
          </div>
          <div className="contact_card whatsapp_card">
            <span>
              <AiOutlineWhatsApp />
            </span>
            <h3>WhatsApp</h3>
            <h5>+91-8090192922</h5>
            <a href="">Send a message</a>
          </div>
        </div>
        <div className="contact_form_container">
          <form>
            <input type="text" name="fullname" placeholder="Your Full Name" />
            <input type="email" name="email" placeholder="Your Email *" />
            <textarea rows="8" name="message" placeholder="Your Message *" />
            <button className="btn btn-primary">Send Query</button>
          </form>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {};

export default Contact;
