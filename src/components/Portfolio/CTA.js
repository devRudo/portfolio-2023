import React from 'react';
// import CV from '../../assets/Updated_Resume_Feb_7.pdf';

const CTA = ({ github, demoLink }) => {
  return (
    <div className="cta_project">
      {github ? (
        <a href={github} target="_blank" download className="btn">
          Github
        </a>
      ) : null}
      <a href={demoLink} target="_blank" className="btn btn-primary">
        Live Demo
      </a>
    </div>
  );
};

export default CTA;
