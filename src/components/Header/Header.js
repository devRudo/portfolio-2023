import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CTA from './CTA';
import PROFILE_PIC from './../../assets/01.png';
import SocialLinks from './SocialLinks';
import './Header.css';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

const Header = props => {
  const [currentText, setCurrentText] = useState([0, 1]);

  return (
    <header id="home">
      <div class="container header_container">
        {currentText.includes(0) ? (
          <TypeAnimation
            sequence={[
              'Frontend Engineer',
              2000,
              'Web Developer',
              2000,
              'Fullstack Developer',
              2000,
              // () => setCurrentText(prev => [...prev, 1]),
            ]}
            repeat={Infinity}
            className="role"
            wrapper="h3"
            speed={10}
            cursor={false}
            // omitDeletionAnimation={true}
            // preRenderFirstString={true}
          />
        ) : null}
        {currentText.includes(1) ? (
          <TypeAnimation
            sequence={[
              'Vijay Kumar Mishra',
              1000,
              () => setCurrentText(prev => [...prev, 2]),
            ]}
            wrapper="h1"
            speed={50}
            cursor={false}
          />
        ) : (
          <h1 style={{ visibility: 'hidden' }}>fdsgsgsgs</h1>
        )}
        {currentText.includes(2) ? (
          <TypeAnimation
            className="text-light"
            sequence={[
              'Crafting Seamless User Experiences with Expertise!',
              1000,
            ]}
            wrapper="h4"
            speed={50}
            cursor={true}
          />
        ) : (
          <h4 style={{ visibility: 'hidden' }}>fsdgsdgdsg</h4>
        )}
        <CTA></CTA>
        <SocialLinks />

        <div className="profile_pic">
          <img
            src={PROFILE_PIC}
            alt="profile pic"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        <Link to="footer" className="scroll_down">
          Scroll Down
        </Link>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
