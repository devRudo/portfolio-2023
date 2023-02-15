import React from 'react';
import PropTypes from 'prop-types';
import { FiCheck } from 'react-icons/fi';
import './Services.css';

const Services = props => {
  return (
    <section className="container services_container" id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="services_div">
        <div className="service_card">
          <div className="service_card_title">
            <h3>Product Wireframing/UI/UX</h3>
          </div>
          <div className="service_card_items">
            <ul>
              <li>
                <span>
                  <FiCheck />
                </span>
                <p>
                  Specialize in product wireframing and UI/UX design services.
                </p>
              </li>
              <li>
                <span>
                  <FiCheck />
                </span>
                <p>
                  Designing and developing digital products that provide a
                  seamless user experience.
                </p>
              </li>
              <li>
                <span>
                  <FiCheck />
                </span>
                <p>Attractive design that enhances the user experience.</p>
              </li>
              <li>
                <span>
                  <FiCheck />
                </span>
                <p>
                  User research, wireframing, interactive prototyping, usability
                  testing, responsive design, information architecture,
                  accessibility design, design system development, and branding
                  and visual identity design
                </p>
              </li>
              <li>
                <span>
                  <FiCheck />
                </span>
                <p>Contact me for more updates.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="service_card">
          <div className="service_card_title">
            <h3>Web Development</h3>
          </div>
          <div className="service_card_items">
            <ul>
              <li>
                <span>
                  <FiCheck />
                </span>
                <p>
                  Developing website that is tailored to your business needs.
                </p>
              </li>
              <li>
                <span>
                  <FiCheck />
                </span>
                <p>
                  Providing a variety of website development and maintenance
                  services for any business domain.
                </p>
              </li>
              <li>
                <span>
                  <FiCheck />
                </span>
                <p>
                  Providing clients with a website that is effective, efficient,
                  and visually appealing.
                </p>
              </li>
              <li>
                <span>
                  <FiCheck />
                </span>
                <p>Contact me for more updates.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="service_card">
          <div className="service_card_title">
            <h3>Mobile Development</h3>
          </div>
          <div className="service_card_items">
            <ul>
              <li>
                <span>
                  <FiCheck />
                </span>
                <p>
                  Professional Mobile Development Services for Your Business.
                </p>
              </li>
              <li>
                <span>
                  <FiCheck />
                </span>
                <p>
                  Easy and convenient way for customers to interact with your
                  business, and they can help you build brand loyalty and
                  increase revenue.
                </p>
              </li>
              <li>
                <span>
                  <FiCheck />
                </span>
                <p>
                  Using latest cross platform and across devices technologies
                  for mobile development.
                </p>
              </li>
              <li>
                <span>
                  <FiCheck />
                </span>
                <p>
                  Providing clients with a mobile app that is effective,
                  efficient, and visually appealing.
                </p>
              </li>
              <li>
                <span>
                  <FiCheck />
                </span>
                <p>Contact me for more updates.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

Services.propTypes = {};

export default Services;
