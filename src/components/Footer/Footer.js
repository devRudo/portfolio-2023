import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaGitlab } from 'react-icons/fa';

const Footer = props => {
  return (
    <footer className="footer_container">
      <div className="container">
        <h2>Vijay Kumar Mishra</h2>
        <div className="quick_links">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Experience</a>
          <a href="">Services</a>
          <a href="">Portfolio</a>
          <a href="">Contact</a>
        </div>
        <div className="social_links">
          <a href="https://linkedin.com/in" target={'__blank'}>
            <BsLinkedin />
          </a>
          <a href="https://github.com" target={'__blank'}>
            <FaGithub />
          </a>
          <a href="https://gitlab.com" target={'__blank'}>
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
