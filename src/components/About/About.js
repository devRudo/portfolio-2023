import React from 'react';
import PropTypes from 'prop-types';
import PROFILE_PIC_V2 from '../../assets/profile_pic_v4.png';
import { GiChargedArrow } from 'react-icons/gi';
import { FiUsers } from 'react-icons/fi';
import { HiOutlineRectangleStack } from 'react-icons/hi2';
import CTA from './CTA';
import './About.css';

const About = props => {
  return (
    <section className="container about_container" id="about">
      <h5>Get to know more</h5>
      <h2>About Me</h2>
      <div className="about_description_text_n_cards">
        <div className="about_cards">
          <div className="about_card">
            <span>
              <GiChargedArrow />
            </span>
            <h3>Experience</h3>
            <h5>3+ Years Working</h5>
          </div>
          <div className="about_card">
            <span>
              <FiUsers />
            </span>
            <h3>Clients</h3>
            <h5>5+ Satisfied Clients</h5>
          </div>
          <div className="about_card">
            <span>
              <HiOutlineRectangleStack />
            </span>
            <h3>Projets</h3>
            <h5>8+ Projects</h5>
          </div>
        </div>
        <div className="about_description">
          <p className="about_description_text">
            Passionate and experienced React Developer with extensive hands-on
            experience in developing web and mobile application with designing
            and implementing highly- responsive user interfaces/components by
            deploying React JS / React Native concepts.
          </p>
          <CTA></CTA>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {};

export default About;
