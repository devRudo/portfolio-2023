import React from 'react';
import PropTypes from 'prop-types';
import {GiChargedArrow} from 'react-icons/gi'
import {AiOutlineUser, AiOutlineHome} from 'react-icons/ai'
import {HiOutlineRectangleStack } from 'react-icons/hi2'
import {MdMiscellaneousServices, MdOutlineContactMail} from 'react-icons/md'
import './Navigation.css'

const Navigation = props => {
  return (
    <nav>
      <a href="#home" className='active'><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><GiChargedArrow /></a>
      <a href="#portfolio"><HiOutlineRectangleStack /></a>
      <a href="#services"><MdMiscellaneousServices /></a>
      <a href="#contact"><MdOutlineContactMail /></a>
    </nav>
  )
};

Navigation.propTypes = {};

export default Navigation;
