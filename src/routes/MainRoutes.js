import React from 'react';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import { Home } from '../pages';

const MainRoutes = props => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
    </Routes>
  );
};

MainRoutes.propTypes = {};

export default MainRoutes;
