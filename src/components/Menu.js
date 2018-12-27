import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyle } from '../index';
import logo from '../images/logo.png';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #191f39;
`;

const LogoWrapper = styled.div`
  padding: 1rem;
`;

const Logo = styled.img`
  height: 2.8rem;
`

const Toggle = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  position: fixed;
  right: -18rem;
  width: 18rem;
  padding: 0 !important;
  height: 100vh;
  transition: .8s ease;
  background-image: linear-gradient(to top right, #f2545b, #f46c72);
  z-index: 10;
  &.active {
    right: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  li {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
  }
  a {
    color: #fff;
    font-size: 1.2rem;
  }
`;

const Hamburger = styled.button`
  background: none;
  border: solid 2px #fff;
  border-radius: .3rem;
  display: inline-block;
  padding: 0 .3rem;
  margin-left: .5rem;
  z-index: 100;
  position: relative;
  height: 28px;
  width: 32px;
  &.active {
    div {
      :nth-child(1) {
        transform: rotate(45deg);
        top: 6px;
      }
      :nth-child(2) {
        height: 0;
      }
      :nth-child(3) {
        transform: rotate(-45deg);
        bottom: 6px;
      }
    }
  }
`;

const Line = styled.div`
  width: 17px;
  height: 2px;
  background-color: #fff;
  margin: .3rem 0;
  position: absolute;
  transition: .8s ease;
  :nth-child(1) {
    top: 0;
  }
  :nth-child(2) {
    top: 6px;
  }
  :nth-child(3) {
    bottom: 0;
  }
`;

class Menu extends Component {
  constructor() {
    super();
  }

  toggleNav() {
    document.body.classList.toggle('menu-active');
    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('.hamburger').classList.toggle('active');
  }

  closeNav() {
    document.body.classList.remove('menu-active');
    document.querySelector('.nav').classList.remove('active');
    document.querySelector('.hamburger').classList.remove('active');
  }

  render() {
    return (
      <Header>
        <GlobalStyle />
        <LogoWrapper>
          <Logo src={logo} />
        </LogoWrapper>
        <Toggle className="container">
          Menu
          <Hamburger
            className="hamburger"
            onClick={this.toggleNav.bind(this)}
          >
            <Line></Line>
            <Line></Line>
            <Line></Line>
          </Hamburger>
        </Toggle>
        <Nav className="nav container">
          <ul>
            <li>
              <Link 
                to="/"
                onClick={this.closeNav.bind(this)}
              >Search</Link>
              <Link
                to="/random-article"
                onClick={this.closeNav.bind(this)}
              >Random Article</Link>
            </li>
          </ul>
        </Nav>
      </Header>
    );
  }
}

export default Menu;
