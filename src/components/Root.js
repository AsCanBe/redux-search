import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    Router
);

export default Root;
