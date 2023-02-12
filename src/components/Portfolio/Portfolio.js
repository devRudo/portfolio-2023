import React from 'react';
import PropTypes from 'prop-types';
import PROJECT_PIC_1 from '../../assets/1.png';
import PROJECT_PIC_2 from '../../assets/2.png';
import PROJECT_PIC_3 from '../../assets/3.png';
import PROJECT_PIC_4 from '../../assets/4.webp';
import PROJECT_PIC_5 from '../../assets/5.jpg';
import CTA from './CTA.js';
import './Portfolio.css';

const Portfolio = props => {
  return (
    <section className="container portfolio_container">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="portfolio_cards_container">
        <div className="portfolio_card">
          <img src={PROJECT_PIC_1} alt="" className="project_pic" />
          <h3>Project Title</h3>
          <CTA></CTA>
        </div>
        <div className="portfolio_card">
          <img src={PROJECT_PIC_2} alt="" className="project_pic" />
          <h3>Project Title</h3>
          <CTA></CTA>
        </div>
        <div className="portfolio_card">
          <img src={PROJECT_PIC_3} alt="" className="project_pic" />
          <h3>Project Title</h3>
          <CTA></CTA>
        </div>
      </div>
      <div className="portfolio_cards_container">
        <div className="portfolio_card">
          <img src={PROJECT_PIC_4} alt="" className="project_pic" />
          <h3>Project Title</h3>
          <CTA></CTA>
        </div>
        <div className="portfolio_card">
          <img src={PROJECT_PIC_5} alt="" className="project_pic" />
          <h3>Project Title</h3>
          <CTA></CTA>
        </div>
        <div className="portfolio_card">
          <img src={PROJECT_PIC_1} alt="" className="project_pic" />
          <h3>Project Title</h3>
          <CTA></CTA>
        </div>
      </div>
    </section>
  );
};

Portfolio.propTypes = {};

export default Portfolio;
