import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/ReactLogo.png')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/D3' activeStyle>
            D3
          </NavLink>
          <NavLink to='/PowerBI' activeStyle>
            PowerBI
          </NavLink>
          <NavLink to='/Data' activeStyle>
            Data
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
