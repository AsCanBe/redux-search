import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { createGlobalStyle } from 'styled-components';
import rootReducer from './reducers/results';
import AppRouter from './routers/AppRouter';
import 'normalize.css';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f3f5f6;
    color: #262626;
    font-family: 'Open Sans Condensed', Arial, Helvetica, sans-serif;
    font-size: .9rem;
    font-weight: 100;
    a {
      text-decoration: none;
    }
    nav a {
      font-weight: 700;
    }
    &.menu-active {
      wax-width: 100%;
      overflow: hidden;
    }
  }
  .container {
    padding: 1rem;
  }
  .text-box {
    padding: .1rem 1rem;
  }
  h3 {
    font-family: Playfair Display, Times New Roman, serif;
    font-size: 1.1rem;
  }
`

const store = createStore(
  rootReducer,
  // Redux dev tools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Router>
    <AppRouter store={store} />
  </Router>,
  document.getElementById('app')
);
