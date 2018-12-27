import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyle } from '../index';
import Menu from '../components/Menu';
import Results from '../components/Results';
import RandomArticle from '../components/RandomArticle';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const AppRouter = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Wrapper>
        <GlobalStyle />
        <Menu />
        <Route exact path="/" component={Results} />
        <Route path="/random-article" component={RandomArticle} />
      </Wrapper>
    </Router>
  </Provider>
);

export default AppRouter;
