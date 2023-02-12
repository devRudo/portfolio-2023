import React from 'react';
import PropTypes from 'prop-types';
import CTA from './CTA';
import PROFILE_PIC from './../../assets/profile_pic-preview.png';
import SocialLinks from './SocialLinks';
import './Header.css';

const Header = props => {
  return (
    <header>
      <div class="container header_container">
        <h5>Hello I'am</h5>
        <h1>Vijay Kumar Mishra</h1>
        <h5 className="text-light">Frontend Engineer</h5>
        <CTA></CTA>
        <SocialLinks />

        <div className="profile_pic">
          <img src={PROFILE_PIC} alt="profile pic" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
