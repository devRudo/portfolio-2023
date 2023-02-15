import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaGitlab } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = props => {
  return (
    <footer className="footer_container" id="footer">
      <div className="container">
        <h2>Vijay Kumar Mishra</h2>
        <div className="quick_links">
          <Link to="home">Home</Link>
          <Link to="about">About</Link>
          <Link to="experience">Experience</Link>
          <Link to="services">Services</Link>
          <Link to="portfolio">Portfolio</Link>
          <Link to="contact">Contact</Link>
        </div>
        <div className="social_links">
          <a href="https://www.linkedin.com/in/devrudovj/" target={'__blank'}>
            <BsLinkedin />
          </a>
          <a href="https://github.com/devRudo" target={'__blank'}>
            <FaGithub />
          </a>
          <a href="https://gitlab.com/devRudo" target={'__blank'}>
            <FaGitlab />
          </a>
        </div>
        <div className="copyright_info">&copy; All rights reserved</div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
