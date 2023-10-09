import React from 'react';
import PropTypes from 'prop-types';
import PROJECT_PIC_1 from '../../assets/Weatherly.png';
import PROJECT_PIC_2 from '../../assets/Pomofocur.png';
import PROJECT_PIC_3 from '../../assets/ca.png';
import PROJECT_PIC_4 from '../../assets/rsajay-alt.png';
import PROJECT_PIC_5 from '../../assets/5.jpg';
import CTA from './CTA.js';
import './Portfolio.css';

const Portfolio = props => {
  return (
    <section className="container portfolio_container" id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="portfolio_cards_container">
        <div className="portfolio_card">
          <img src={PROJECT_PIC_1} alt="" className="project_pic" />
          <h3>Weatherly (Mobile & Web)</h3>
          <CTA
            github={'https://github.com/devRudo/weatherly-web'}
            demoLink={'https://weatherly-web.vercel.app/'}
          ></CTA>
        </div>
        <div className="portfolio_card">
          <img src={PROJECT_PIC_2} alt="" className="project_pic" />
          <h3>Pomofocar (Mobile & Web)</h3>
          <CTA
            github={'https://github.com/devRudo/pomofocar'}
            demoLink={'https://pomofocar.vercel.app'}
          ></CTA>
        </div>
        <div className="portfolio_card">
          <img src={PROJECT_PIC_3} alt="" className="project_pic" />
          <h3>Mishra Anurag & Company</h3>
          <CTA
            // github={'https://github.com/devRudo/weatherly-web'}
            demoLink={'https://caanuragmishra.com'}
          ></CTA>
        </div>
        <div className="portfolio_card">
          <img src={PROJECT_PIC_4} alt="" className="project_pic" />
          <h3>RS Ajay</h3>
          <CTA demoLink={'https://rsajay.com'}></CTA>
        </div>
        {/* <div className="portfolio_card">
          <img src={PROJECT_PIC_5} alt="" className="project_pic" />
          <h3>Project Title</h3>
          <CTA></CTA>
        </div>
        <div className="portfolio_card">
          <img src={PROJECT_PIC_1} alt="" className="project_pic" />
          <h3>Project Title</h3>
          <CTA></CTA>
        </div> */}
      </div>
    </section>
  );
};

Portfolio.propTypes = {};

export default Portfolio;
