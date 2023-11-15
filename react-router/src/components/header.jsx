import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <>
        <nav>
            <NavLink to="/" className="link">Home</NavLink>
            <NavLink to="/about" className="link">About</NavLink>
            <NavLink to="/contact" className="link">Contact</NavLink>
        </nav>
    </>
  )
}

export default Header