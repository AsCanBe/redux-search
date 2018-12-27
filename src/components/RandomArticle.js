import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fff;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  button {
    padding: 1rem;
    color: #fff;
    font-weight: 700;
    background-color: #F2545B;
    display: inline-block;
    border: none;
    border-radius: 50px;
  }
`

const RandomArticle = () => (
  <Wrapper>
    <h2>Coming Soon!</h2>
    <Link to="/">
      <button>Back</button>
    </Link>
  </Wrapper>
);

export default RandomArticle;
