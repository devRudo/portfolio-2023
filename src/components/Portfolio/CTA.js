import React from 'react';
import CV from '../../assets/Updated_Resume_Feb_7.pdf';

const CTA = () => {
  return (
    <div className="cta_project">
      <a href={CV} download className="btn">
        Github
      </a>
      <a href="#contact" className="btn btn-primary">
        Live Demo
      </a>
    </div>
  );
};

export default CTA;
