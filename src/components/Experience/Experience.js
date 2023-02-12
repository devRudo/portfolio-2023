import React from 'react';
import PropTypes from 'prop-types';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './Experience.css';

const Experience = props => {
  return (
    <section className="container experience_container">
      <h5>Skills I have</h5>
      <h2>Technical Skills</h2>
      <div className="experience_div">
        <div className="experience_card frontend_experience_card">
          <h2>Frontend Development</h2>
          <div className="skills">
            <ul>
              <li>
                <span>
                  <BsFillPatchCheckFill />
                </span>
                <div>
                  <h3>HTML</h3>
                  <h4>Experienced</h4>
                </div>
              </li>
              <li>
                <span>
                  <BsFillPatchCheckFill />
                </span>
                <div>
                  <h3>JavaScript</h3>
                  <h4>Experienced</h4>
                </div>
              </li>
              <li>
                <span>
                  <BsFillPatchCheckFill />
                </span>
                <div>
                  <h3>Material UI</h3>
                  <h4>Experienced</h4>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <BsFillPatchCheckFill />
                </span>
                <div>
                  <h3>CSS</h3>
                  <h4>Experienced</h4>
                </div>
              </li>
              <li>
                <span>
                  <BsFillPatchCheckFill />
                </span>
                <div>
                  <h3>Bootstrap</h3>
                  <h4>Experienced</h4>
                </div>
              </li>
              <li>
                <span>
                  <BsFillPatchCheckFill />
                </span>
                <div>
                  <h3>React JS</h3>
                  <h4>Experienced</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="experience_card backend_experience_card">
          <h2>Backend Development</h2>
          <div className="skills">
            <ul>
              <li>
                <span>
                  <BsFillPatchCheckFill />
                </span>
                <div>
                  <h3>Node JS</h3>
                  <h4>Intermediate</h4>
                </div>
              </li>
              <li>
                <span>
                  <BsFillPatchCheckFill />
                </span>
                <div>
                  <h3>PHP</h3>
                  <h4>Intermediate</h4>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <BsFillPatchCheckFill />
                </span>
                <div>
                  <h3>MongoDB</h3>
                  <h4>Intermediate</h4>
                </div>
              </li>
              <li>
                <span>
                  <BsFillPatchCheckFill />
                </span>
                <div>
                  <h3>MySQL</h3>
                  <h4>Basic</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

Experience.propTypes = {};

export default Experience;
