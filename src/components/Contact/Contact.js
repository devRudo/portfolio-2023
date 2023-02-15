import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import './Contact.css';

const Contact = props => {
  const [fullname, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const fullNameRef = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = () => {
    if (email.trim() && message.trim()) {
      setSending(true);
      axios
        .post('https://us-central1-caanuragmishra.cloudfunctions.net/submit', {
          name: fullname,
          email: email,
          mobileNumber: mobileNumber,
          subject: '',
          message: message,
        })
        .then(res => {
          setError(false);
          setSuccess(true);
          setSending(false);
          setEmail('');
          setFullName('');
          setMobileNumber('');
          setMessage('');
        })
        .catch(error => {
          setError(true);
          setSuccess(false);
          setSending(false);
        });
    } else {
      setError('Please fill all the required fields');
    }
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess('');
      }, 6000);
    }
  }, [success]);

  return (
    <section className="container contact_container" id="contact">
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
            <a href="mailto:sarrakvijay@gmail.com">Send an email</a>
          </div>
          <div className="contact_card call_card">
            <span>
              <BsTelephone />
            </span>
            <h3>Mobile Number</h3>
            <h5>+91-8090192922</h5>
            <a href="tel:+91-8090192922">Call me on</a>
          </div>
          <div className="contact_card whatsapp_card">
            <span>
              <AiOutlineWhatsApp />
            </span>
            <h3>WhatsApp</h3>
            <h5>+91-8090192922</h5>
            <a
              href="https://api.whatsapp.com/send?phone=918090192922"
              target={'__blank'}
            >
              Send a message
            </a>
          </div>
        </div>
        <div className="contact_form_container">
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <input
              // autoFocus
              ref={fullNameRef}
              type="text"
              name="fullname"
              placeholder="Your Full Name"
              value={fullname}
              onChange={e => setFullName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className={error ? 'error_input' : ''}
            />
            <input
              type="number"
              name="mobileNumber"
              placeholder="Your Mobile Number"
              value={mobileNumber}
              onChange={e => setMobileNumber(e.target.value)}
            />
            <textarea
              rows="8"
              name="message"
              placeholder="Your Message *"
              value={message}
              onChange={e => setMessage(e.target.value)}
              className={error ? 'error_input' : ''}
            />
            {error ? (
              <span id="enquiry_message_error">
                {typeof error === 'string'
                  ? error
                  : 'Failed to submit response. Please try again!'}
              </span>
            ) : null}
            {success ? (
              <div className="alert alert-success" role="alert">
                Thank you for submitting your query. We will get to you soon.
              </div>
            ) : null}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={sending}
            >
              Send Query
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {};

export default Contact;
