import React from 'react';
import PropTypes from 'prop-types';
import { GiChargedArrow } from 'react-icons/gi';
import { AiOutlineUser, AiOutlineHome } from 'react-icons/ai';
import { HiOutlineRectangleStack } from 'react-icons/hi2';
import { MdMiscellaneousServices, MdOutlineContactMail } from 'react-icons/md';
import { Link } from 'react-scroll';
import './Navigation.css';

const Navigation = props => {
  return (
    <nav>
      <Link to="home" activeClass="active" spy={true}>
        <AiOutlineHome />
      </Link>
      <Link to="about" activeClass="active" spy={true}>
        <AiOutlineUser />
      </Link>
      <Link to="experience" activeClass="active" spy={true}>
        <GiChargedArrow />
      </Link>
      <Link to="services" activeClass="active" spy={true}>
        <MdMiscellaneousServices />
      </Link>
      <Link to="portfolio" activeClass="active" spy={true}>
        <HiOutlineRectangleStack />
      </Link>
      <Link to="contact" activeClass="active" spy={true}>
        <MdOutlineContactMail />
      </Link>
    </nav>
  );
};

Navigation.propTypes = {};

export default Navigation;
