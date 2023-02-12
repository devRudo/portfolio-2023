import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import About from '../../components/About';
import Experience from '../../components/Experience';
import Services from '../../components/Services';
import Portfolio from '../../components/Portfolio';
import Contact from '../../components/Contact';

const Home = props => {
  return (
    <div>
      <Header />
      <Navigation />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

Home.propTypes = {};

export default Home;
